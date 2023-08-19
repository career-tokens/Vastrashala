import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Item from '../../components/Item';

const AdminPanel = () => {
  const mainUrl = 'https://vastra-backend-node.onrender.com/api/users';
  const expectedPassword = process.env.REACT_APP_PASSWORD; // Set your expected password here

  const [resultArray, setResultArray] = useState([]);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const fetchItemsWithImages = async (itemId) => {
    const itemUrl = `https://vastra-backend-strapi.onrender.com/api/items/${itemId}?populate=image`;
    const response = await fetch(itemUrl);
    const json = await response.json();
    return json;
  };

  const fetchData = async () => {
    try {
      const response = await fetch(mainUrl);
      const data = await response.json();

      const processedData = [];

      for (const dataElement of data.data) {
        const elementId = dataElement._id;
        const bodyIds = dataElement.body;
        if (bodyIds) {
          const fetchedResponses = [];
          for (const bodyId of bodyIds) {
            const response = await fetchItemsWithImages(bodyId);
            fetchedResponses.push(response);
          }

          processedData.push({
            _id: elementId,
            responses: fetchedResponses,
          });
        }
      }

      setResultArray(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePasswordSubmit = () => {
    if (password === expectedPassword) {
      setIsPasswordCorrect(true);
    }
  };

  return (
    <Box width="80%" m="20vh auto">
      {!isPasswordCorrect ? (
        <Box display="flex" flexDirection="column">
          <TextField
            label="Enter Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={handlePasswordSubmit}>
            Submit
          </Button>
        </Box>
      ) : (
        resultArray.map(({ _id, responses }) => (
          <Box mt="50px" width="100%" key={_id}>
            <Typography variant="h3" fontWeight="bold">
              {_id}
            </Typography>
            <Box
              mt="20px"
              display="flex"
              flexWrap="wrap"
              columnGap="1.33%"
              rowGap="2.5vh"
              justifyContent="space-between"
            >
              {responses.map((item, i) => (
                <Item key={`${item.name}-${i}`} item={item.data} />
              ))}
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default AdminPanel;

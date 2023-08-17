import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Item from '../../components/Item'
import { useStytchUser } from '@stytch/react';

const UserAccount = () => {
    const { user } = useStytchUser();
    const email = user.emails[0].email; 

    const [userItems, setUserItems] = useState([]);
    const [items, setItems] = useState([]);
    const [data,setData] = useState([]);

//for items user has already bought
    async function getUserItems() {
        const url = `http://localhost:8080/api/users/${email}`;
        const response = await fetch(url);
        const data = await response.json();
        const itemIds = data.data.body; 
        setData(itemIds);
  
  const items = [];

  for (const itemId of itemIds) {
    const itemResponse = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    
    const itemData = await itemResponse.json();
    items.push(itemData);
        }
  //console.log("items",items);
  setUserItems(items);
      }
    //for also check items
    async function getItems() {
        const items = await fetch(
          `http://localhost:1337/api/items?populate=image`,
          {
            method: "GET",
          }
        );
        const itemsJson = await items.json();
       // console.log(itemsJson.data);
        setItems(itemsJson.data);
      }
    
      useEffect(() => {
        getUserItems();
        getItems();
      }, []);
    
  return (
      <Box width="80%" m="20vh auto">
          {/**User's bought products */}
         <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Items Purchased Previously :-)
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
                  columnGap="1.33%"
                  rowGap="2.5vh"
          justifyContent="space-between"
        >
          {userItems&&userItems.map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item.data} />
          ))}
        </Box>
      </Box>
      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Also Check :-)
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
                  columnGap="1.33%"
                  rowGap="2.5vh"
          justifyContent="space-between"
        >
          {items.filter((item, index) => !data.includes(index)).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default UserAccount
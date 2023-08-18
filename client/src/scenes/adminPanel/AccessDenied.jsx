import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AccessDeniedComponent = () => {
  const containerStyle = {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const textStyle = {
    color: 'red',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <Box style={containerStyle}>
      <Typography variant="h3" style={textStyle}>
        Access Denied
      </Typography>
    </Box>
  );
};

export default AccessDeniedComponent;

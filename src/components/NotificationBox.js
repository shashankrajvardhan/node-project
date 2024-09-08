import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const NotificationBox = ({ title, description, buttonText, secondaryButtonText }) => {
  return (
    <Box bgcolor="#FFF7E1" p={3} borderRadius={4}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1" my={2}>{description}</Typography>
      <Button variant="contained" color="primary">{buttonText}</Button>
      {secondaryButtonText && (
        <Button variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>
          {secondaryButtonText}
        </Button>
      )}
    </Box>
  );
};

export default NotificationBox;

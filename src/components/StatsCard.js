import React from 'react';
import { Box, Typography } from '@mui/material';

const StatsCard = ({ title, description, orders, views }) => {
  return (
    <Box bgcolor="#FFF7E1" p={3} borderRadius={4}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1" my={2}>{description}</Typography>
      {orders !== undefined && (
        <Typography variant="h6">Orders: {orders}</Typography>
      )}
      {views !== undefined && (
        <Typography variant="h6">Tracking Page Views: {views}</Typography>
      )}
    </Box>
  );
};

export default StatsCard;

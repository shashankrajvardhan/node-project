import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const ColorPicker = ({ title }) => {
  const [accentColor, setAccentColor] = useState('#FF9888');
  const [textColor, setTextColor] = useState('#571010');
  const [bgColor, setBgColor] = useState('#FFEEAA');

  return (
    <Box bgcolor="#FFF7E1" p={3} borderRadius={4}>
      <Typography variant="h6">{title}</Typography>
      <Box mt={2}>
        <label>Accent Color</label>
        <input
          type="color"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
        />
      </Box>
      <Box mt={2}>
        <label>Text Color</label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </Box>
      <Box mt={2}>
        <label>Background Color</label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </Box>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Apply Colors
      </Button>
    </Box>
  );
};

export default ColorPicker;

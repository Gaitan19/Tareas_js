import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Counter = () => {
  return (
    <TextField
      id="filled-number"
      label="Number"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
    />
  );
};

export default Counter;

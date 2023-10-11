import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Counter = () => {
  const handleCounter = (input) => {
    console.log(input.target.value);
  };

  return (
    <form>
      <TextField
        id="filled-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        inputProps={{ min: 1, max: 100 }}
        onChange={handleCounter}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Counter;

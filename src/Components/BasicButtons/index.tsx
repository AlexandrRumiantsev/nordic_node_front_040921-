import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BasicButtons({style, text, onClick}: any) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      { style == 1 && <Button onClick={onClick} variant="text">{text}</Button>}
      { style == 2 && <Button onClick={onClick} variant="contained">{text}</Button> }
      { style == 3 && <Button onClick={onClick} variant="outlined">{text}</Button> }
    </Box>
  );
}
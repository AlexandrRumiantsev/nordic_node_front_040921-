import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({style, label, value, onChange, name, arrayRefs}: any) {

  const refField: any = React.createRef();

  arrayRefs && arrayRefs.push(refField)

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    {   style === 1 && <TextField name={name} ref={refField} onChange={onChange} value={value} id="outlined-basic" label={label} variant="outlined" /> }
    {   style === 2 && <TextField name={name} ref={refField} onChange={onChange} value={value} id="filled-basic" label={label} variant="filled" /> }
    {   style === 3 && <TextField name={name} ref={refField} onChange={onChange} value={value} id="standard-basic" label={label} variant="standard" /> }
    </Box>
  );
}
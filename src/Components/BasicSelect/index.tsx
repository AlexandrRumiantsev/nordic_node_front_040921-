import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({langs, setCurrentLang, currentLang}: any ) {

  const [age, setAge] = React.useState('');

  const handleChange = (event: any) => {
    setAge(event.target.value);
    setCurrentLang(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Язык
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentLang}
          label="Age"
          onChange={handleChange}
        >
          {
            langs.map( (itemLang: any) => (
                <MenuItem value={itemLang}>{itemLang}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}
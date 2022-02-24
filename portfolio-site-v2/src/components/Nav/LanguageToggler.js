import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';

const LanguageToggler = () => {
    
  return (
    <>
        <FormControl>
            <Select
            value={'En'}
            >
                <MenuItem value='En'>En</MenuItem>
                <MenuItem value='Fr'>Fr</MenuItem>
            </Select>
        </FormControl>
    </>
  );
}

export default LanguageToggler;
'use client'

import { useState } from 'react'
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { SelectorProps } from '@/types';
import { handleSelection } from '@/actions/formActions';

function Selector({ options, title, onSelect }: SelectorProps) {
  const [selection, setSelection] = useState<string>('')

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <InputLabel id="demo-select-small-label">{title}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selection}
          label={title}
          onChange={(event) => handleSelection({ 
            event, 
            setSelection, 
            onSelect 
          })}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default Selector

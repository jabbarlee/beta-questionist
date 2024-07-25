'use client'

import { useState } from 'react'
import { MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { OptionsProps, SelectorProps } from '@/types';


function Selector({ options, title, onSelect }: SelectorProps) {
  const [selection, setSelection] = useState<string>('')

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string
    setSelection(value)
    onSelect(value) // Call the callback function with the selected value
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">{title}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selection}
          label={title}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={options.option1}>{options.option1}</MenuItem>
          <MenuItem value={options.option2}>{options.option2}</MenuItem> 
          {options.option3 && <MenuItem value={options.option3}>{options.option3}</MenuItem>}
        </Select>
      </FormControl>
    </div>
  )
}

export default Selector

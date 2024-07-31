'use client';

import React from 'react';
import { Chip, Stack } from '@mui/material';
import { ChipProps } from '../../types/formActionsProps';

const SelectionChip = ({ chips, selectedChips, onChipClick }: ChipProps) => {
  return (
    <Stack direction="row" spacing={1}>
      {chips.map((chip, index) => (
        <Chip
          key={index}
          onClick={() => onChipClick(chip)}
          label={chip}
          variant={selectedChips.includes(chip) ? "filled" : "outlined"}
          color={selectedChips.includes(chip) ? "success" : "default"}
        />
      ))}
    </Stack>
  );
};

export default SelectionChip;

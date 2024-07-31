'use client';

import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectionChip from '../SelectionChip';

function Index({
  title,
  metaText,
  chips
}: {
  title: string;
  metaText: string;
  chips: string[];
}) {
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const handleChipClick = (label: string) => {
    setSelectedChips(prevSelectedChips => {
      if (prevSelectedChips.includes(label)) {
        return prevSelectedChips.filter(chip => chip !== label);
      } else {
        return [...prevSelectedChips, label];
      }
    });
    console.log(`Selected chips: ${selectedChips} in ${title}`);
  };

  return (
    <div>
      <Accordion sx={{ boxShadow: 'none', border: '1px solid #ddd', borderRadius: '8px', '&:before': { display: 'none' } }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel1-header"
          sx={{
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
        >
          <Typography>
            {metaText}
          </Typography>
          <br/>
          <SelectionChip chips={chips} selectedChips={selectedChips} onChipClick={handleChipClick} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Index;

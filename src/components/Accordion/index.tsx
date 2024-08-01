
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectionChip from '../SelectionChip';
import { AccordionSelectionProps } from '@/types/formActionsProps';

const AccordionSelection: React.FC<AccordionSelectionProps> = ({
  title,
  metaText,
  chips,
  accordionId,
  selectedChips,
  onChipClick,
}) => {
  return (
    <Accordion sx={{ boxShadow: 'none', border: '1px solid #ddd', borderRadius: '8px', '&:before': { display: 'none' } }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id={`${accordionId}-header`}
        sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
        <Typography>{metaText}</Typography>
        <br />
        <SelectionChip chips={chips} selectedChips={selectedChips} onChipClick={onChipClick} />
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionSelection;

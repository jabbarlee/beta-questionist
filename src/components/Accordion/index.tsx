
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
    <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' }, width: '100%' }} defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id={`${accordionId}-header`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails >
        <Typography>{metaText}</Typography>
        <br />
        <SelectionChip chips={chips} selectedChips={selectedChips} onChipClick={onChipClick} />
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionSelection;

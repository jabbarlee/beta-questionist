'use client';

import React, { useState, useEffect } from 'react';
import AccordionSelection from '../Accordion';
import styles from './index.module.css';
import { handleChipClick } from '@/actions/handleChipClick';
import { accordions, units } from '@/lib/data/questionConfig';
import { Typography, Divider, Button } from '@mui/material';

const ConfigSide = ({
  onSubmit,
} : {
  onSubmit: (selectedChipsState: { [key: string]: string[] }) => void
}) => {
  const [selectedChipsState, setSelectedChipsState] = useState<{ [key: string]: string[] }>({});
  const [filteredUnits, setFilteredUnits] = useState<string[]>([]);

  useEffect(() => {
    if(selectedChipsState.content_area){
      const newFilteredUnits = selectedChipsState.content_area.reduce<string[]>((acc, area) => {
        const areaUnits = units[area] || [];
        return [...acc, ...areaUnits];
      }, []);
      setFilteredUnits(newFilteredUnits);
    }
  }, [selectedChipsState]);
  
  return (
    <div className={styles.configSide}>
      <div className={styles.mainContainer}>
        <div className={styles.accordionsContainer}>
          <Typography variant="h5">Configure the question</Typography>
          <br />
          <Divider />
          <br />
          {accordions.map((accordion) => (
            <AccordionSelection
              key={accordion.id}
              title={accordion.title}
              metaText={accordion.metaText}
              chips={accordion.chips}
              accordionId={accordion.id}
              selectedChips={selectedChipsState[accordion.id] || []}
              onChipClick={(chip) => handleChipClick({ accordionId: accordion.id, chip, setSelectedChipsState })}
            />
          ))}
          <AccordionSelection
            title="Select Units"
            metaText="Select the units based on your previous selections."
            chips={filteredUnits}
            accordionId="unitsAccordion"
            selectedChips={selectedChipsState['unitsAccordion'] || []}
            onChipClick={(chip) => handleChipClick({ accordionId: 'unitsAccordion', chip, setSelectedChipsState })}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button variant="outlined">
            Reset
          </Button>
          <Button variant='contained' color="secondary" onClick={() => onSubmit(selectedChipsState)}>
            Generate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfigSide;

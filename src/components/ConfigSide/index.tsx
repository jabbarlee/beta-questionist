'use client';

import React, { useState } from 'react';
import AccordionSelection from '../Accordion';
import styles from './index.module.css';
import { handleChipClick } from '@/actions/handleChipClick';
import { accordions } from '@/lib/data/questionConfig';
import { Typography, Divider } from '@mui/material';

const ConfigSide = () => {
  const [selectedChipsState, setSelectedChipsState] = useState<{ [key: string]: string[] }>({});


  const combinedSelectedChips = Object.values(selectedChipsState).flat();

  return (
    <div className={styles.configSide}>
        <Typography variant="h5">Configure the question</Typography>
        <br/>
        <Divider />
        <br/>
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
    </div>
  );
};

export default ConfigSide;

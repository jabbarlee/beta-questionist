'use client';

import React, { useState } from 'react';
import AccordionSelection from '../Accordion';
import styles from './index.module.css';
import { handleChipClick } from '@/actions/handleChipClick';

const ConfigSide = () => {
  const [selectedChipsState, setSelectedChipsState] = useState<{ [key: string]: string[] }>({});

  const accordions = [
    { id: 'accordion1', title: 'Accordion 1', metaText: 'Meta text 1', chips: ['Chip 1', 'Chip 2', 'Chip 3'] },
    { id: 'accordion2', title: 'Accordion 2', metaText: 'Meta text 2', chips: ['Chip 4', 'Chip 5', 'Chip 6'] },
    // Add more accordions as needed
  ];

  const combinedSelectedChips = Object.values(selectedChipsState).flat();

  return (
    <div className={styles.configSide}>
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
      <div>
        Combined Selected Chips: {combinedSelectedChips.join(', ')}
      </div>
    </div>
  );
};

export default ConfigSide;

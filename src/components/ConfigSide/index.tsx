'use client';

import React, { useState } from 'react';
import AccordionSelection from '../Accordion';
import styles from './index.module.css';

const ParentComponent: React.FC = () => {
  const [selectedChipsState, setSelectedChipsState] = useState<{ [key: string]: string[] }>({});

  const handleChipClick = (accordionId: string, chip: string) => {
    setSelectedChipsState((prevState) => {
      const selectedChips = prevState[accordionId] || [];
      const newSelectedChips = selectedChips.includes(chip)
        ? selectedChips.filter((c) => c !== chip)
        : [...selectedChips, chip];

      return {
        ...prevState,
        [accordionId]: newSelectedChips,
      };
    });
  };

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
          onChipClick={handleChipClick}
        />
      ))}
      <div>
        Combined Selected Chips: {combinedSelectedChips.join(', ')}
      </div>
    </div>
  );
};

export default ParentComponent;

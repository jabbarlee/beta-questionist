
export type ChipProps = {
    chips: string[];
    selectedChips: string[];
    onChipClick: (label: string) => void;
}

export type AccordionSelectionProps = {
    title: string;
    metaText: string;
    chips: string[];
    accordionId: string;
    selectedChips: string[];
    onChipClick: ( chip: string) => void;
  }
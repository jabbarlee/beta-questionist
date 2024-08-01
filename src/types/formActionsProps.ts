
export type ChipProps = {
    chips: string[];
    selectedChips: string[];
    onChipClick: (label: string) => void;
}

export type AccordionProps = {
    title: string;
    metaText: string;
    chips: string[];
}

export type ChipProps = {
    chips: string[];
    selectedChips: string[];
    onChipClick: (label: string) => void;
}
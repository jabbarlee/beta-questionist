export const handleChipClick = ({
    accordionId,
    chip,
    setSelectedChipsState,
} : {
    accordionId: string;
    chip: string;
    setSelectedChipsState: (value: React.SetStateAction<{[key: string]: string[];}>) => void
}) => {
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
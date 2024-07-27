// types.ts
export type Option = {
  value: string;
  label: string;
}

export type SelectorProps = {
  options: Option[];
  title: string;
  onSelect: (value: string) => void;
}

export type OptionsProps = {
    option1: string,
    option2: string,
    option3?: string
  }
  
export type SelectorProps = {
    options: OptionsProps,
    title: string,
    onSelect: (value: string) => void // Callback function to pass selected value
}
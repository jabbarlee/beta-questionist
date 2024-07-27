import { useState } from 'react'
import { HandleSelectProps, SelectedValues } from '../types/formActionsProps'

export const handleSelection = ({
    event,
    setSelection,
    onSelect,
}: HandleSelectProps) => {
    const value = event.target.value as string
    setSelection(value)
    onSelect(value) 
}

export const useHandleSelect = () => {
  const [selectedValues, setSelectedValues] = useState<SelectedValues>({})

  const handleSelect = (key: string) => (value: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }))
  }

  return { selectedValues, handleSelect }
}

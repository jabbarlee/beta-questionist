import { SelectChangeEvent } from '@mui/material/Select'
import { Dispatch, SetStateAction } from 'react'

export type HandleSelectProps = {
    event: SelectChangeEvent
    setSelection: Dispatch<SetStateAction<string>>
    onSelect: (value: string) => void
}

export type SelectedValues = { [key: string]: string }
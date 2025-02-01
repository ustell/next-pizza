import React from 'react'
import { Checkbox } from '../ui'

export interface FilterCheckbox { //
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void; //
    checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckbox> = ({text, value, endAdornment, onCheckedChange, checked}) => {
    return (
      <div className='flex gap-3 items-center'>
        <Checkbox className='rounded-[8px] w-6 h-6' onCheckedChange={onCheckedChange} checked={checked} value={value} id={`checkbox-${String(value)}`} />
        <label className='leading-none cursor-pointer flex-1"' htmlFor={`checkbox-${String(value)}`}>{text}</label>
        {endAdornment}
      </div>
    )
}
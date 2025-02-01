import React from 'react'
import { Title } from './title'
import { FilterCheckbox } from './FilterCheckbox'
import { cn } from '@/lib/utils'

type Props = {
    className?: string
}

export const Fiilters: React.FC<Props> = ({className}) => {
  return (
    <div className={cn("my-10",className)}>
        <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

        <div className="flex flex-col gap-4">
            <FilterCheckbox text='Можно собирать' value='1'/>
            <FilterCheckbox text='Новинки' value='0'/>
        </div>
    </div>
  )
}
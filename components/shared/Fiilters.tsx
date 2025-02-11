
"use client"
import React from 'react'
import { Title } from './title'
import { FilterCheckbox } from './FilterCheckbox'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { RangeSlider } from '../ui/rangeSlider'
import FilterGroup from './FilterGroup'
import { useIngridients } from '@/hooks/useIngridients'

type Props = {
    className?: string
}

export const Fiilters: React.FC<Props> = ({className}) => {
  const {ingredients, loading} = useIngridients()

  const items = ingredients.map((item) => ({value: String(item.id), text: item.name}))

  return (
    <div className={cn("my-10",className)}>
        <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

        <div className="flex flex-col gap-4">
            <FilterCheckbox text='Можно собирать' value='1'/>
            <FilterCheckbox text='Новинки' value='0'/>
        </div>

        <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
          <p className='font-bold mb-3'>Цена от и до:</p>
          <div className='flex gap-3 mb-5'>
            <Input type='number' placeholder='0' min={0} max={100} defaultValue={0} />
            <Input type='number' placeholder='1000' min={100} max={1000} />
          </div>
          <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
        </div>
        <div className='mt-5 '>

            <FilterGroup 
              title='Ингредиенты'
              className='mb-5'
              limit={6}
              defaultItems={items.slice(0, 6)}
              items={items}
              loading={loading}
            />
        </div>
    </div>
  )
}
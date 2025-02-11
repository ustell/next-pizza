"use client"
 
import React from 'react'
import { FilterCheckbox } from './FilterCheckbox';
import { Input } from '../ui/input';
import { Skeleton } from '../ui';

type Item = FilterCheckbox

type Props = {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    loading: boolean,
    searchInputPlaceholder?: string;
    className?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
}

export default function FilterGroup(
    {
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = 'Поиск...',
        className,
        loading,
    
    }
    : Props) {
        const [showAll, setShowAll] = React.useState(false)
        const [searchValue, setSearchValue] = React.useState("")
        

        const onChangeSearchInput = (value: string) => {
            setSearchValue(value)
        }

        if (loading){ 
            return ( 
            <div className={className}>
                <p className="font-bold mb-3">{title}</p>
                {
                    ...Array(limit).fill(0).map((_, index) => (
                        <Skeleton key={index} className='h-6 mb-4 rounded-[8px]' />
                    ))
                }
            </div>
            )
        }

        const list = showAll ? items.filter((item)=> item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems.slice(0, limit)
    return (
        <div className={className}>
        <p className="font-bold mb-3">{title}</p>

            {showAll &&
                <div className="mb-5">
                    <Input onChange={(e) => onChangeSearchInput(e.target.value)}  placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
                </div>
            }
            
            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox 
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(ids) => console.log(ids)}
                    />
                ))}
                {items.length > limit && (
                    <div className={showAll ? "border-t border-t-neutral-50 bt-5": ""}>
                        <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'> 
                            {showAll ? "Скрыть" : "Показать все"}
                        </button>
                    </div>
                )}
            </div>
        </div>
  )
}
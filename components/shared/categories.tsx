import React from 'react'
import { cn } from '@/lib/utils';

interface Props {
    className?: string
}

const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты'];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({className})=> {
  return (
    <div className={cn("bg-gray-50 inline-flex gap-5 p-5 rounded-2xl", className)}>
            {cats.map((name, index) => (
                <a key={index} className={cn(
                    "flex items-center px-6 h-11 font-bold rounded-2xl", 
                    activeIndex === index && "bg-white shadow-md shadow-gray-200 text-primary")}>
                    <button>
                        {name}
                    </button>
                </a>
            ))}
    </div>

  )
}

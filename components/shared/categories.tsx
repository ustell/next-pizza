"use client"
import React from 'react'
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
    className?: string
}

const cats = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" }
];


export const Categories: React.FC<Props> = ({className})=> {
  const activeId = useCategoryStore((state) => state.activeId)
  return (
    <div className={cn("bg-gray-50 inline-flex gap-5 p-5 rounded-2xl", className)}>
            {cats.map(({name, id}, index) => (
                <a key={index} className={cn(
                    "flex items-center px-6 h-11 font-bold rounded-2xl", 
                    activeId === id && "bg-white shadow-md shadow-gray-200 text-primary")}
                    href={`/#${name}`}
                    >
                    <button>
                        {name}
                    </button>
                </a>
            ))}
    </div>

  )
}

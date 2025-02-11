"use client"

import React from 'react'
import { useIntersection } from 'react-use';
import { Title } from './title';
import ProductCard from './product-card';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
    title: string;
    items: any[];
    className?: string;
    categoryId: number;
    listClassName?: string
  }

export default function ProductsGroupList({ title, items, className,listClassName, categoryId }: Props) {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
  });
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  },[categoryId, intersection?.isIntersecting, title])
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
            {items.map((item, i)=>(
                <ProductCard key={i} id={item.id} name={item.name} price={item.items[0].price} imageUrl={item.imageUrl} />
            ))}
      </div>
      </div>
  )
}

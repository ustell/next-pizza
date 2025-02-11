/* eslint-disable @next/next/no-img-element */
"use client"
import { cn } from '@/lib/utils'
import { Api } from '@/services/api-client'
import { Product } from '@prisma/client'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useClickAway, useDebounce } from 'react-use'

type Props = {
  className?: string
}


export default function SearchInput({className}: Props) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = React.useState<Product[]>([]);

  const [focused, setFocused] = React.useState(false)
  const ref = useRef(null);
  useClickAway(ref, () => {
    setFocused(false)
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery],  
  );

  const onClickItem = () => {
    setFocused(false)
    setSearchQuery('')
    setProducts([])
  }

  return (
    <>
    {focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' />}
    <div ref={ref} className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
      <Search size={16} className='absolute left-4 top-3 text-gray-400' />
      <input 
        className='rounded-2xl outline-none w-full bg-gray-100 pl-11'
        type='text'
        placeholder='Поиск...'
        onFocus={() => setFocused(true)}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      { products.length > 0 &&
        <div className={cn("absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
          focused && "visible opacity-100 top-12"
        )}>
          {
            products.map((product)=>(
              <Link  href={`/product/${product.id}`} key={product.id} className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                onClick={onClickItem}>
                <img className="rounded-sm h-8 w-8" src={product.imageUrl} alt={product.name} />
                <span>{product.name}</span>
              </Link>
            ))
          }
        </div>
      }

    </div>
    </>
)
}
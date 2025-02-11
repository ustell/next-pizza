import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { Title } from './title';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

interface Props {
    id: number
    name: string;
    price: number;
    count?: number;
    imageUrl: string;
    className?: string;
  }

function ProductCard({id, name,price,count,imageUrl,className}: Props) {
  return (
    <div className={cn(className)}>
        <Link href={`product/${id}`}>
            <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
            </div>
            <Title text={name} size='sm' className='mb-1 mt-3 font-bold'/>
            <p className="text-sm text-gray-400">
                Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
            </p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-[20px]">
                от <b>{price} ₽</b>
                </span>

                <Button variant="secondary">
                    <Plus size={20} className=" mr-1" />
                    Добавить
                </Button>
            </div>
        </Link> 
    </div>
  )
}

export default ProductCard
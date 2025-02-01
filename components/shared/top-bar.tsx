import { cn } from '@/lib/utils'
import React from 'react'
import { Categories } from './categories'
import { SortPopup } from './sort-popup'
import { Container } from './container'

type Props = {
    className?: string
}

function TopBar({className}: Props) {
  return (
    <div className={cn("sticky top-0 bg-gray-50 shadow-lg shadow-black/5 z-10 " , className)}>
        <Container className='flex items-center justify-between'>
            <Categories />
            <SortPopup />
        </Container>
    </div>
  )
}

export default TopBar
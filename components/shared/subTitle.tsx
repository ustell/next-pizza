import clsx from 'clsx'
import React from 'react'

type fontSize = "sm" | "md" | "lg"

interface Props {
    size?: fontSize,
    className?: string,
    text: string
}

export const Subtitle: React.FC<Props>= ({className, size="sm", text}) => {
    const sizeForSubtitle = {
        sm: 'h4',
        md: 'h3',
        lg: 'h2',
    } as const
    
    const styleForSubtitle = {
        sm: 'text-[22px]',
        md: 'text-[26px]',
        lg: 'text-[32px]',
    } as const

    return React.createElement (
    sizeForSubtitle[size],{className: clsx(styleForSubtitle[size], className)}, text
  )
}

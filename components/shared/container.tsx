import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Container = ({ className, children }:Props) => {
  return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>;
};
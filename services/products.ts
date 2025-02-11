import { axiosInstance } from './instants';
import { ApiRoute } from './constants';
import {Product } from '@prisma/client';


export const search = async (query: string): Promise<Product[]> => {
  return (await axiosInstance.get<Product[]>(ApiRoute.SEARCH_PRODUCTS, { params: { query } }))
    .data;
};
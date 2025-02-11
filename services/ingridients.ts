import { axiosInstance } from './instants';
import { ApiRoute } from './constants';
import { Ingredient } from '@prisma/client';

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoute.LIST_INGREDIENTS)).data;
};
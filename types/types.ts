import { StaticImageData } from 'next/image';

export type MealItemTypes = {
  id: string;
  title: string;
  slug: string;
  image: StaticImageData;
  summary: string;
  creator: string;
  instructions: string;
};

import MealsList from '@/components/meals/meals-list';
import { getMeals } from '@/lib/meals';
import { MealItemTypes } from '@/types/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MealsLoading from './loading-old';

async function MealsOther() {
  const meals = (await getMeals()) as MealItemTypes[];
  return <MealsList meals={meals} />;
}

export default async function Meals() {
  return (
    <>
      <header>
        <h1>Meals</h1>
        <p>Choose your favorie meal to cook it yourself.</p>
        <p>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<MealsLoading />}>
          <MealsOther />
        </Suspense>
      </main>
    </>
  );
}

import { getMeal } from '@/lib/meals';
import { MealItemTypes } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import NotFound from '../not-found';

export default function Meal({ params }: { params: { slug: string } }) {
  const meal = getMeal(params.slug) as MealItemTypes;

  if (!meal) {
    <NotFound />;
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br>');

  return (
    <>
      <header>
        <div>{/* <Image src={meal.image} alt={meal.title} fill /> */}</div>
        <div>
          <h1>{meal.title}</h1>
          <p>
            by <a href={`mailto:${meal.creator}`}>{meal.creator}</a>
          </p>
          <p>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

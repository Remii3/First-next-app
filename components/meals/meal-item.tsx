import { MealItemTypes } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: MealItemTypes) {
  return (
    <article>
      <header>
        {/* <Image src={image} alt={title} fill /> */}
        <div>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <section>
        <p>{summary}</p>
        <div>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </section>
    </article>
  );
}

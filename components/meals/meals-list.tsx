import { MealItemTypes } from '@/types/types';
import MealItem from './meal-item';

export default function MealsList({ meals }: { meals: MealItemTypes[] }) {
  return (
    <ul className="grid gap-6 grid-cols-3 mt-4">
      {meals.map(meal => (
        <li key={meal.id} className="flex-col flex ">
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

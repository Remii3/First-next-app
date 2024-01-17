import { MealItemTypes } from "@/types/types";
import MealItem from "./meal-item";

export default function MealsList({ meals }: { meals: MealItemTypes[] }) {
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

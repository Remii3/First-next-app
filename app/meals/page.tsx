import MealsList from "@/components/meals/meals-list";
import Link from "next/link";

export default function Meals() {
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
        <MealsList meals={[]} />
      </main>
    </>
  );
}

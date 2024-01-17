import Link from "next/link";

export default function Meal({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h2>{params.slug}</h2>
      <Link href="/meals">Go back</Link>
    </div>
  );
}

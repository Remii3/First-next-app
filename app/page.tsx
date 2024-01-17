import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>Homepage</h1>
      <Link href="/meals">Meals</Link>
      <Link href="/community">Community</Link>
    </main>
  );
}

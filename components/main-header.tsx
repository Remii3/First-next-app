import Link from "next/link";
import Navlink from "./navlink";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">Home</Link>
      <nav>
        <ul className="flex">
          <li>
            <Navlink href="/meals">Meals</Navlink>
          </li>
          <li>
            <Navlink href="/community">Community</Navlink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

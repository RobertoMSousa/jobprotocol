import Link from "next/link";

const LinkMenu = () => (
  <nav>
    <Link href="/">
      <p>Home</p>
    </Link>
    <Link href="/about">
      <p>About</p>
    </Link>
  </nav>
);

export default LinkMenu;

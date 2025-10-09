import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/store">Store</Link>
    </nav>
  );
};

export default Header;

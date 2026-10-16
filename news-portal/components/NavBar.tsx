import Link from "next/link";
 
export default function NavBar() {
  return (
    <nav className="flex gap-6 p-4">
      <Link href="/">Home</Link>
      <Link href="/news">News</Link>
      <Link href="/about">About</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

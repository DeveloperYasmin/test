import Link from "next/link";

export default function Home() {
  return (
     <nav>
      <ul>
        <li>
        <Link href="/">Home</Link>
        </li>
        <li>
        <Link href="/about">About</Link>
        </li>
        <li>
        <Link href="/contact">Contact</Link>
        </li>
        <li>
        <Link href="/">Blog</Link>
        </li>
        <li>
        <Link href="/">Admin</Link>
        </li>
        <li>
        <Link href="/">Login</Link>
        </li>
       

      </ul>
     </nav>
    
  );
}

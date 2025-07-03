import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className="h-10 justify-end flex flex-row space-x-6 bg-red-500"> {/* space-x-6 adds horizontal space between items */}
        <li className="bg-red-600"><Link href="/">Home</Link></li>
        <li className="align-middle"><Link href="/about">About</Link></li>
        <li><Link href="/join">Join</Link></li>
        <li><Link href="/resources">Resources</Link></li>
        <li><Link href="/campaigns">Campaigns</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

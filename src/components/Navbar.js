'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaUserShield } from 'react-icons/fa'; // Admin login icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-800 text-white px-5 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or site name */}
        <div className="text-xl font-bold">NolaRank</div>

        {/* Hamburger icon (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group focus:outline-none"
          >
            <svg
              className="w-6 h-6 transition-colors duration-200"
              viewBox="0 0 24 24"
              fill="none"
            >
              {isOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="group-hover:stroke-yellow-300"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="group-hover:stroke-yellow-300"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav links (desktop) */}
        <ul className="hidden md:flex flex-row space-x-6 items-center ml-auto">
          <li><Link href="/" className="hover:underline hover:text-yellow-300">Home</Link></li>
          <li><Link href="/about" className="hover:underline hover:text-yellow-300">About</Link></li>
          <li><Link href="/join" className="hover:underline hover:text-yellow-300">Join</Link></li>
          <li><Link href="/donate" className="hover:underline hover:text-yellow-300">Donate</Link></li>
          <li><Link href="/resources" className="hover:underline hover:text-yellow-300">Resources</Link></li>
          <li><Link href="/campaigns" className="hover:underline hover:text-yellow-300">Campaigns</Link></li>
          <li><Link href="/contact" className="hover:underline hover:text-yellow-300">Contact</Link></li>
          <li>
            <Link href="/admin" title="Admin Login">
              <FaUserShield className="w-5 h-5 hover:text-yellow-300 cursor-pointer" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Nav links (mobile) */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2">
          <li><Link href="/" className="block px-2 py-1 hover:underline hover:text-yellow-300">Home</Link></li>
          <li><Link href="/about" className="block px-2 py-1 hover:underline hover:text-yellow-300">About</Link></li>
          <li><Link href="/join" className="block px-2 py-1 hover:underline hover:text-yellow-300">Join</Link></li>
          <li><Link href="/donate" className="block px-2 py-1 hover:underline hover:text-yellow-300">Donate</Link></li>
          <li><Link href="/resources" className="block px-2 py-1 hover:underline hover:text-yellow-300">Resources</Link></li>
          <li><Link href="/campaigns" className="block px-2 py-1 hover:underline hover:text-yellow-300">Campaigns</Link></li>
          <li><Link href="/contact" className="block px-2 py-1 hover:underline hover:text-yellow-300">Contact</Link></li>
          <li>
            <Link href="/admin" title="Admin Login">
              <FaUserShield className="w-5 h-5 hover:text-yellow-300 cursor-pointer" />
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}



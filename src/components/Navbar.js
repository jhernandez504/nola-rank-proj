'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserShield } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/join', label: 'Join' },
    { href: '/donate', label: 'Donate' },
    { href: '/resources', label: 'Resources' },
    { href: '/campaigns', label: 'Campaigns' },
    { href: '/contact', label: 'Contact' },
    { href: '/admin', label: 'Admin', icon: <FaUserShield className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-red-800 text-white px-1 py-2">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="hover:underline hover:text-yellow-300">
            <img
              src="/images/workers/logo.jpeg"
              alt="Logo"
              className="rounded-lg shadow-lg"
              style={{ width: '60px', height: '60px' }}
            />
          </Link>
        </div>
        <p className="text-white pl-4 text-xl">New Orleans Rank & File Project</p>

        {/* Hamburger (mobile) */}
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

        {/* Desktop links */}
        <ul className="hidden md:flex flex-row space-x-6 items-center ml-auto text-lg">
          {links.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:underline hover:text-yellow-300 ${
                  pathname === href ? 'text-yellow-300 font-bold' : ''
                }`}
              >
                {icon ? icon : label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile links */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2">
          {links.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block px-2 py-1 hover:underline hover:text-yellow-300 ${
                  pathname === href ? 'text-yellow-300 font-bold' : ''
                }`}
              >
                {icon ? icon : label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

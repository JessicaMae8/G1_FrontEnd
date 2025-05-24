'use client';

import Link from 'next/link';

export default function SidebarUser({ user }) {
  return (
    <aside className="bg-gray-800 text-yellow-300 w-64 min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Welcome, {user.name}</h2>
      </div>
      <nav className="flex flex-col space-y-4">
        <Link href="/user/dashboard" className="hover:text-yellow-500">
          Dashboard
        </Link>
        <Link href="/user/dashboard/borrowed-books" className="hover:text-yellow-500">
          Borrowed Books
        </Link>
        <Link href="/user/dashboard/books-availability" className="hover:text-yellow-500">
          Books Availability
        </Link>
        <Link href="/user/dashboard/due-dates" className="hover:text-yellow-500">
          Due Dates
        </Link>
        <Link href="/user/page" className="hover:text-yellow-500">
          Profile
        </Link>
        <Link href="/" className="hover:text-yellow-500">
          Logout
        </Link>
      </nav>
    </aside>
  );
}

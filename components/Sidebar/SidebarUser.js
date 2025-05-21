'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function SidebarUser({ user }) {
  return (
    <div className="flex h-screen bg-gray-900 text-yellow-300 flex-col w-64 p-6">
      <div className="flex items-center mb-6">
        <Image
          src="/img/user-profile.jpg"
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div className="font-bold text-lg">{user?.name || 'User Name'}</div>
      </div>
      <nav className="flex flex-col space-y-4 flex-grow">
        <Link href="/user/dashboard/borrowed-books" className="flex items-center hover:text-yellow-500">
          <i className="bx bx-book-reader mr-3"></i>
          Borrowed Books
        </Link>
        <Link href="/user/dashboard/due-dates" className="flex items-center hover:text-yellow-500">
          <i className="bx bx-time-five mr-3"></i>
          Due Dates
        </Link>
        <Link href="/user/dashboard/books-availability" className="flex items-center hover:text-yellow-500">
          <i className="bx bx-book mr-3"></i>
          Books Availability
        </Link>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-auto px-4 py-2 bg-red-700 rounded hover:bg-red-800 text-white font-semibold"
        >
          Log Out
        </button>
      </nav>
    </div>
  );
}

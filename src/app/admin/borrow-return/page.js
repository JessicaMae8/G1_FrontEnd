'use client';

import { useState } from 'react';
import Image from 'next/image';

const initialData = [
  {
    id: 1,
    book: 'Outliers',
    img: '/img/book1.jpg',
    user: 'Micah Mae',
    borrowedDate: '2025-05-01',
    dueDate: '2025-05-15',
    status: 'Borrowed',
  },
  {
    id: 2,
    book: 'mindset',
    img: '/img/book4.jpg',
    user: 'Lloyd Gimena',
    borrowedDate: '2025-05-10',
    dueDate: '2025-05-24',
    status: 'Returned',
  },
  {
    id: 3,
    book: 'Mastery',
    img: '/img/book7.jpg',
    user: 'Micah Mae',
    borrowedDate: '2025-05-12',
    dueDate: '2025-05-26',
    status: 'Borrowed',
  },
  // Add more records for demonstration
  {
    id: 4,
    book: 'Atomic Habits',
    img: '/img/book8.jpg',
    user: 'Patrick Palacio',
    borrowedDate: '2025-05-13',
    dueDate: '2025-05-27',
    status: 'Borrowed',
  },
  {
    id: 5,
    book: 'Deep Work',
    img: '/img/book9.jpg',
    user: 'Ralph Gasid',
    borrowedDate: '2025-05-14',
    dueDate: '2025-05-28',
    status: 'Returned',
  },
  {
    id: 6,
    book: 'Grit',
    img: '/img/book10.jpg',
    user: 'Joshua Catipon',
    borrowedDate: '2025-05-15',
    dueDate: '2025-05-29',
    status: 'Borrowed',
  },
];

const ITEMS_PER_PAGE = 3;

export default function Page() {
  const [records, setRecords] = useState(initialData);
  const [page, setPage] = useState(1);

  const handleStatusToggle = (id) => {
    setRecords(records =>
      records.map(record =>
        record.id === id
          ? { ...record, status: record.status === 'Borrowed' ? 'Returned' : 'Borrowed' }
          : record
      )
    );
  };

  // Pagination logic
  const totalPages = Math.ceil(records.length / ITEMS_PER_PAGE);
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const paginatedRecords = records.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handlePrev = () => setPage(p => Math.max(1, p - 1));
  const handleNext = () => setPage(p => Math.min(totalPages, p + 1));

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Borrow & Return Management</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {paginatedRecords.map(record => (
          <div key={record.id} className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Image
              src={record.img}
              alt={record.book}
              width={120}
              height={160}
              className="rounded mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{record.book}</h2>
            <p className="text-gray-400 mb-1">User: <span className="text-white">{record.user}</span></p>
            <p className="text-gray-400 mb-1">Borrowed: <span className="text-white">{record.borrowedDate}</span></p>
            <p className="text-gray-400 mb-1">Due: <span className="text-white">{record.dueDate}</span></p>
            <p className={`font-semibold mb-4 ${
              record.status === 'Returned' ? 'text-green-400' : 'text-yellow-400'
            }`}>
              {record.status}
            </p>
            <button
              onClick={() => handleStatusToggle(record.id)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                record.status === 'Borrowed'
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
              }`}
            >
              Mark as {record.status === 'Borrowed' ? 'Returned' : 'Borrowed'}
            </button>
          </div>
        ))}
        {paginatedRecords.length === 0 && (
          <div className="col-span-full text-center text-gray-400 py-6">
            No borrow records found.
          </div>
        )}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
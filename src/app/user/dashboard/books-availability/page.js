'use client';

import React from 'react';
import { useBorrow } from 'src/context/BorrowContext';

export default function BooksAvailabilityPage() {
  const { books, borrowBook } = useBorrow();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Books Availability</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-gray-800 p-4 rounded shadow text-white">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Status: {book.status}</p>
            <button
              disabled={book.status !== 'Available'}
              onClick={() => borrowBook(book.id)}
              className={`mt-2 px-4 py-2 rounded ${
                book.status === 'Available' ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 cursor-not-allowed'
              }`}
            >
              Borrow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

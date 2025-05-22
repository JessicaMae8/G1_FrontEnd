'use client';

import React from 'react';
import { useBorrow } from 'src/context/BorrowContext';

export default function BorrowedBooksPage() {
  const { transactions } = useBorrow();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Borrowed Books</h1>
      {transactions.length === 0 ? (
        <p>You have no borrowed books.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((tx) => (
            <li key={tx.id} className="bg-gray-800 p-4 rounded shadow text-white flex justify-between items-center">
              <div>
                <div className="font-semibold">{tx.book.title}</div>
                <div>Borrowed At: {new Date(tx.borrowed_at).toLocaleDateString()}</div>
                <div>Due At: {new Date(tx.due_at).toLocaleDateString()}</div>
                <div>Status: {tx.returned_at ? 'Returned' : 'Borrowed'}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

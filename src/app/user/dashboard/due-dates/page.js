'use client';

import React from 'react';
import { useBorrow } from 'src/context/BorrowContext';

export default function DueDatesPage() {
  const { transactions } = useBorrow();

  const today = new Date();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Due Dates</h1>
      {transactions.length === 0 ? (
        <p>You have no borrowed books.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((tx) => {
            const dueDate = new Date(tx.due_at);
            const isOverdue = !tx.returned_at && dueDate < today;
            return (
              <li
                key={tx.id}
                className={`bg-gray-800 p-4 rounded shadow text-white flex justify-between items-center ${
                  isOverdue ? 'border-2 border-red-600' : ''
                }`}
              >
                <div>
                  <div className="font-semibold">{tx.book.title}</div>
                  <div>Due At: {dueDate.toLocaleDateString()}</div>
                  <div>Status: {tx.returned_at ? 'Returned' : isOverdue ? 'Overdue' : 'On Time'}</div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

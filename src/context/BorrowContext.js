'use client';

import React, { createContext, useState, useContext } from 'react';

const BorrowContext = createContext();

export function BorrowProvider({ children }) {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      book: { id: 1, title: 'The Great Gatsby' },
      borrowed_at: '2023-06-01T00:00:00Z',
      due_at: '2023-06-15T00:00:00Z',
      returned_at: null,
    },
  ]);

  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'Borrowed' },
    { id: 2, title: '1984', author: 'George Orwell', status: 'Available' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'Available' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', status: 'Available' },
    { id: 5, title: 'Moby-Dick', author: 'Herman Melville', status: 'Available' },
    { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', status: 'Available' },
    { id: 7, title: 'The Odyssey', author: 'Homer', status: 'Available' },
    { id: 8, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', status: 'Available' },
    { id: 9, title: 'The Catcher in the Rye', author: 'J.D. Salinger', status: 'Available' },
    { id: 10, title: 'The Hobbit', author: 'J.R.R. Tolkien', status: 'Available' },
  ]);

  const borrowBook = (bookId) => {
    const book = books.find((b) => b.id === bookId);
    if (!book || book.status !== 'Available') return;

    const newTransaction = {
      id: transactions.length + 1,
      book: { id: book.id, title: book.title },
      borrowed_at: new Date().toISOString(),
      due_at: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      returned_at: null,
    };

    setTransactions([...transactions, newTransaction]);
    setBooks(
      books.map((b) =>
        b.id === bookId ? { ...b, status: 'Borrowed' } : b
      )
    );
  };

  return (
    <BorrowContext.Provider value={{ transactions, books, borrowBook }}>
      {children}
    </BorrowContext.Provider>
  );
}

export function useBorrow() {
  return useContext(BorrowContext);
}

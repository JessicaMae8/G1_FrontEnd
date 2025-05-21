'use client';

import React, { useState } from 'react';
import EditModal from 'components/modals/BooksModal/EditModal';

const initialBooks = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', available_copies: 4, description: 'A novel about racial injustice in the Deep South.' },
  { id: 2, title: '1984', author: 'George Orwell', available_copies: 2, description: 'A dystopian novel about totalitarianism and surveillance.' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available_copies: 3, description: 'A story of the Jazz Age and the American Dream.' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', available_copies: 5, description: 'A classic romance novel about manners and marriage.' },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', available_copies: 1, description: 'A story about teenage rebellion and alienation.' },
  { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', available_copies: 6, description: 'A fantasy adventure preceding the Lord of the Rings.' },
  { id: 7, title: 'Fahrenheit 451', author: 'Ray Bradbury', available_copies: 2, description: 'A dystopian novel about censorship and book burning.' },
];


export default function UserDashboard() {
  const [selectedTab, setSelectedTab] = useState('borrowedBooks');
  const [books, setBooks] = useState(initialBooks);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleLogout = () => {
    window.location.href = '/';
  };

  const handleBorrow = (bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId && book.available_copies > 0
          ? { ...book, available_copies: book.available_copies - 1 }
          : book
      )
    );

    const borrowedBook = books.find((book) => book.id === bookId);
    if (borrowedBook && borrowedBook.available_copies > 0) {
      setBorrowedBooks((prev) => [...prev, { ...borrowedBook }]);
    }
  };

  const openEditModal = (book) => {
    setEditBook(book);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditBook(null);
    setIsEditModalOpen(false);
  };

  const saveBookChanges = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? { ...book, ...updatedBook } : book))
    );
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'borrowedBooks':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Your Borrowed Books</h2>
            {borrowedBooks.length === 0 ? (
              <p className="text-yellow-400">You have no borrowed books.</p>
            ) : (
              <ul className="space-y-4">
                {borrowedBooks.map((book, index) => (
                  <li key={index} className="border rounded p-4 bg-gray-800 shadow flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-yellow-200">{book.title}</h3>
                      <p className="text-yellow-400">Author: {book.author}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      case 'dueDates':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Books Due Soon</h2>
            <p className="text-yellow-400">No books are due soon.</p>
          </div>
        );
      case 'booksAvailability':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Books Availability</h2>
            <ul className="space-y-4">
              {books.map((book) => (
                <li key={book.id} className="border rounded p-4 bg-gray-800 shadow flex flex-col space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-yellow-200">{book.title}</h3>
                    <button
                      onClick={() => openEditModal(book)}
                      className="px-2 py-1 bg-blue-600 rounded hover:bg-blue-700 text-white"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-yellow-400">Author: {book.author}</p>
                  <p className="text-yellow-400">Available Copies: {book.available_copies}</p>
                  <p className="text-yellow-400 italic">{book.description}</p>
                  <button
                    onClick={() => handleBorrow(book.id)}
                    disabled={book.available_copies === 0}
                    className={`px-4 py-2 rounded ${
                      book.available_copies === 0
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700'
                    } text-white`}
                  >
                    {book.available_copies === 0 ? 'Not Available' : 'Borrow'}
                  </button>
                </li>
              ))}
            </ul>
            {isEditModalOpen && (
              <EditModal
                isOpen={isEditModalOpen}
                book={editBook}
                onClose={closeEditModal}
                onSave={(updatedBook) => {
                  saveBookChanges(updatedBook);
                  closeEditModal();
                }}
              />
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-yellow-300">
      <nav className="w-64 bg-gray-800 p-6 flex flex-col">
        <h1 className="text-3xl font-bold mb-8 text-yellow-400">User Dashboard</h1>
        <button
          className={`mb-4 text-left px-4 py-2 rounded hover:bg-yellow-600 ${
            selectedTab === 'borrowedBooks' ? 'bg-yellow-600 text-gray-900 font-semibold' : ''
          }`}
          onClick={() => setSelectedTab('borrowedBooks')}
        >
          Borrowed Books
        </button>
        <button
          className={`mb-4 text-left px-4 py-2 rounded hover:bg-yellow-600 ${
            selectedTab === 'dueDates' ? 'bg-yellow-600 text-gray-900 font-semibold' : ''
          }`}
          onClick={() => setSelectedTab('dueDates')}
        >
          Due Dates
        </button>
        <button
          className={`mb-4 text-left px-4 py-2 rounded hover:bg-yellow-600 ${
            selectedTab === 'booksAvailability' ? 'bg-yellow-600 text-gray-900 font-semibold' : ''
          }`}
          onClick={() => setSelectedTab('booksAvailability')}
        >
          Books Availability
        </button>
        <button
          className="mt-auto px-4 py-2 bg-red-700 rounded hover:bg-red-800 text-white font-semibold"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </nav>
      <main className="flex-1 p-8 overflow-auto">{renderContent()}</main>
    </div>
  );
}

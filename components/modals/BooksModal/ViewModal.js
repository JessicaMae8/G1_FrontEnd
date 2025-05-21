'use client';

import React from 'react';

const ViewModal = ({ isOpen, book, onClose }) => {
  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-96 text-white">
        <h2 className="text-xl font-semibold mb-4">Book Details</h2>
        <div className="space-y-2">
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Published Year:</strong> {book.published_year}</p>
          <p><strong>Copies Available:</strong> {book.copies_available}</p>
          {book.image && book.image.trim() !== '' && (
            <img
              src={book.image}
              alt={book.title}
              className="mt-4 w-full h-auto rounded"
            />
          )}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;

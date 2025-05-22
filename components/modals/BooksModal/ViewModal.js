'use client';

import React from 'react';

const ViewModal = ({ isOpen, book, onClose }) => {
  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md text-white">
        <h2 className="text-xl font-semibold mb-4">View Book Details</h2>
        <div className="space-y-3">
          <div>
            <strong>Title:</strong> {book.title}
          </div>
          <div>
            <strong>Author:</strong> {book.author}
          </div>
          <div>
            <strong>Category:</strong> {book.category}
          </div>
          <div>
            <strong>Published:</strong> {book.published}
          </div>
          <div>
            <strong>Status:</strong> {book.status}
          </div>
          {book.image && book.image.trim() !== '' && (
            <div className="mt-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-auto rounded"
              />
            </div>
          )}
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;

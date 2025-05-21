'use client';

import React, { useState } from 'react';

const AddModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    published_year: '',
    copies_available: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
    setFormData({
      title: '',
      author: '',
      isbn: '',
      published_year: '',
      copies_available: '',
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-96 text-white">
        <h2 className="text-xl font-semibold mb-4">Add New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1">ISBN</label>
            <input
              type="text"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1">Published Year</label>
            <input
              type="number"
              name="published_year"
              value={formData.published_year}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1">Copies Available</label>
            <input
              type="number"
              name="copies_available"
              value={formData.copies_available}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;

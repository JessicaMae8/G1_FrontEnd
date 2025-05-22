'use client';

import React, { useState, useEffect } from 'react';

const EditModal = ({ isOpen, book, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    published: '',
    status: '',
    image: '',
  });

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title || '',
        author: book.author || '',
        category: book.category || '',
        published: book.published || '',
        status: book.status || '',
        image: book.image || '',
      });
    }
  }, [book]);

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
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md text-white">
        <h2 className="text-xl font-semibold mb-4">Edit Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Published</label>
            <input
              type="text"
              name="published"
              value={formData.published}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white"
            >
              <option value="Available">Available</option>
              <option value="Issued">Issued</option>
              <option value="Reserved">Reserved</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;

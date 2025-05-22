'use client';

import React from 'react';

export default function ViewUserModal({ user, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">User Details</h2>
        {user ? (
          <div className="text-gray-700 space-y-2">
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role || 'N/A'}</p>
            <p><strong>Joined:</strong> {user.joined || 'N/A'}</p>
            <p>
              <strong>Status:</strong>{' '}
              <span className={user.status === 'Active' ? 'text-green-600' : 'text-red-600'}>
                {user.status}
              </span>
            </p>
          </div>
        ) : (
          <p className="text-red-600">No user data available.</p>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function Page() {
  const [siteTitle, setSiteTitle] = useState('My Library');
  const [adminEmail, setAdminEmail] = useState('admin@example.com');
  const [enableNotifications, setEnableNotifications] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the settings to console
    console.log({ siteTitle, adminEmail, enableNotifications });
    alert('Settings saved (not really, this is a demo)');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg">
        <div>
          <label htmlFor="siteTitle" className="block text-gray-300 mb-2 font-semibold">
            Site Title
          </label>
          <input
            id="siteTitle"
            type="text"
            value={siteTitle}
            onChange={(e) => setSiteTitle(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
        <div>
          <label htmlFor="adminEmail" className="block text-gray-300 mb-2 font-semibold">
            Admin Email
          </label>
          <input
            id="adminEmail"
            type="email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
        <div className="flex items-center space-x-3">
          <input
            id="enableNotifications"
            type="checkbox"
            checked={enableNotifications}
            onChange={(e) => setEnableNotifications(e.target.checked)}
            className="h-5 w-5 text-red-600 bg-gray-800 rounded focus:ring-red-500"
          />
          <label htmlFor="enableNotifications" className="text-gray-300 font-semibold">
            Enable Notifications
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}

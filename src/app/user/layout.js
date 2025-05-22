'use client';

import React from 'react';
import SidebarUser from 'components/Sidebar/SidebarUser';

export default function UserLayout({ children }) {
  // Assuming user info is fetched or passed down; for now, dummy user
  const user = { name: 'User' };

  return (
    <div className="flex min-h-screen bg-gray-900 text-yellow-300">
      <SidebarUser user={user} />
      <main className="flex-grow p-6 text-white">{children}</main>
    </div>
  );
}

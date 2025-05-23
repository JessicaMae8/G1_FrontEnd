'use client';

import React from 'react';
import SidebarUser from 'components/Sidebar/SidebarUser';
import AuthModal from '../../components/Auth/AuthModal';
import { AuthProvider, useAuth } from '../../context/AuthContext';

function UserLayoutContent({ children }) {
  const { isLoggedIn, login, logout } = useAuth();

  const handleLoginSuccess = () => {
    login();
  };

  const handleCloseAuthModal = () => {
    // Optionally handle modal close without login
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-yellow-300">
      {isLoggedIn && <SidebarUser user={{ name: 'User' }} />}
      <main className="flex-grow p-6 text-white">{isLoggedIn ? children : null}</main>
      {!isLoggedIn && (
        <AuthModal onClose={handleCloseAuthModal} onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default function UserLayout({ children }) {
  return (
    <AuthProvider>
      <UserLayoutContent>{children}</UserLayoutContent>
    </AuthProvider>
  );
}

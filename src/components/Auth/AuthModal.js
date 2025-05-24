'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '../../context/AuthContext';

export default function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      if (email === '' || password === '') {
        setError('Please enter email and password.');
        return;
      }
      login(); // handles token + redirect
      onClose(); // closes the modal
    } else {
      if (username === '' || email === '' || password === '') {
        setError('Please fill all fields to register.');
        return;
      }
      setUsername('');
      setEmail('');
      setPassword('');
      setIsLogin(true);
      setError('Registration successful. Please login.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div
        className={`w-full max-w-sm bg-gray-900 text-white rounded-xl p-6 transition-all duration-300 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="text-xl text-gray-300 hover:text-white">
            &times;
          </button>
        </div>

        <div className="text-center mb-6">
          <Image src="/img/logo.png" alt="Logo" width={80} height={80} className="mx-auto rounded-full" />
          <h2 className="text-2xl font-bold mt-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-800 p-2 rounded"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-800 p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-800 p-2 rounded"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 py-2 rounded font-bold"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isLogin ? 'No account?' : 'Have an account?'}{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="text-yellow-400 hover:underline">
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

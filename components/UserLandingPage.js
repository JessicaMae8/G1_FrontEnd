'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function UserDashboardHome() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token')

      if (!token) {
        router.push('/') // Not logged in, redirect to home or login
        return
      }

      try {
        const res = await fetch('http://localhost:8000/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        })

        if (!res.ok) {
          router.push('/') // Token invalid or expired
          return
        }

        const data = await res.json()
        setUser(data)
        setLoading(false)
      } catch (err) {
        console.error('User fetch failed:', err)
        router.push('/')
      }
    }

    fetchUser()
  }, [router])

  if (loading) return <div className="p-8 text-center">Loading your account...</div>

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-2xl mx-auto bg-gray-900 rounded-3xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name || user.email} 👋</h1>
        <p className="mb-6 text-gray-400">This is your account dashboard.</p>

        <div className="space-y-4">
          <div className="bg-gray-800 rounded-xl p-4">
            <p className="text-sm text-gray-400">Name</p>
            <p className="text-lg">{user.name || 'N/A'}</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-lg">{user.email}</p>
          </div>

          {/* Add more user info fields here if needed */}
        </div>
      </div>
    </div>
  )
}

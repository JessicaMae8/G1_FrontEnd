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
        router.push('/')
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
          router.push('/')
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

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/')
  }

  if (loading) return <div className="p-8 text-center">Loading your account...</div>

  const phone = user.phone || '123-456-7890'
  const address = user.address || '123 Main St, Anytown, USA'
  const membershipStatus = user.membershipStatus || 'Gold Member'

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl shadow-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome, {user.name || user.email} 👋</h1>
        </div>
        <p className="mb-8 text-gray-400">This is your account dashboard.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center md:justify-start">
            <div className="w-40 h-40 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 text-6xl font-bold select-none">
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-4">
              <p className="text-sm text-gray-400">Name</p>
              <p className="text-lg">{user.name || 'N/A'}</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-4">
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-lg">{user.email}</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-4">
              <p className="text-sm text-gray-400">Phone Number</p>
              <p className="text-lg">{phone}</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-4">
              <p className="text-sm text-gray-400">Address</p>
              <p className="text-lg">{address}</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-4 sm:col-span-2">
              <p className="text-sm text-gray-400">Membership Status</p>
              <p className="text-lg">{membershipStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

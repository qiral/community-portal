'use client'

import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import { getAdminClubs } from '@/lib/club/clubuser'

export default function Home() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const clubs = await getAdminClubs()
        setIsAdmin(clubs.data && clubs.data.length > 0)
      } catch (error) {
        console.error('Failed to fetch admin clubs', error)
        setIsAdmin(false)
      }
    }

    checkAdminStatus()
  }, [])

  if (isAdmin === null) {
    return <div>Loading...</div>
  }

  if (isAdmin) {
    redirect('/admin/dashboard')
  }

  return isAdmin === false ? <div>No admin accounts found</div> : null
}

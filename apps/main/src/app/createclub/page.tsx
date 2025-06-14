import { createClient } from '@community-portal/lib/supabase/client'
import { redirect } from 'next/navigation'
import ClubForm from '@/components/createclub/createclub-form'

export const metadata = {
  title: 'Kulüp Oluştur',
  description: 'Kulüp oluştur ve yönet',
}

export default async function CreateClubPage() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <ClubForm />
      </div>
    </div>
  )
}
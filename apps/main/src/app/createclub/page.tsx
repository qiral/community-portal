import ClubForm from '@/components/createclub/createclub-form'

export const metadata = {
  title: 'Kulüp Oluştur',
  description: 'Kulüp oluştur ve yönet',
}

export default function CreateClubPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <ClubForm />
      </div>
    </div>
  )
}

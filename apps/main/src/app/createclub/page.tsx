import ClubForm from '@/components/createclub/createclub-form'

export const metadata = {
  title: 'Kulüp Oluştur',
  description: 'Kulüp oluştur ve yönet',
}

export default function CreateClubPage() {
  return (
    <div className="container max-w-3xl py-10">
      <ClubForm />
    </div>
  )
}

'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Plus } from 'lucide-react'

export default function Page() {
  const handleCreateClub = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_MAIN_URL}/createclub`
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <Users className="h-8 w-8 text-gray-400" />
          </div>
          <CardTitle className="text-xl text-gray-900">Yönetici Hesabı Bulunamadı</CardTitle>
          <CardDescription className="text-gray-600">
            Henüz hiç yönetici hesabı oluşturulmamış. Başlamak için bir kulüp oluşturun.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleCreateClub} className="w-full" size="lg">
            <Plus className="mr-2 h-4 w-4" />
            Kulüp Oluştur
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

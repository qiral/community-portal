'use client'
import { useEffect, useState } from 'react'
import { useSelectedClub } from '@/lib/useSelectedClub'
import { getClubInfo, updateClub } from '@/lib/club/club'
import DashboardShell from '@/components/admin-page/dashboard-shell'
import { DashboardHeader } from '@/components/admin-page/dashboard-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

export default function KulupBilgileriPage() {
  const { selectedClub } = useSelectedClub()
  const [clubData, setClubData] = useState<{ name: string; description: string; email: string; created_at: string } | null>(null)

  useEffect(() => {
    if (!selectedClub) return

    const fetchClubData = async () => {
      try {
        const response = await getClubInfo(selectedClub.id)
        if (response.success) {
          setClubData(response.data)
        }
      } catch (error) {
        console.error('Kulüp bilgilerini getirirken bir hata oluştu:', error)
      }
    }
    fetchClubData()
  }, [selectedClub])

  const { toast } = useToast()

  const handleSave = async () => {
    if (!clubData) return

    try {
      await updateClub(selectedClub.id, clubData.name, clubData.description, clubData.email)
      localStorage.setItem('selectedClub', JSON.stringify({ ...selectedClub, name: clubData.name }))
      window.location.reload()
      toast({
        title: 'Başarılı',
        description: 'Kulüp bilgileri başarıyla güncellendi.',
      })
    } catch (error) {
      console.error('Güncelleme sırasında hata:', error)
      toast({
        title: 'Hata',
        description: 'Güncelleme sırasında bir hata oluştu.',
        variant: 'destructive',
      })
    }
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Kulüp Bilgileri"
        text="Kulüp bilgilerini görüntüleyin ve düzenleyin."
      >
        <Button onClick={handleSave} disabled={!clubData}>
          Değişiklikleri Kaydet
        </Button>
      </DashboardHeader>
      <Tabs defaultValue="genel" className="space-y-4">
        <TabsList>
          <TabsTrigger value="genel">Genel Bilgiler</TabsTrigger>
          <TabsTrigger value="iletisim">İletişim Bilgileri</TabsTrigger>
          <TabsTrigger value="sosyal">Sosyal Medya</TabsTrigger>
          <TabsTrigger value="yonetim">Yönetim Kadrosu</TabsTrigger>
        </TabsList>
        <TabsContent value="genel" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Genel Bilgiler</CardTitle>
              <CardDescription>Kulübünüzün temel bilgilerini düzenleyin.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Kulüp Adı</Label>
                <Input
                  id="name"
                  value={clubData?.name || ''}
                  onChange={(e) => setClubData({ ...clubData!, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Kulüp Açıklaması</Label>
                <Textarea
                  id="description"
                  value={clubData?.description || ''}
                  onChange={(e) => setClubData({ ...clubData!, description: e.target.value })}
                  className="min-h-[120px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  type="email"
                  value={clubData?.email || ''}
                  onChange={(e) => setClubData({ ...clubData!, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="creation-date">Kuruluş Tarihi</Label>
                <Input
                  id="creation-date"
                  type="datetime-local"
                  value={
                    clubData?.created_at
                      ? new Date(clubData.created_at).toISOString().slice(0, 16)
                      : ''
                  }
                  readOnly
                  className="cursor-not-allowed bg-gray-100"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="iletisim" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>İletişim Bilgileri(Email dışı eklenecek)</CardTitle>
              <CardDescription>Kulübünüzün iletişim bilgilerini düzenleyin.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  type="email"
                  value={clubData?.email || ''}
                  onChange={(e) => setClubData({ ...clubData!, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" defaultValue="+90 212 123 4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Adres</Label>
                <Textarea
                  id="address"
                  defaultValue="Üniversite Kampüsü, A Blok, No: 101, İstanbul"
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sosyal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sosyal Medya(Placeholder)</CardTitle>
              <CardDescription>Kulübünüzün sosyal medya hesaplarını düzenleyin.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input id="instagram" defaultValue="@teknolojikulubu" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input id="twitter" defaultValue="@teknolojikulubu" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <Input id="facebook" defaultValue="teknolojikulubu" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input id="linkedin" defaultValue="teknoloji-kulubu" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="yonetim" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Yönetim Kadrosu(Placeholder)</CardTitle>
              <CardDescription>Kulübünüzün yönetim kadrosunu düzenleyin.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="president">Başkan</Label>
                <Input id="president" defaultValue="Ahmet Yılmaz" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vice-president">Başkan Yardımcısı</Label>
                <Input id="vice-president" defaultValue="Ayşe Kaya" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secretary">Genel Sekreter</Label>
                <Input id="secretary" defaultValue="Mehmet Demir" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="treasurer">Sayman</Label>
                <Input id="treasurer" defaultValue="Zeynep Çelik" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

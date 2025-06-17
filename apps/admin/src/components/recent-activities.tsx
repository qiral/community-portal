import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentActivities() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>AY</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ahmet Yılmaz</p>
          <p className="text-muted-foreground text-sm">
            Yeni bir etkinlik oluşturdu: Teknoloji Zirvesi
          </p>
        </div>
        <div className="text-muted-foreground ml-auto text-sm">5 dk önce</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>ZC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Zeynep Çelik</p>
          <p className="text-muted-foreground text-sm">Galeriye 5 yeni fotoğraf yükledi</p>
        </div>
        <div className="text-muted-foreground ml-auto text-sm">15 dk önce</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Mehmet Demir</p>
          <p className="text-muted-foreground text-sm">Yeni bir feed postu paylaştı</p>
        </div>
        <div className="text-muted-foreground ml-auto text-sm">1 saat önce</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ayşe Kaya</p>
          <p className="text-muted-foreground text-sm">Kulüp bilgilerini güncelledi</p>
        </div>
        <div className="text-muted-foreground ml-auto text-sm">3 saat önce</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>AY</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ahmet Yılmaz</p>
          <p className="text-muted-foreground text-sm">
            Etkinlik detaylarını güncelledi: Yazılım Atölyesi
          </p>
        </div>
        <div className="text-muted-foreground ml-auto text-sm">5 saat önce</div>
      </div>
    </div>
  )
}

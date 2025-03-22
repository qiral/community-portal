'use client'

import { AppSidebar } from '@/components/sidebar/app-sidebar'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 w-full shrink-0 items-center gap-5 px-4">
          <div className="flex w-full items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Header />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="container flex min-h-screen min-w-[100%] items-center justify-center px-4 py-16">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">Bir Topluluktan Daha Fazlası</h1>
                <p className="text-muted-foreground text-xl">
                  Sende Yüzlerce Topluluk Arasına Katıl
                </p>
                <div className="flex gap-4">
                  <Button size="lg">Topluluğunu Ekle!</Button>
                  <Button variant="outline" size="lg">
                    Bize Ulaş!
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="text-right">
                  <span className="text-6xl font-bold">com_portal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

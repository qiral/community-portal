"use client";

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      <div className="container px-4 py-16 min-h-screen min-w-[100%] flex items-center justify-center">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Bir Topluluktan Daha Fazlası</h1>
            <p className="text-xl text-muted-foreground">
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
    </main>
  );
}

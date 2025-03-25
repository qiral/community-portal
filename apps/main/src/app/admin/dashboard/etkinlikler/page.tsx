import type { Metadata } from 'next'
import Link from 'next/link'
import { PlusCircle } from 'lucide-react'
import DashboardShell from '@/components/admin-page/dashboard-shell'
import { DashboardHeader } from '@/components/admin-page/dashboard-header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { EventsTable } from '@/components/admin-page/events-table'

export const metadata: Metadata = {
  title: 'Etkinlikler',
  description: 'Kulüp etkinliklerini yönetin',
}

export default function EtkinliklerPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Etkinlikler (Placeholder)"
        text="Kulüp etkinliklerini görüntüleyin ve yönetin."
      >
        <Link href="/admin/dashboard/etkinlikler/yeni">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Yeni Etkinlik
          </Button>
        </Link>
      </DashboardHeader>
      <Card>
        <EventsTable />
      </Card>
    </DashboardShell>
  )
}

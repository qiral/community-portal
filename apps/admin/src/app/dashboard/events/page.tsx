import type { Metadata } from 'next'
import Link from 'next/link'
import { PlusCircle } from 'lucide-react'
import DashboardShell from '@/components/dashboard-shell'
import { DashboardHeader } from '@/components/dashboard-header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { EventsTable } from '@/components/events-table'

export const metadata: Metadata = {
  title: 'Etkinlikler',
  description: 'Kulüp etkinliklerini yönetin',
}

export default function EtkinliklerPage() {
  return (
    <DashboardShell>
      <div className="container mx-auto max-w-7xl space-y-6 py-6">
        <DashboardHeader
          heading="Etkinlikler (Placeholder)"
          text="Kulüp etkinliklerini görüntüleyin ve yönetin."
        >
          <Link href="/dashboard/events/new">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Yeni Etkinlik
            </Button>
          </Link>
        </DashboardHeader>
        <Card>
          <EventsTable />
        </Card>
      </div>
    </DashboardShell>
  )
}

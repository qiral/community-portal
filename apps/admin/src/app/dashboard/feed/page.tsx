import type { Metadata } from 'next'
import Link from 'next/link'
import { PlusCircle } from 'lucide-react'
import DashboardShell from '@/components/dashboard-shell'
import { DashboardHeader } from '@/components/dashboard-header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FeedPostsTable } from '@/components/feed-posts-table'

export const metadata: Metadata = {
  title: 'Feed Postları',
  description: 'Kulüp feed postlarını yönetin',
}

export default function FeedPostuPage() {
  return (
    <DashboardShell>
      <div className="container mx-auto max-w-7xl space-y-6 py-6">
        <DashboardHeader
          heading="Feed Postları(Placeholder)"
          text="Kulüp feed postlarını görüntüleyin ve yönetin."
        >
          <Link href="/dashboard/feed/new">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Yeni Post
            </Button>
          </Link>
        </DashboardHeader>
        <Card>
          <FeedPostsTable />
        </Card>
      </div>
    </DashboardShell>
  )
}

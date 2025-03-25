import type { Metadata } from 'next'
import Link from 'next/link'
import { PlusCircle } from 'lucide-react'
import DashboardShell from '@/components/admin-page/dashboard-shell'
import { DashboardHeader } from '@/components/admin-page/dashboard-header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FeedPostsTable } from '@/components/admin-page/feed-posts-table'

export const metadata: Metadata = {
  title: 'Feed Postları',
  description: 'Kulüp feed postlarını yönetin',
}

export default function FeedPostuPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Feed Postları(Placeholder)"
        text="Kulüp feed postlarını görüntüleyin ve yönetin."
      >
        <Link href="/admin/dashboard/feed-postu/yeni">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Yeni Post
          </Button>
        </Link>
      </DashboardHeader>
      <Card>
        <FeedPostsTable />
      </Card>
    </DashboardShell>
  )
}

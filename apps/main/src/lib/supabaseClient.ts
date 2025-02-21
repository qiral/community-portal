import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://dbfxippjivuqpdzlkenx.supabase.co'
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiZnhpcHBqaXZ1cXBkemxrZW54Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODQ3ODU0MiwiZXhwIjoyMDU0MDU0NTQyfQ.qHHyD7WFQCFe0IdBCI9Y7MSOleFdt9PGbGkywm6V2p4'
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

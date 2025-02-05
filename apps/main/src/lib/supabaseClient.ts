import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL='https://dbfxippjivuqpdzlkenx.supabase.co'
const SUPABASE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiZnhpcHBqaXZ1cXBkemxrZW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0Nzg1NDIsImV4cCI6MjA1NDA1NDU0Mn0.eSSVQBjnkVN77GJltlBmskZopr_90ETRFSekHb4_W-M'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
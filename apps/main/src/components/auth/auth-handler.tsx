'use server'
import { createClient } from '@community-portal/lib/supabase/server'

export async function signUp(email: string, password: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error || !data?.user) {
    throw new Error(error?.message || 'Kayıt işlemi sırasında bir hata oluştu.')
  }
  return data.user.id
}

export async function signIn(email: string, password: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw new Error(error.message)
  return { token: data?.session?.access_token, message: 'Giriş başarılı!' }
}

export async function signOut() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  if (error) throw new Error(error.message)
}

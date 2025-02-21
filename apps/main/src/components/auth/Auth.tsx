'use server'

import { supabase } from '@/lib/supabaseClient'

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error || !data?.user) {
    throw new Error(error?.message || 'Kayıt işlemi sırasında bir hata oluştu.')
  }
  return data.user.id
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw new Error(error.message)
  return { token: data?.session?.access_token, message: 'Giriş başarılı!' }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw new Error(error.message)
}

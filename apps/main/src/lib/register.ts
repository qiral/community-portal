import { createClient } from '@community-portal/lib/supabase/client'
import { MakeRequest } from '@community-portal/lib/request'
import { signUp } from '@/components/auth/auth-handler'

export async function registerUser(
  firstName: string,
  lastName: string,
  schoolNumber: string,
  telephoneNumber: string,
  email: string,
  password: string
) {
  try {
    const supabase = await createClient()
    // To Do: Check if the user already exists

    // Supabase register
    const userID = await signUp(email, password)
    if (!userID) {
      throw new Error('Kayıt işlemi sırasında bir hata oluştu.')
    }

    // Backend register
    const response = await MakeRequest('/user', 'POST', {
      id: userID,
      first_name: firstName,
      last_name: lastName,
      school_number: schoolNumber,
      telephone_number: telephoneNumber,
      email: email,
    })

    // Error handling
    if (response instanceof Error) {
      await supabase.auth.admin.deleteUser(userID || '')
      throw new Error(response.message ? response.message : 'Sunucu hatası oluştu.')
    }

    return { success: true, message: '' }
  } catch (error) {
    console.error('Kullanıcı oluşturulamadı: ', error)
    return { success: false, message: (error as Error).message }
  }
}

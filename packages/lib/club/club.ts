import { MakeAuthenticatedRequest } from '../request'

export const baseUrl = process.env.NEXT_PUBLIC_API_URL

export async function createClub(
  name: string,
  description: string,
  email: string
  // To Do: Add logo and cover image
) {
  try {
    const response = await MakeAuthenticatedRequest('/api/club', 'POST', {
      name: name,
      description: description,
      email: email,
    })
    if (response instanceof Error) {
      throw new Error(response.message ? response.message : 'Sunucu hatası oluştu.')
    }
    return { success: true, message: '' }
  } catch (error) {
    console.error('Kulüp oluşturulamadı: ', error)
    return { success: false, message: (error as Error).message }
  }
}

export async function getClubInfo(id: string) {
  try {
    const response = await MakeAuthenticatedRequest(`/api/club`, 'GET', null, {
      'club-id': id,
    })
    if (response instanceof Error) {
      throw new Error(response.message ? response.message : 'Sunucu hatası oluştu.')
    }
    return { success: true, message: '', data: response }
  } catch (error) {
    console.error('Kulüp getirilemedi: ', error)
    return { success: false, message: (error as Error).message }
  }
}

export async function updateClub(
  id: string,
  name: string,
  description: string,
  email: string
  // To Do: Add logo and cover image
) {
  try {
    const response = await MakeAuthenticatedRequest(
      `/api/club`,
      'PUT',
      {
        name: name,
        description: description,
        email: email,
      },
      {
        'club-id': id,
      }
    )
    if (response instanceof Error) {
      throw new Error(response.message ? response.message : 'Sunucu hatası oluştu.')
    }
    return { success: true, message: '' }
  } catch (error) {
    console.error('Kulüp güncellenemedi: ', error)
    return { success: false, message: (error as Error).message }
  }
}

export async function deleteClub(id: string) {
  try {
    const response = await MakeAuthenticatedRequest(`/api/club/${id}`, 'DELETE', {})
    if (response instanceof Error) {
      throw new Error(response.message ? response.message : 'Sunucu hatası oluştu.')
    }
    return { success: true, message: '' }
  } catch (error) {
    console.error('Kulüp silinemedi: ', error)
    return { success: false, message: (error as Error).message }
  }
}

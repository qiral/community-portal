import { MakeAuthenticatedRequest } from '@/lib/request'

export async function addUsertoClub(clubID: string, userID: string, role: string) {
  try {
    const response = await MakeAuthenticatedRequest('/api/club-user', 'POST', {
      club_id: clubID,
      user_id: userID,
      role: role,
    })
    if (response instanceof Error) {
      throw new Error(response.message ? response.message : 'Sunucu hatası oluştu.')
    }
    return { success: true, message: '' }
  } catch (error) {
    console.error('Kullanıcı kulübe eklenemedi: ', error)
    return { success: false, message: (error as Error).message }
  }
}
export async function updateUserClubRole(clubID: string, userID: string, role: string) {
  try {
    const response = await MakeAuthenticatedRequest('/api/club-user', 'PUT', {
      club_id: clubID,
      user_id: userID,
      role: role,
    })
    if (response instanceof Error) {
      throw new Error(response.message ? response.message : 'Sunucu hatası oluştu.')
    }
    return { success: true, message: '' }
  } catch (error) {
    console.error('Kullanıcı kulüp rolü güncellenemedi: ', error)
    return { success: false, message: (error as Error).message }
  }
}
export async function removeUserfromClub(clubID: string, userID: string) {
  try {
    const response = await MakeAuthenticatedRequest('/api/club-user', 'DELETE', {
      club_id: clubID,
      user_id: userID,
    })
    if (response instanceof Error) {
      throw new Error(response.message ? response.message : 'Sunucu hatası oluştu.')
    }
    return { success: true, message: '' }
  } catch (error) {
    console.error('Kullanıcı kulüpten çıkarılamadı: ', error)
    return { success: false, message: (error as Error).message }
  }
}
// TODO: export async function getAllClubs()

export async function getAdminClubs() {
  try {
    const response = await MakeAuthenticatedRequest('/api/club-user', 'GET', {})
    if (response instanceof Error) {
      throw new Error(response.message ? response.message : 'Sunucu hatası oluştu.')
    }
    return { success: true, message: '', data: response }
  } catch (error) {
    console.error('Kulüpler getirilemedi: ', error)
    return { success: false, message: (error as Error).message }
  }
}

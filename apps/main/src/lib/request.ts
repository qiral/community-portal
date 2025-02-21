import { supabase } from '@/lib/supabaseClient'

export async function MakeRequest(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body: unknown = null,
  extraHeaders: Record<string, string> = {}
) {
  try {
    const { data, error: sessionError } = await supabase.auth.getSession()
    if (sessionError || !data.session?.access_token) {
      return new Error('User is not authenticated')
    }

    const accessToken = data.session.access_token

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      ...extraHeaders,
    }

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      return new Error(errorData?.message || `API request failed: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('API Request Error:', error)
    return error
  }
}

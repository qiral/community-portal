'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { registerUser } from '@/lib/register'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

const registerFormSchema = z
  .object({
    isim: z.string().min(2, 'İsim en az 2 karakter olmalıdır.'),
    soyisim: z.string().min(2, 'Soyisim en az 2 karakter olmalıdır.'),
    ogrenciNo: z
      .string()
      .min(9, 'Öğrenci numarası 9 haneli olmalıdır.')
      .max(9, 'Öğrenci numarası 9 haneli olmalıdır.')
      .regex(/^[0-9]+$/, 'Sadece rakam kullanılmalıdır'),
    telefonNo: z
      .string()
      .min(11, 'Telefon numarası 11 haneli olmalıdır (örn: 05*********)')
      .max(11, 'Telefon numarası 11 haneli olmalıdır')
      .regex(/^05[0-9]{9}$/, 'Geçersiz telefon numarası formatı'),
    sifre: z.string().min(6, 'Şifre en az 6 karakter olmalıdır.'),
    sifreTekrar: z.string().min(6, 'Şifre tekrarı en az 6 karakter olmalıdır.'),
    mail: z.string().email('E-Mail giriniz'),
  })
  .refine((data) => data.sifre === data.sifreTekrar, {
    message: 'Şifreler eşleşmiyor!',
    path: ['sifreTekrar'],
  })

type RegisterFormValues = z.infer<typeof registerFormSchema>

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      isim: '',
      soyisim: '',
      ogrenciNo: '',
      telefonNo: '',
      sifre: '',
      sifreTekrar: '',
      mail: '',
    },
  })

  async function onSubmit(data: RegisterFormValues) {
    setIsLoading(true)
    setError(null)
    setSuccessMessage(null)

    try {
      const result = await registerUser(
        data.isim,
        data.soyisim,
        data.ogrenciNo,
        data.telefonNo,
        data.mail,
        data.sifre
      )

      if (!result.success) {
        throw new Error(result.message)
      }

      setSuccessMessage('Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz...')
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } catch (error) {
      setError((error as Error).message || 'Kayıt sırasında bir hata oluştu.')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* İsim */}
        <FormField
          control={form.control}
          name="isim"
          render={({ field }) => (
            <FormItem>
              <FormLabel>İsim</FormLabel>
              <FormControl>
                <Input placeholder="İsim" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Soyisim */}
        <FormField
          control={form.control}
          name="soyisim"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Soyisim</FormLabel>
              <FormControl>
                <Input placeholder="Soyisim" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* E-Mail */}
        <FormField
          control={form.control}
          name="mail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Mail</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.com" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Öğrenci Numarası */}
        <FormField
          control={form.control}
          name="ogrenciNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Öğrenci Numarası</FormLabel>
              <FormControl>
                <Input
                  placeholder="123456789"
                  type="text"
                  maxLength={9}
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Telefon Numarası */}
        <FormField
          control={form.control}
          name="telefonNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefon Numarası</FormLabel>
              <FormControl>
                <Input
                  placeholder="05*********"
                  type="tel"
                  maxLength={11}
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Şifre */}
        <FormField
          control={form.control}
          name="sifre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Şifre</FormLabel>
              <FormControl>
                <Input placeholder="******" type="password" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Şifre Tekrarı */}
        <FormField
          control={form.control}
          name="sifreTekrar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Şifre Tekrarı</FormLabel>
              <FormControl>
                <Input placeholder="******" type="password" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Hata ve Başarı Mesajları */}
        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        {/* Kayıt Butonu */}
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? 'Kayıt Olunuyor...' : 'Kayıt Ol'}
        </Button>
      </form>
    </Form>
  )
}

'use client';

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '@/components/ui/input'
import { signIn } from './Auth'
import { useRouter } from 'next/navigation'
const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Geçerli bir email adresi girin.',
  }),
  password: z.string().min(6, {
    message: 'Şifre en az 6 karakter olmalıdır.',
  }),
})

type LoginFormValues = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true)
    setError(null)
    try {
      const token = await signIn(data.email, data.password)
      if (!token) throw new Error('Token alındı, ancak doğrulama başarısız oldu.')

      setSuccessMessage('Giriş başarılı! Anasayfaya yönlendiriliyorsunuz...')
      setTimeout(() => {
        router.push('/')
      }, 2000)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || 'Giriş sırasında bir hata oluştu.')
      } else {
        setError('Beklenmeyen bir hata oluştu.')
      }
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="ornek@email.com" type="email" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
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
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
        </Button>
        {error && <div className="text-red-500">{error}</div>} {/* Error message display */}
        {successMessage && <div className="text-green-500">{successMessage}</div>} {/* Success message display */}
      </form>
    </Form>
  )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Image from 'next/image'
import { Upload, X } from 'lucide-react'
import { createClub } from '@community-portal/lib/club/club'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { toast } from '@/components/hooks/use-toast'

const clubFormSchema = z.object({
  name: z.string().min(1, 'Kulüp adı gereklidir'),
  description: z.string().min(1, 'Kulüp açıklaması gereklidir'),
  email: z.string().email('Geçerli bir email adresi giriniz'),
  logo: z.instanceof(File).optional(),
})

type ClubFormValues = z.infer<typeof clubFormSchema>

export default function ClubForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  const form = useForm<ClubFormValues>({
    resolver: zodResolver(clubFormSchema),
    defaultValues: {
      name: '',
      description: '',
      email: '',
      logo: undefined,
    },
  })

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0]
      form.setValue('logo', file)
      const reader = new FileReader()
      reader.onload = (event) => setLogoPreview(event.target?.result as string)
      reader.readAsDataURL(file)
    }
  }

  const removeLogo = () => {
    form.setValue('logo', undefined)
    setLogoPreview(null)
  }

  async function onSubmit(data: ClubFormValues) {
    setIsSubmitting(true)
    try {
      // To Do: Add logo and cover image
      await createClub(data.name, data.description, data.email)
      toast({ title: 'Kulüp Oluşturuldu!', description: `${data.name} başarıyla oluşturuldu.` })
      setTimeout(() => {
        router.push('/')
      }, 2000)
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Kulüp oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.'
      toast({
        title: 'Hata',
        description: errorMessage,
        variant: 'destructive',
      })
      console.error('Error creating club:', errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Yeni Kulüp Oluştur</CardTitle>
        <CardDescription>Aşağıdaki alanları gerektiği gibi doldurun.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kulüp İsmi</FormLabel>
                  <FormControl>
                    <Input placeholder="Kulüp ismi girin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kulüp Açıklaması</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Kulübünüz ne hakkında?"
                      {...field}
                      className="min-h-[120px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kulüp İletişim Maili</FormLabel>
                  <FormControl>
                    <Input placeholder="iletisim@yourclub.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <FormLabel>Kulüp Logosu</FormLabel>
              {logoPreview ? (
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-lg border">
                  <Image src={logoPreview} alt="Logo preview" fill className="object-cover" />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8"
                    onClick={removeLogo}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
                  <Upload className="text-muted-foreground mb-2 h-10 w-10" />
                  <div className="text-muted-foreground mb-4 text-sm">
                    <span className="font-medium">Yüklemek için tıklayın</span> veya sürükleyip
                    bırakın
                  </div>
                  <Input
                    id="logo"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoChange}
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => document.getElementById('logo')?.click()}
                  >
                    Logo Seçin
                  </Button>
                </div>
              )}
              <p className="text-muted-foreground mt-2 text-xs">
                Önerilen: Kare resim, en az 300x300 piksel
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Geri
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Oluşturuluyor' : 'Kulüp Oluştur'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}

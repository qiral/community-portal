'use client'
import Image from 'next/image'

type ImageType = {
  index: number
  src: string
  alt: string
}

export default async function SelectedImagePage({ params }: { params: Promise<{ slug: string }> }) {
  const images: ImageType[] = [
    {
      index: 1,
      src: 'https://mxayitmkbfthrunrhgfk.supabase.co/storage/v1/object/public/images//login.jpg',
      alt: '1. resim',
    },
    {
      index: 2,
      src: 'https://mxayitmkbfthrunrhgfk.supabase.co/storage/v1/object/public/images//login.jpg',
      alt: '2. resim',
    },
    {
      index: 3,
      src: 'https://mxayitmkbfthrunrhgfk.supabase.co/storage/v1/object/public/images//login.jpg',
      alt: '3. resim',
    },
    {
      index: 4,
      src: 'https://mxayitmkbfthrunrhgfk.supabase.co/storage/v1/object/public/images//login.jpg',
      alt: '4. resim',
    },
    {
      index: 5,
      src: 'https://mxayitmkbfthrunrhgfk.supabase.co/storage/v1/object/public/images//login.jpg',
      alt: '5. resim',
    },
    {
      index: 6,
      src: 'https://mxayitmkbfthrunrhgfk.supabase.co/storage/v1/object/public/images//login.jpg',
      alt: '6. resim',
    },
    {
      index: 7,
      src: 'https://mxayitmkbfthrunrhgfk.supabase.co/storage/v1/object/public/images//login.jpg',
      alt: '7. resim',
    },
    {
      index: 8,
      src: 'https://mxayitmkbfthrunrhgfk.supabase.co/storage/v1/object/public/images//login.jpg',
      alt: '8. resim',
    },
    {
      index: 9,
      src: 'https://mxayitmkbfthrunrhgfk.supabase.co/storage/v1/object/public/images//login.jpg',
      alt: '9. resim',
    },
  ]
  //todo: get data from api

  const slug = (await params).slug
  const selectedImage = images.find((image) => image.index === Number(slug))
  return (
    <div className="flex flex h-screen w-full flex-col">
      <div className="flex w-full flex-wrap items-center justify-center py-8">
        {selectedImage && (
          <div className="flex w-5/6 flex-col items-center justify-center p-4">
            <Image src={selectedImage.src} alt={selectedImage.alt} width={800} height={800} />
          </div>
        )}
      </div>
    </div>
  )
}

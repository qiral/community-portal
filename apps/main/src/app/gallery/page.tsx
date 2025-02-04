'use client'

import Link from 'next/link'
import Image from 'next/image'

type ImageType = {
  index: number
  src: string
  alt: string
}

export default function GalleryPage() {
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

  return (
    <div className="flex w-full flex-wrap py-8">
      {images.map((image, index) => (
        <div key={index} className="flex w-1/3 flex-col items-center justify-center p-4">
          <Link href={`/gallery/${image.index}`}>
            <Image src={image.src} width={350} height={350} alt={image.alt} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export const metadata = {
  title: 'Contact Us - Local Band | Ketchum, ID',
  description: 'Let us know your thoughts, about the bands, our website, or the weather.',
}

import Image from 'next/image'
import BandsTexture from '@/public/images/bands-texture.jpg'
import ContactForm from '@/components/contact-form'
import Link from 'next/link'

export default function SignIn() {

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <Image src={BandsTexture} className="fixed top-0 left-0 w-full h-[100vh] object-cover" alt="bands Texture"/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="mt-32 mb-12 md:mt-40 md:pb-20 shadow-lg py-6 px-8 border-gray-200 rounded bg-white max-w-3xl mx-auto">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 mt-8">
            <h1 className="h1">Let us know your thoughts.</h1>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

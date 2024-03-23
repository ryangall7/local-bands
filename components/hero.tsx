import Image from 'next/image'
import HeroImage from '@/public/images/local-band-logo-ideas-1b.png'

export default function Hero() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">


          {/* Hero image */}
          <Image src={HeroImage} alt={"Local Bands"} className='max-w-xl m-auto mb-20' />

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">How long have you survived the valley?</h1>
          </div>

        </div>

      </div>
    </section>
  )
}
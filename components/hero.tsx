import Image from 'next/image'
import HeroBand from '@/public/images/hero-band.jpg'
import HeroLocal from '@/public/images/hero-local.jpg'
import HeroBands from '@/public/images/hero-bands.jpg'
import HeroHand from '@/public/images/hero-hands.jpg'

export default function Hero() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          <Image src={HeroHand} className="absolute bottom-0 left-0 w-full" alt="bands Texture"/>

          {/* Hero image */}
          <div className='max-w-3xl m-auto'>
            <div className='w-full mb-20 relative' role="img" title="Local Bands" style={{paddingBottom:"80%"}}>
              <Image src={HeroBands} className="absolute top-1/2 transform-gpu -translate-y-1/2" alt="red stripes"/>
              <Image src={HeroLocal} className="absolute top-0 left-0 transform-gpu animate-left" style={{width:"84%"}} alt="Local"/>
              <Image src={HeroBand} className="absolute bottom-0 right-0 transform-gpu animate-right" style={{width:"68%"}} alt="Bands"/>
            </div>
          </div>

          {/* Section header */}
          <div className="text-center mb-[15vw]">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 drop-shadow-lg" data-aos="zoom-y-out">How long have you survived the valley?</h1>
          </div>

        </div>
      </div>

    </section>
  )
}
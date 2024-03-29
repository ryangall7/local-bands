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
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 drop-shadow-lg drop-shadow-white" data-aos="zoom-y-out">How long have you survived the valley?</h1>
            <div className="max-w-3xl mx-auto relative z-10">
              <a className="btn-sm text-white bg-red-500 hover:bg-red-700 w-full my-5 sm:w-auto sm:mb-0 mr-4" href="/contact">
                <svg  xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8 pr-3 fill-current"  viewBox="0 0 24 24"  fill="currentColor">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                  <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
                </svg>
                Contact US</a>

              <a className="btn-sm text-white bg-blue-600 hover:bg-blue-800 w-full my-5 sm:w-auto sm:mb-0" href="https://www.facebook.com/LocalBandID" target="_block">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
                Join the Conversation</a>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
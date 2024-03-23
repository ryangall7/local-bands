import Image from 'next/image'
import TestimonialImage from '@/public/images/Spur-Logo-Primary-Green.png'

export default function Proceeds() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <Image className="relative p-2 bg-white" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  Proceeds will go to the Spur Foundation’s Affordable Housing Fund.
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1"><a href="https://www.spurfoundation.org/" target="blank">www.spurfoundation.org</a></cite>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
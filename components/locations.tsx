
import Image from 'next/image'

import POSImage from '@/public/images/pos-image.jpg'
import LocationBlock from './location-block'
import LocationsBackground from '@/public/images/map.jpg'

export default function Locations() {


    const locations = [
      {
        name: "Madeline and Oliver",
        address: "460 Sun Valley Rd. Ste 102",
        link: "https://www.google.com/maps/dir//Madeline+%2B+Oliver,+Sun+Valley+Road,+Ketchum,+ID/@43.6814815,-114.4040593,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x54a982b9dddae76b:0x202866bd70833164!2m2!1d-114.3627739!2d43.6814269?entry=ttu",
        logo: "mo-logo"
      },
      {
        name: "Valley Apothecary",
        address: "201 North Washington Ave",
        link: "https://www.google.com/maps/dir//valley+apothecary/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x54a9835f13a1ac8d:0xf5910f600f5fb5da?sa=X&ved=1t:3061&ictx=111",
        logo: "va-logo"
      },
      {
        name: "Board Bin",
        address: "180 4th St E",
        link: "https://www.google.com/maps/dir//Board+Bin,+180+4th+St+E,+Ketchum,+ID+83340/@43.6803931,-114.4071483,13z/data=!3m1!5s0x54a982ba2f4cd81d:0xbe7cce22f8d9e47d!4m8!4m7!1m0!1m5!1m1!1s0x54a982ba174cefe7:0x61c1a6aeb2009c1c!2m2!1d-114.3658799!2d43.6804099?entry=ttu",
        logo: "bb-logo"
      },
      {
        name: "Subshack",
        address: "371 Washington Ave",
        link: "https://www.google.com/maps/dir//Johnny+G's+Sub+Shack,+Washington+Avenue,+Ketchum,+ID/@43.6803763,-114.4068974,13z/data=!3m2!4b1!5s0x54a982ba2f4cd81d:0xbe7cce22f8d9e47d!4m8!4m7!1m0!1m5!1m1!1s0x54a982ba1952854d:0x79cc261787e9fc47!2m2!1d-114.3655902!2d43.6803425?entry=ttu",
        logo: "jgs-logo"
      },
      {
        name: "Starbucks/Sun Valley Visitor Center",
        address: "491 Sun Valley Rd",
        link: "https://www.google.com/maps/dir//Starbucks,+Sun+Valley+Road,+Ketchum,+ID/@43.6817404,-114.404323,13z/data=!3m1!5s0x54a982ba2f4cd81d:0xbe7cce22f8d9e47d!4m8!4m7!1m0!1m5!1m1!1s0x54a982cc06bbcb19:0x3fd6d3713e3059f3!2m2!1d-114.3630376!2d43.6816858?entry=ttu",
        logo: "sb-logo"
      }
    ]

  return (
    <section className="relative">

      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/3 md:mt-24 lg:mt-0 bg-yellow-900 pointer-events-none" aria-hidden="true">
        <Image className="absolute inset-0 w-full h-full object-cover opacity-80" src={LocationsBackground} alt="" layout="fill" />
      </div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-17 md:py-28">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10 md:mb-10 bg-gray-100 rounded shadow-xl">
            <h2 className="h2 mb-4">How do I get my Local Band?</h2>
            <div className="flex gap-8 m-4 items-center">
              <Image src={POSImage} className="w-56 m-4 rounded border-gray-200" alt="Local Bands" />
              <div className="text-left">
                <p className="text-xl text-gray-600">Local Bands are available at the following retailers for $2 each. The Local Band works on the honor system.  Request the band that corresponds with your Wood River Valley origin story. The authorized seller may ask you a validation quiz question. If you see fruad let us know.</p>
                <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full my-5 w-auto sm:mb-0" href="/contact">Report fraud</a>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {locations.map((location, i) => (
              <LocationBlock key={i} title={location.name} description={location.address} logo={location.logo} link={location.link} />
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}
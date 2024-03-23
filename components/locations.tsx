
import Image from 'next/image'

import LocationBlock from './location-block'
import LocationsBackground from '@/public/images/map.jpg'

const locations = [
  {
    name: "Madeline and Oliver",
    address: "123 Sun Valley Road",
  },
  {
    name: "Valley Apothecary",
    address: "123 Sun Valley Road",
  },
  {
    name: "Board Bin",
    address: "123 Sun Valley Road",
  },
  {
    name: "Subshack",
    address: "123 Sun Valley Road",
  },
  {
    name: "Starbucks/Sun Valley Visitor Center",
    address: "123 Sun Valley Road",
  }
]

export default function Locations() {
  return (
    <section className="relative">

      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-green-900 pointer-events-none" aria-hidden="true">
        <Image className="absolute inset-0 w-full h-full object-cover opacity-75" src={LocationsBackground} alt="" layout="fill" />
      </div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-17 md:py-28">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10 md:mb-10 bg-gray-100 rounded shadow-xl">
            <h2 className="h2 mb-4">How do I get my Local Band?</h2>
            <p className="text-xl text-gray-600">Local Bands are available at the following retailers for $2 each. The Local Band works on the honor system.  Request the band that corresponds with your Wood River Valley origin story. The authorized seller may ask you a validation quiz question.</p>
            <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full my-5 sm:w-auto sm:mb-0" href="/fraud">Report fraud</a>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {locations.map((location, i) => (
              <LocationBlock key={i} title={location.name} description={location.address} />
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}
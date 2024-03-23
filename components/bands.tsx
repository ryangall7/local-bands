'use client'

import { useState, useRef, useEffect } from 'react'

import Animation from '@/components/animation'

const bands = [
    {
      name:'Born Idenity',
      description: 'Born and raised in the Valley',
      color: 'yellow',
      bgClass: 'bg-yellow-600'
    },
    {
      name:'Diamond Sun',
      description: '1960 - 1969',
      color: 'yellow',
      bgClass: 'bg-yellow-400'
    },
    {
      name :'The Burn',
      description: '1970 - 1979',
      color:'red',
      bgClass: 'bg-red-500'
    },
    {
      name:'Inhibition',
      description: '1980 - 1989',
      color: 'black',
      bgClass: 'bg-black'
    },
    {
      name: 'Exhibition',
      description: '1990 - 1999',
      color: 'grey',
      bgClass: 'bg-gray-500'
    },
    {
      name: 'Canyon',
      description: '2000 - 2009',
      color: 'blue',
      bgClass: 'bg-blue-500'
    },
    {
      name:'Broadway',
      description: '2010 - 2019',
      color: 'green',
      bgClass: 'bg-green-500'
    },
    {
      name: 'Quarter Dollar',
      description: '2020 - present',
      color: 'pink',
      bgClass: 'bg-pink-500'
    }
]

export default function Bands() {

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">How does it work?</h3>
                <p className="text-xl text-gray-600">Pisteoff has devised a nifty 8 level coding system for the Local Bands (think Baldy) each with its own name and color, both of which denote when someone moved to the Valley (or for those lucky enough, were born here.)</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">

                { bands.map(({name, bgClass, description}, i) => <div key={i}
                    className={`flex items-center text-lg p-5 rounded border duration-300 ease-in-out mb-3 ${bgClass}`}
                  >
                    <div>
                      <span className="font-bold leading-snug text-white">{name}</span> <span className="text-white">( {description} )</span>
                    </div>
                    { /*
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                    </div>
                    */ }
                  </div>)
                }
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <div className="relative inline-flex flex-col">
                    <Animation />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import MainCopy from '@/components/main-copy'
import Bands from '@/components/bands'
import Locations from '@/components/locations'
import Proceeds from '@/components/proceeds'

export default function Home() {
  return (
    <>
      <Hero />
      <MainCopy />
      <Bands />
      <Locations />
      <Proceeds />
    </>
  )
}

export const metadata = {
  title: 'Local Band | Ketchum, ID',
  description: 'How long have you survived the valley? We' + "'"+ 're a band of locals” Justin Pisteoff shouted out to a packed in crowd at Grumpy&apos;s last night at the launch of his new initiative Local Band.',
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

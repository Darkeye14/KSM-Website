import React from 'react'
import Carousel from './Carousel'
import Hero from './Hero'

export default function Home() {
  return (
    <div>
      <Carousel/>
      <Hero title="About Us" description="Kodava samaja Mysuru is an organisation that belongs to all kodavas. It is a place which hosts all the kodava festivities"/>
      <Hero title="What we do? " description="We organise sports cultural and all other major kodava events here. This association aim at unifying all kodavas present in Mysuru and promate their culture and tradition."/>
    </div>
  )
}

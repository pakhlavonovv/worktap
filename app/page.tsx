import Example from '@/components/example'
import Footer from '@/components/footer'
import Freelancer from '@/components/freelancer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Kworks from '@/components/kworks'
import TopFooter from '@/components/top_of_footer'
import React from 'react'

const Main = () => {
  return (
    <div>

<Header/>
        <br />
        <Hero/>
        <br /><br /><br />
        <Kworks/>
        <br /><br /><br />
        <Freelancer/>
        <br /><br /><br />
        <Example/>
        <br /><br /><br />
      <TopFooter/>
      <Footer/>
    </div>
  )
}

export default Main
import React from 'react'
import Header from '@/components/stock_header'
import Hero from '@/components/profile_hero'
import KworkCreate from '@/components/profile_kwork'
import ProfileReviews from '@/components/profile_reviews'
import Footer from '@/components/footer'

const Page = () => {
  return (
    <div>
        <Header/>
        <br /><br />
        <Hero/>
        <br /><br />
        <KworkCreate/>
        <br /><br />
        <ProfileReviews/>
        <br /><br /><br />
        <Footer/>
    </div>
  )
}

export default Page
import React from 'react'
import HomeCta from '../components/home/HomeCta'
import HomeFeatures from '../components/home/HomeFeatures'
import HomeHero from '../components/home/HomeHero'
import HomePortfolio from '../components/home/HomePortfolio'
import HomeServices from '../components/home/HomeServices'

function Home() {
    return (
        <div>
            <HomeHero/>

            <HomeServices/>

            <HomeFeatures/>

            <HomePortfolio/>

            <HomeCta/>

        </div>
    )
}

export default Home

import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import News from './News'
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TopSellers></TopSellers>
            <Recommended></Recommended>
            <News></News>
        </>
    )
}

export default Home
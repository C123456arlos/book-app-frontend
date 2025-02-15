import React from 'react'
import bannerImg from '../../assets/banner.png'
function Banner() {
    return (
        <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
            <div className='md:w-1/2 w-full flex items-center md:justify-end'>
                <img src={bannerImg}></img>
            </div>
            <div className='md:w-1/2 w-full '>
                <h1 className='md:text-5xl text-2xl font-medium mb-7 font-sans'>new releases this week</h1>
                <p className='mb-10'>it is tim to update your reading list with some of the latest and greatest releases</p>
                <button className='relative bg-yellow-400 p-5 rounded-lg'>subscribe</button>
            </div>

        </div>
    )
}

export default Banner
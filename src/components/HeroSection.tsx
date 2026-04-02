import React from 'react'

const HeroSection = () => {
    return (
        <section id="hero" className='section hero pt-10 pb-10 max-w-[50%] flex flex-col justify-center items-center gap-4 mx-auto h-[calc(100vh-80px)]'>
            <h1 className='text-4xl font-bold'>Adam Halid</h1>
            <p className='text-lg mt-4 mb-4'>A self-taught web developer with 3 years of experience passionate about creating amazing web experience.</p>
            <div className='flex justify-center items-center gap-4'>
                <button className='py-2 px-4 border-blue-500 bg-blue-500 rounded-full text-white max-w-[40] transition-all hover:bg-transparent hover:text-black cursor-pointer'>View Projects</button>
                <button className='py-2 px-4 border border-blue-200 rounded-full max-w-[40] border-blue-200 transition-all hover:bg-blue-200 hover:text-dark cursor-pointer'>View Projects</button>
            </div>
        </section>
    )
}

export default HeroSection
const HeroSection = () => {
    return (
        <section id="about" className='hero t-10 pb-10 flex flex-col gap-4 p-4'>
            <h2 className='text-4xl'>Software Engineer</h2>
            <p className='text-lg mt-4 mb-4'>A self-taught web developer with 3 years of experience passionate about creating amazing web experience.</p>
            <div className='flex gap-4'>
                <button className='primary-button'>
                    <a href="#">View Projects</a>
                </button>
            </div>
        </section>
    )
}

export default HeroSection
import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                // scroll down should show navbar
                setVisible(true);
            } else {
                // Scrolling UP → hide navbar
                setVisible(false);
            }

            if (currentScrollY === 0) {
                // Reached the top → hide navbar after a brief delay
                setTimeout(() => setVisible(false), 800);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // i want to make the navbar to be fixed at the top of the page and only show when the user scrolls down, and hide when the user scrolls up, and also hide when the user reaches the top of the page. i also want to add a transition effect when the navbar slides in and out of view. i also want to add a delay when the user reaches the top of the page before hiding the navbar. After scrolled down, the navbar should be visible, but after some time it will scroll back up if there is not change in the scroll position. The navbar should only be visible when the user is actively scrolling down, and it should hide when the user scrolls up or reaches the top of the page.
        <nav className={`section relative top-0 left-0 right-0 z-50 p-4 flex rounded-2xl justify-between items-center bg-white shadow-md transition-transform duration-300'}`}>
            <h1 className='p-0 m-0 text-2xl'>Adam Halid</h1>
            <ul className='flex justify-between items-center gap-10'>
                <li className='py-2 px-4 hover:bg-blue-400 transition-all border-blue-500 rounded-full hover:text-white'>About</li>
                <li className='py-2 px-4 hover:bg-blue-400 transition-all border-blue-500 rounded-full hover:text-white'>Skills</li>
                <li className='py-2 px-4 hover:bg-blue-400 transition-all border-blue-500 rounded-full hover:text-white'>Work Experience</li>
                <li className='py-2 px-4 hover:bg-blue-400 transition-all border-blue-500 rounded-full hover:text-white'>Experience</li>
                <li className='py-2 px-4 hover:bg-blue-400 transition-all border-blue-500 rounded-full hover:text-white'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
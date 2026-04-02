import React, { useState, useEffect, useRef } from 'react'

interface NavLink {
    label: string;
    href: string;
}

const Navbar = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const lastScrollY = useRef<number>(0);

    useEffect(() => {
        const handleScroll = (): void => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                setVisible(true);
            } else {
                setVisible(false);
            }
            if (currentScrollY === 0) {
                setTimeout(() => setVisible(false), 800);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = (): void => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => window.addEventListener('resize', handleResize)
    }, [])

    const navLinks: NavLink[] = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Work Experience', href: '#work-experience' },
        { label: 'Contact', href: '#contact' }
    ]

    return (
        <nav className='w-full relative'>
            <div className='relative flex justify-between items-center p-4'>
                <h1 className='text-headling'>Adam Halid</h1>

                {/* Desktop Links */}
                {!isMobile && (
                    <ul className='flex items-center gap-10'>
                        {navLinks.map((link: NavLink) => (
                            <li key={link.href} className='cursor-pointer'>
                                <a href={link.href} target='_blank' className='text-paragraph hover:text-tertiary trans'>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
                {isMobile && (
                    <button onClick={() => setMenuOpen((prev: boolean) => !prev)} className='w-10 h-10 rounded-full bg-tertiary flex items-center justify-center cursor-pointer' aria-label='Toggle Menu'>
                        <span className='flex items-center justify-center gap-[3px]'>
                            <span className='w-1 h-1 rounded-full bg-bg block' />
                            <span className='w-1 h-1 rounded-full bg-bg block' />
                            <span className='w-1 h-1 rounded-full bg-bg block' />
                        </span>
                    </button>
                )}
            </div>
            {isMobile && (
                <ul className={`
                    absolute top-full left-0 w-full z-50 flex flex-col gap-4 px-6 overflow-hidden trans ease-in-out $ 
                    ${menuOpen ? 'max-h-64 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`
                }>
                    {navLinks.map((link: NavLink) => (
                        <li key={link.href} className='cursor-pointer'>
                            <a href={link.href} className='text-paragraph hover:text-primary trans' onClick={() => setMenuOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navbar
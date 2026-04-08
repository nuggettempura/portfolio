import { useState, useEffect, useRef } from 'react'
import { navLinks } from '../data';
import type { NavLink } from '../data';

const HIDE_DELAY = 3000;

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const lastScrollY = useRef(0);
    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearHideTimer = () => {
        if (hideTimer.current) {
            clearTimeout(hideTimer.current);
            hideTimer.current = null;
        }
    }

    const scheduleHide = () => {
        clearHideTimer();
        hideTimer.current = setTimeout(() => setVisible(false), HIDE_DELAY)
    }

    useEffect(() => {
        const handleScroll = (): void => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY.current;

            if (currentY <= 0) {
                clearHideTimer();
                setVisible(false);
            } else if (delta > 0) {
                setVisible(true);
                scheduleHide();
            } else if (delta < 0) {
                clearHideTimer();
                setVisible(false);
            }

            lastScrollY.current = currentY;
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        return (() => {
            window.removeEventListener('scroll', handleScroll);
            clearHideTimer();
        })
    })

    useEffect(() => {
        const handleResize = (): void => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <nav className='w-full sticky top-3 z-10' style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', transition: visible ? 'opacity 0.4s ease-in-out' : 'opacity 0.15s ease-in-out', backdropFilter: visible ? 'blur(15px)' : 'none' }}>
            <div className='relative flex justify-between items-center p-4 border rounded-[10px] border-paragraph'>
                <h1 className='text-headline'>Adam Halid</h1>

                {/* Desktop Links */}
                {!isMobile && (
                    <ul className='flex items-center gap-10'>
                        {navLinks.map((link: NavLink) => (
                            <li key={link.href} className='cursor-pointer'>
                                <a href={`#${link.href}`} className='text-paragraph hover:text-tertiary trans'>
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
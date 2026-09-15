import { useState, useEffect } from 'react'
import { navLinks } from '../data'
import type { NavLink } from '../data'

interface NavbarProps {
    theme: 'dark' | 'light'
    onToggleTheme: () => void
}

const ThemeToggle = ({ theme, onToggleTheme }: NavbarProps) => (
    <button
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        className='w-8 h-8 flex items-center justify-center trans cursor-pointer text-soft hover:text-ink'
    >
        {theme === 'dark' ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
        ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        )}
    </button>
)

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = (): void => setIsMobile(window.innerWidth < 768)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <nav className='sticky top-0 z-20 bg-bg border-b border-line py-2'>
            <div className='app flex justify-between items-center'>
                <a href="#about" className='font-display font-semibold text-ink'>Adam Halid</a>

                {!isMobile && (
                    <ul className='flex items-center gap-8'>
                        {navLinks.map((link: NavLink) => (
                            <li key={link.href}>
                                <a href={link.href} className='text-sm text-soft hover:text-ink trans'>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

                <div className='flex items-center gap-3'>
                    <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
                    {isMobile && (
                        <button
                            onClick={() => setMenuOpen(prev => !prev)}
                            aria-label='Toggle menu'
                            aria-expanded={menuOpen}
                            className='w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer'
                        >
                            <span className='w-5 h-px bg-ink block trans' style={{ transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none' }} />
                            <span className='w-5 h-px bg-ink block trans' style={{ transform: menuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none' }} />
                        </button>
                    )}
                </div>
            </div>

            {isMobile && (
                <ul className={`
          overflow-hidden trans ease-in-out border-t border-line
          ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 border-t-0'}
        `}>
                    <div className='app flex flex-col gap-4 py-5'>
                        {navLinks.map((link: NavLink) => (
                            <li key={link.href}>
                                <a href={link.href} className='text-soft hover:text-ink trans' onClick={() => setMenuOpen(false)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </div>
                </ul>
            )}
        </nav>
    )
}

export default Navbar

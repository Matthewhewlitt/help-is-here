import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '../lib/utils'

const navLinks = [
  { to: '/',             label: 'Home' },
  { to: '/about',        label: 'About' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact',      label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled]     = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-brand-dark/96 backdrop-blur-md border-b border-white/10 py-3 shadow-brand-md'
          : 'bg-gradient-to-b from-brand-dark/50 to-transparent py-5'
      )}
    >
      <nav className="container-wide flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <span className="font-display text-xl font-bold text-brand-secondary transition-opacity duration-200 group-hover:opacity-90">
            Help
          </span>
          <span className="font-display text-xl font-bold text-white">
            &nbsp;is Here
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                cn(
                  'relative font-body text-sm font-medium pb-0.5',
                  'transition-opacity duration-200',
                  'after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-brand-secondary',
                  'after:transition-all after:duration-200 after:ease-out',
                  isActive
                    ? 'text-brand-secondary after:w-full'
                    : 'text-white/75 hover:text-white after:w-0 hover:after:w-full'
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA area */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+17058880613"
            className="flex items-center gap-1.5 text-white/65 hover:text-white transition-opacity duration-200 text-sm font-body"
          >
            <Phone size={13} strokeWidth={2.5} />
            705-888-0613
          </a>
          <Link
            to="/contact"
            className={cn(
              'inline-flex items-center font-body font-semibold text-sm',
              'bg-gold-gradient text-brand-dark',
              'h-9 px-5 rounded-lg shadow-warm-md',
              'transition-transform transition-opacity duration-200',
              'hover:brightness-105 active:scale-[0.97]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2'
            )}
          >
            Book a Ride
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileOpen(v => !v)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          className={cn(
            'md:hidden p-2 rounded-lg text-white',
            'transition-opacity duration-200',
            'hover:bg-white/10 active:scale-95',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary'
          )}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isMobileOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-brand-dark/98 backdrop-blur-md border-t border-white/10 px-4 pt-3 pb-6 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                cn(
                  'font-body font-medium py-3 px-4 rounded-lg transition-opacity duration-200',
                  isActive
                    ? 'text-brand-secondary bg-brand-secondary/10'
                    : 'text-white/75 hover:text-white hover:bg-white/8 active:scale-[0.98]'
                )
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+17058880613"
              className="flex items-center gap-2 text-white/60 hover:text-white py-2 px-4 font-body text-sm transition-opacity duration-200"
            >
              <Phone size={13} strokeWidth={2.5} />
              705-888-0613
            </a>
            <Link
              to="/contact"
              onClick={() => setIsMobileOpen(false)}
              className={cn(
                'w-full text-center font-body font-semibold',
                'bg-gold-gradient text-brand-dark',
                'py-3 px-6 rounded-xl shadow-warm-md',
                'transition-transform transition-opacity duration-200',
                'hover:brightness-105 active:scale-[0.97]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary'
              )}
            >
              Book a Ride
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

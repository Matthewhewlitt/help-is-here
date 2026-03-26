import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react'
import { cn } from '../lib/utils'

const navLinks = [
  { to: '/',             label: 'Home' },
  { to: '/about',        label: 'About' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact',      label: 'Contact & Booking' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main footer content */}
      <div className="container-wide py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center">
            <span className="font-display text-2xl font-bold text-brand-secondary">Help</span>
            <span className="font-display text-2xl font-bold text-white">&nbsp;is Here</span>
          </Link>
          <p className="font-body text-white/60 leading-body text-sm max-w-xs">
            Private door-to-door transportation for medical appointments, errands,
            social outings, and more across Southern Ontario. Run with care by Mariea Marton-Wiles.
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="font-body text-xs text-white/50">Available 7 days a week, by appointment</span>
          </div>
        </div>

        {/* Navigation column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-body text-xs font-semibold tracking-widest uppercase text-white/40">
            Navigation
          </h3>
          <nav className="flex flex-col gap-2.5">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={cn(
                  'font-body text-sm text-white/65',
                  'transition-opacity duration-200',
                  'hover:text-white active:opacity-70',
                  'focus-visible:outline-none focus-visible:text-brand-secondary'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-body text-xs font-semibold tracking-widest uppercase text-white/40">
            Get in Touch
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+17058880613"
              className="flex items-start gap-3 text-white/65 hover:text-white transition-opacity duration-200 active:opacity-70 group"
            >
              <Phone size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-brand-secondary" />
              <span className="font-body text-sm">705-888-0613</span>
            </a>
            <a
              href="mailto:marieamwiles@gmail.com"
              className="flex items-start gap-3 text-white/65 hover:text-white transition-opacity duration-200 active:opacity-70"
            >
              <Mail size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-brand-secondary" />
              <span className="font-body text-sm break-all">marieamwiles@gmail.com</span>
            </a>
            <div className="flex items-start gap-3 text-white/50">
              <MapPin size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-brand-secondary" />
              <span className="font-body text-sm">Collingwood, ON L9Y 5N7</span>
            </div>
            <div className="flex items-start gap-3 text-white/50">
              <Clock size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-brand-secondary" />
              <span className="font-body text-sm">Mon – Sun, by appointment<br />Flexible hours to fit your needs</span>
            </div>
            <div className="flex items-start gap-3 text-white/50">
              <Globe size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-brand-secondary" />
              <span className="font-body text-sm">English · Deutsch · Magyar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-white/35">
            © {year} Help is Here. All rights reserved. Collingwood, Ontario, Canada.
          </p>
          <p className="font-body text-xs text-white/35">
            Serving Southern Ontario within 300&nbsp;km of Collingwood
          </p>
        </div>
      </div>
    </footer>
  )
}

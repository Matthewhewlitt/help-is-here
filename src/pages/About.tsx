import { Link } from 'react-router-dom'
import {
  Heart, Globe, Shield, Clock, Car, CheckCircle,
  HeartHandshake, ArrowRight,
} from 'lucide-react'
import { cn } from '../lib/utils'

// ─── Values ──────────────────────────────────────────────────────────────────
const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    body: 'Every client is treated with dignity, patience, and genuine care. We understand that needing a ride can sometimes feel vulnerable — we make sure it never does. (placeholder)',
  },
  {
    icon: Shield,
    title: 'Reliability You Can Count On',
    body: "When your appointment is at 9am, we're at your door early. Dependability isn't optional — it's the foundation of everything we do. (placeholder)",
  },
  {
    icon: Clock,
    title: 'Flexible & Responsive',
    body: "Life doesn't keep business hours. We work around your schedule, your medical needs, and your personal circumstances to make transportation as easy as possible. (placeholder)",
  },
  {
    icon: Globe,
    title: 'Inclusive Communication',
    body: 'We proudly serve clients in English, German, and Hungarian. Language should never be a barrier to getting the help you need. (placeholder)',
  },
]

// ─── Languages ────────────────────────────────────────────────────────────────
const languages = [
  { name: 'English',   native: 'English',   flag: '🇨🇦' },
  { name: 'German',    native: 'Deutsch',   flag: '🇩🇪' },
  { name: 'Hungarian', native: 'Magyar',    flag: '🇭🇺' },
]

// ─── Service area regions ────────────────────────────────────────────────────
const regions = [
  { region: 'Collingwood & Area',   places: ['Collingwood', 'Clearview', 'Wasaga Beach', 'Blue Mountain'] },
  { region: 'Grey County',          places: ['Owen Sound', 'Meaford', 'Grey County (south of Owen Sound)'] },
  { region: 'Simcoe County',        places: ['Barrie', 'Simcoe County'] },
  { region: 'Southern Ontario',     places: ['London', 'Toronto-area airports', 'Custom destinations'] },
]

// ─── Accessibility features ──────────────────────────────────────────────────
const accessibilityFeatures = [
  'Collapsible wheelchair accommodation',
  'Walker-friendly vehicle',
  'Caregiver may accompany client at no extra charge',
  'Patient, unhurried assistance getting in and out',
  'Flexible timing around your appointment schedule',
]

export default function About() {
  return (
    <>
      {/* ════ PAGE HERO ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-hero-gradient overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-primary-light/20 blur-3xl -translate-y-1/3 translate-x-1/3" />
        </div>
        <div className="container-wide relative z-10">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-secondary mb-4">
            Our Story
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-display leading-display mb-5 text-balance max-w-2xl">
            About{' '}
            <span className="text-brand-secondary italic">Help is Here</span>
          </h1>
          <p className="font-body text-lg text-white/65 leading-body max-w-xl">
            A small, personal, owner-operated business rooted in the belief that
            everyone deserves safe, dignified transportation — regardless of age,
            ability, or circumstance.
          </p>
        </div>
      </section>

      {/* ════ MARIEA'S STORY ══════════════════════════════════════════════════ */}
      <section className="section-pad bg-warm-gradient">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Text */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark tracking-heading leading-display">
                Meet Mariea<br />
                <span className="text-brand-primary">Marton-Wiles</span>
              </h2>
              <p className="font-body text-brand-muted leading-body">
                Help is Here was founded by <strong className="text-brand-dark font-semibold">Mariea Marton-Wiles</strong>,
                a Collingwood resident who saw a gap in the community: people who needed
                transportation to medical appointments, errands, or social outings, but
                didn't have access to a reliable, personal service that treated them with
                warmth and respect. <span className="text-brand-muted text-xs">(placeholder)</span>
              </p>
              <p className="font-body text-brand-muted leading-body">
                What began as a response to a real community need has grown into a
                trusted resource for individuals across Collingwood and Southern Ontario.
                Mariea personally handles every ride — there are no anonymous drivers,
                no app-dispatched strangers. Just one dedicated person who genuinely
                cares about getting you where you need to go. <span className="text-brand-muted text-xs">(placeholder)</span>
              </p>
              <p className="font-body text-brand-muted leading-body">
                Fluent in <strong className="text-brand-dark font-semibold">English, German, and Hungarian</strong>,
                Mariea is uniquely positioned to serve Collingwood's diverse community,
                including many residents for whom English is not their first language. <span className="text-brand-muted text-xs">(placeholder)</span>
              </p>
              <div className={cn(
                'flex flex-col gap-3 p-6 rounded-2xl mt-2',
                'bg-brand-primary/5 border border-brand-primary/12'
              )}>
                <p className="font-display text-lg font-semibold text-brand-dark italic leading-display">
                  "I started this service because I saw how isolating it can be to lose
                  access to transportation. Nobody should have to miss a doctor's appointment
                  because they couldn't find a ride." <span className="font-body font-normal not-italic text-xs text-brand-muted">(placeholder)</span>
                </p>
                <p className="font-body text-brand-muted text-sm font-medium">
                  — Mariea Marton-Wiles, Founder
                </p>
              </div>
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-5">

              {/* Business details card */}
              <div className={cn(
                'p-7 rounded-2xl',
                'bg-card-gradient border border-brand-primary/8 shadow-brand-md'
              )}>
                <h3 className="font-display text-xl font-bold text-brand-dark mb-5 tracking-heading">
                  Business at a Glance
                </h3>
                <div className="flex flex-col gap-3.5">
                  {[
                    { label: 'Based in',       value: 'Collingwood, ON' },
                    { label: 'Service radius', value: '300 km from Collingwood' },
                    { label: 'Hours',          value: 'Monday – Sunday, by appointment' },
                    { label: 'Languages',      value: 'English, German, Hungarian' },
                    { label: 'Operated by',    value: 'Mariea Marton-Wiles (Owner)' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-0.5 py-2.5 border-b border-brand-primary/8 last:border-0">
                      <span className="font-body text-xs font-semibold uppercase tracking-widest text-brand-muted">
                        {label}
                      </span>
                      <span className="font-body text-brand-dark font-medium text-sm">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages card */}
              <div className={cn(
                'p-7 rounded-2xl',
                'bg-brand-primary text-white shadow-brand-md'
              )}>
                <div className="flex items-center gap-3 mb-5">
                  <Globe size={20} className="text-brand-secondary" strokeWidth={1.75} />
                  <h3 className="font-display text-xl font-bold tracking-heading">
                    Languages Served
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {languages.map(({ name, native, flag }) => (
                    <div key={name} className="flex items-center gap-3 py-2 border-b border-white/10 last:border-0">
                      <span className="text-2xl">{flag}</span>
                      <div>
                        <p className="font-body font-semibold text-white text-sm">{name}</p>
                        <p className="font-body text-white/50 text-xs">{native}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-body text-white/50 text-xs mt-5 leading-body">
                  Language should never be a barrier to getting the care and
                  transportation you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ OUR VALUES ══════════════════════════════════════════════════════ */}
      <section className="relative bg-dark-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-brand-primary-light/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="section-pad container-wide relative z-10">
          <div className="text-center mb-14">
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-secondary mb-3">
              What Guides Us
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-heading">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className={cn(
                  'flex gap-5 p-7 rounded-2xl',
                  'bg-white/5 border border-white/10',
                  'transition-transform transition-opacity duration-300',
                  'hover:bg-white/8 hover:-translate-y-0.5'
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={22} className="text-brand-secondary" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 tracking-heading">
                    {title}
                  </h3>
                  <p className="font-body text-white/55 text-sm leading-body">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ ACCESSIBILITY ═══════════════════════════════════════════════════ */}
      <section className="section-pad bg-warm-gradient">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Accessibility info */}
            <div className={cn(
              'p-8 rounded-3xl',
              'bg-card-gradient border border-brand-primary/8 shadow-brand-md'
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-secondary/15 flex items-center justify-center shrink-0">
                  <HeartHandshake size={24} className="text-brand-secondary" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-dark tracking-heading">
                  Accessibility
                </h3>
              </div>
              <p className="font-body text-brand-muted text-sm leading-body mb-6">
                Help is Here is <strong className="text-brand-dark font-semibold">partially accessible</strong> and
                designed to serve clients with mobility challenges. We go above and
                beyond to make every ride comfortable and stress-free.
              </p>
              <div className="flex flex-col gap-2.5">
                {accessibilityFeatures.map(feature => (
                  <div key={feature} className="flex items-start gap-3 py-2 border-b border-brand-primary/8 last:border-0">
                    <CheckCircle size={16} className="text-brand-secondary shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="font-body text-brand-dark text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark tracking-heading leading-display">
                Your Comfort<br />
                <span className="text-brand-primary">Is Our Priority.</span>
              </h2>
              <p className="font-body text-brand-muted leading-body">
                Whether you use a walker, require extra time getting in and out of the
                vehicle, or would like a caregiver to accompany you, Help is Here is
                set up to accommodate your needs without making you feel like a burden.
              </p>
              <p className="font-body text-brand-muted leading-body">
                We ask that you please let us know about your specific needs when
                booking so we can ensure the most comfortable and safe experience
                possible. There's no additional charge for caregiver accompaniment.
              </p>
              <Link
                to="/contact"
                className={cn(
                  'self-start inline-flex items-center gap-2 font-body font-semibold text-sm',
                  'bg-gold-gradient text-brand-dark',
                  'h-11 px-6 rounded-xl shadow-warm-md',
                  'transition-transform transition-opacity duration-200',
                  'hover:brightness-105 active:scale-[0.97]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2'
                )}
              >
                Discuss Your Needs
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SERVICE AREA DETAIL ══════════════════════════════════════════════ */}
      <section className="section-pad bg-surface-gradient">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-secondary mb-3">
              Where We Go
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark tracking-heading">
              Service Area
            </h2>
            <p className="font-body text-brand-muted text-lg leading-body max-w-xl mx-auto mt-4">
              We travel up to 300 km from Collingwood, covering the following regions
              and beyond. Contact us if you don't see your location listed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {regions.map(({ region, places }) => (
              <div
                key={region}
                className={cn(
                  'p-6 rounded-2xl',
                  'bg-card-gradient border border-brand-primary/8 shadow-card',
                  'transition-transform transition-opacity duration-200',
                  'hover:-translate-y-0.5 hover:shadow-card-hover'
                )}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Car size={16} className="text-brand-secondary shrink-0" strokeWidth={2} />
                  <h3 className="font-display text-base font-bold text-brand-dark tracking-heading">
                    {region}
                  </h3>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {places.map(place => (
                    <li key={place} className="flex items-center gap-2 text-brand-muted text-sm font-body">
                      <span className="w-1 h-1 rounded-full bg-brand-secondary shrink-0" />
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CTA ═════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-warm-gradient">
        <div className="container-wide text-center flex flex-col items-center gap-5">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark tracking-heading">
            Ready to Ride With Us?
          </h2>
          <p className="font-body text-brand-muted text-lg leading-body max-w-md">
            Booking is simple. Call us or use our online form and we'll take care of everything.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Link
              to="/contact"
              className={cn(
                'inline-flex items-center gap-2 font-body font-semibold',
                'bg-gold-gradient text-brand-dark',
                'h-12 px-7 rounded-xl shadow-warm-md',
                'transition-transform transition-opacity duration-200',
                'hover:brightness-105 active:scale-[0.97]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2'
              )}
            >
              Book a Ride
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <a
              href="tel:+17058880613"
              className={cn(
                'inline-flex items-center gap-2 font-body font-semibold',
                'border-2 border-brand-primary text-brand-primary',
                'h-12 px-7 rounded-xl',
                'transition-transform transition-opacity duration-200',
                'hover:bg-brand-primary hover:text-white active:scale-[0.97]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2'
              )}
            >
              Call 705-888-0613
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

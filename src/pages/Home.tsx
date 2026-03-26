import { Link } from 'react-router-dom'
import {
  Car, Stethoscope, ShoppingBag, Plane, Users,
  CheckCircle, MapPin, ArrowRight, Calendar, Shield,
  Globe, HeartHandshake,
} from 'lucide-react'
import { cn } from '../lib/utils'

// ─── Wave divider ────────────────────────────────────────────────────────────
function WaveDown({ fill }: { fill: string }) {
  return (
    <div className="w-full overflow-hidden leading-[0] -mb-px">
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full h-[72px]">
        <path
          d="M0 72L60 62C120 52 240 32 360 27C480 22 600 32 720 38.7C840 45 960 49 1080 47C1200 45 1320 39 1380 36L1440 33V72H0Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

function WaveUp({ fill }: { fill: string }) {
  return (
    <div className="w-full overflow-hidden leading-[0] -mt-px">
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full h-[72px]">
        <path
          d="M0 33L60 36C120 39 240 45 360 47C480 49 600 45 720 38.7C840 32 960 22 1080 27C1200 32 1320 52 1380 62L1440 72V0H0Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

// ─── Services data ────────────────────────────────────────────────────────────
const services = [
  {
    icon: Stethoscope,
    title: 'Medical Transportation',
    description:
      'Reliable rides to hospitals, specialist clinics, dialysis, and non-emergency medical appointments throughout Southern Ontario.',
    highlight: 'Most requested service (placeholder)',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping & Errands',
    description:
      'Flat-rate 4-hour local block for grocery runs, pharmacy pickups, banking, and everyday errands around Collingwood.',
    highlight: '$100 / 4-hr block',
  },
  {
    icon: Users,
    title: 'Social Outings',
    description:
      "Stay connected with family, friends, and community. We'll get you to visits, events, recreational activities, and more.",
    highlight: 'Stay engaged',
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description:
      'Stress-free door-to-door airport transportation for departures and arrivals. Punctual, comfortable, and professionally handled.',
    highlight: 'Stress-free travel',
  },
]

// ─── Why choose us data ───────────────────────────────────────────────────────
const features = [
  {
    icon: Car,
    title: 'True Door-to-Door',
    body: 'We come directly to your home and take you right to your destination — no parking lots, no transfers, no stress.',
  },
  {
    icon: Calendar,
    title: '7 Days a Week',
    body: 'Available Monday through Sunday by appointment with flexible scheduling to fit your medical or personal needs.',
  },
  {
    icon: Shield,
    title: 'Accessibility Ready',
    body: 'Our vehicle comfortably accommodates collapsible wheelchairs and walkers. Caregivers are always welcome to travel along.',
  },
  {
    icon: Globe,
    title: 'Multilingual Service',
    body: 'Serving clients in English, German (Deutsch), and Hungarian (Magyar) — so you can always communicate comfortably.',
  },
]

// ─── Destinations ─────────────────────────────────────────────────────────────
const destinations = [
  'Owen Sound', 'Barrie', 'London', 'Wasaga Beach',
  'Meaford', 'Blue Mountain', 'Clearview', 'Simcoe County',
  'Grey County', 'Collingwood & area',
]

// ─── Component ───────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ════ HERO ════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">

        {/* Background decoration: large soft circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-primary-light/20 blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-brand-primary-dark/40 blur-3xl" />
        </div>

        <div className="container-wide relative z-10 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className={cn(
                'flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase',
                'bg-brand-secondary/15 text-brand-secondary-light',
                'border border-brand-secondary/30 rounded-full px-4 py-1.5'
              )}>
                <MapPin size={11} strokeWidth={2.5} />
                Collingwood &amp; Southern Ontario
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-display tracking-display text-balance">
              Getting There,{' '}
              <span className="text-brand-secondary italic">Together.</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg text-white/70 leading-body max-w-lg">
              Private door-to-door transportation for medical appointments, errands,
              social outings, and airport transfers. Serving Collingwood and Southern
              Ontario — 7 days a week.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                to="/contact"
                className={cn(
                  'inline-flex items-center gap-2 font-body font-semibold text-base',
                  'bg-gold-gradient text-brand-dark',
                  'h-[52px] px-7 rounded-xl shadow-warm-lg',
                  'transition-transform transition-opacity duration-200',
                  'hover:brightness-105 active:scale-[0.97]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2'
                )}
              >
                Book Your Ride
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
              <Link
                to="/about"
                className={cn(
                  'inline-flex items-center gap-2 font-body font-semibold text-base',
                  'border-2 border-white/50 text-white bg-transparent',
                  'h-[52px] px-7 rounded-xl',
                  'transition-transform transition-opacity duration-200',
                  'hover:bg-white/12 hover:border-white active:scale-[0.97]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50'
                )}
              >
                Learn More
              </Link>
            </div>

            {/* Phone number */}
            <a
              href="tel:+17058880613"
              className="inline-flex items-center gap-2 self-start text-white/55 hover:text-white/90 transition-opacity duration-200 font-body text-sm mt-1"
            >
              Call us: <span className="font-semibold text-white/80">705-888-0613</span>
            </a>
          </div>

          {/* Right: floating stat cards */}
          <div className="hidden lg:flex justify-center items-center relative h-[380px]">

            {/* Main card */}
            <div className={cn(
              'absolute top-0 left-8',
              'bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 w-64',
              'shadow-brand-xl'
            )}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-secondary/20 flex items-center justify-center shrink-0">
                  <Calendar size={20} className="text-brand-secondary" />
                </div>
                <span className="font-body text-white/60 text-sm">Availability</span>
              </div>
              <p className="font-display text-white text-2xl font-bold leading-display">
                7 Days a Week
              </p>
              <p className="font-body text-white/50 text-sm mt-1.5">
                By appointment — flexible hours
              </p>
            </div>

            {/* Radius badge */}
            <div className={cn(
              'absolute bottom-8 right-4',
              'bg-gold-gradient rounded-2xl p-5 text-brand-dark',
              'shadow-warm-lg'
            )}>
              <p className="font-display text-4xl font-bold leading-none">300</p>
              <p className="font-body text-sm font-semibold mt-1">km&nbsp;service radius</p>
            </div>

            {/* Language badge */}
            <div className={cn(
              'absolute top-8 right-0',
              'bg-brand-primary/70 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3',
              'shadow-brand-md'
            )}>
              <p className="font-body text-white text-xs font-medium">
                English · Deutsch · Magyar
              </p>
            </div>

            {/* Accessibility badge */}
            <div className={cn(
              'absolute bottom-20 left-0',
              'bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3',
              'shadow-brand-sm'
            )}>
              <div className="flex items-center gap-2">
                <HeartHandshake size={16} className="text-brand-secondary-light shrink-0" />
                <p className="font-body text-white/80 text-xs font-medium">
                  Wheelchair &amp; Walker Friendly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDown fill="#F6F2EC" />
        </div>
      </section>

      {/* ════ SERVICES ════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-warm-gradient">
        <div className="container-wide">

          {/* Section header */}
          <div className="text-center mb-14">
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-secondary mb-3">
              What We Offer
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark tracking-heading mb-4">
              How We Help
            </h2>
            <p className="font-body text-brand-muted text-lg leading-body max-w-2xl mx-auto">
              From routine errands to long-distance medical trips, we provide safe,
              comfortable, and dependable transportation across Southern Ontario.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, description, highlight }) => (
              <div
                key={title}
                className={cn(
                  'group relative flex flex-col gap-4 p-7 rounded-2xl',
                  'bg-card-gradient border border-brand-primary/8',
                  'shadow-card',
                  'transition-transform transition-opacity duration-300',
                  'hover:-translate-y-1 hover:shadow-card-hover'
                )}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-primary/8 flex items-center justify-center shrink-0">
                  <Icon size={24} className="text-brand-primary" strokeWidth={1.75} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-bold text-brand-dark tracking-heading">
                    {title}
                  </h3>
                  <p className="font-body text-brand-muted leading-body text-sm">
                    {description}
                  </p>
                </div>

                {/* Highlight pill */}
                <span className={cn(
                  'self-start font-body text-xs font-semibold',
                  'bg-brand-secondary/12 text-brand-secondary border border-brand-secondary/25',
                  'rounded-full px-3 py-1'
                )}>
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ WHY CHOOSE US ═══════════════════════════════════════════════════ */}
      <section className="relative bg-dark-gradient overflow-hidden">
        <WaveUp fill="#ECE7DF" />
        <div className="section-pad">
          <div className="container-wide">

            {/* Section header */}
            <div className="text-center mb-14">
              <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-secondary mb-3">
                Why Clients Choose Us
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-heading mb-4">
                More Than a Ride
              </h2>
              <p className="font-body text-white/60 text-lg leading-body max-w-2xl mx-auto">
                Help is Here is built on trust, flexibility, and personal care — because
                getting where you need to go should never feel like a burden.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className={cn(
                    'flex flex-col gap-4 p-6 rounded-2xl',
                    'bg-white/5 border border-white/10',
                    'transition-transform transition-opacity duration-300',
                    'hover:bg-white/8 hover:-translate-y-0.5'
                  )}
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-secondary/15 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-brand-secondary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white mb-2 tracking-heading">
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
        </div>
        <WaveDown fill="#F6F2EC" />
      </section>

      {/* ════ SERVICE AREA ════════════════════════════════════════════════════ */}
      <section className="section-pad bg-surface-gradient">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <div className="flex flex-col gap-5">
              <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-secondary">
                Coverage Area
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark tracking-heading leading-display">
                We Come to You,<br />
                <span className="text-brand-primary">Wherever You Are.</span>
              </h2>
              <p className="font-body text-brand-muted leading-body">
                Based in Collingwood, we travel within a{' '}
                <strong className="text-brand-dark font-semibold">300 km radius</strong> — covering
                most of Southern Ontario including Grey and Simcoe counties. Whether
                you need a ride across town or across the region, we've got you covered.
              </p>
              <p className="font-body text-brand-muted leading-body text-sm">
                All bookings include a return trip for the driver.
                Contact us for a custom quote on longer journeys.
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
                Get a Quote
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Destinations */}
            <div className={cn(
              'rounded-3xl p-8',
              'bg-card-gradient border border-brand-primary/8 shadow-brand-md'
            )}>
              <p className="font-display text-xl font-bold text-brand-dark mb-6 tracking-heading">
                Key Destinations Served
              </p>
              <div className="flex flex-col gap-3">
                {destinations.map(dest => (
                  <div
                    key={dest}
                    className="flex items-center gap-3 py-2 border-b border-brand-primary/8 last:border-0"
                  >
                    <CheckCircle size={16} className="text-brand-secondary shrink-0" strokeWidth={2} />
                    <span className="font-body text-brand-dark text-sm font-medium">{dest}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-brand-muted text-xs mt-5 leading-body">
                Don't see your location? <Link to="/contact" className="text-brand-primary underline hover:text-brand-primary-light transition-opacity duration-200">Ask us</Link> — we likely cover it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ PRICING OVERVIEW ════════════════════════════════════════════════ */}
      <section className="section-pad bg-warm-gradient">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-secondary mb-3">
              Transparent Pricing
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark tracking-heading">
              Simple, Honest Rates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* Local rate card */}
            <div className={cn(
              'relative flex flex-col gap-5 p-8 rounded-3xl overflow-hidden',
              'bg-brand-primary text-white shadow-brand-lg'
            )}>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-brand-primary-light/30 -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
              <p className="font-body text-white/60 text-sm font-medium uppercase tracking-widest">
                Local Errands &amp; Shopping
              </p>
              <div className="flex items-end gap-2">
                <span className="font-display text-5xl font-bold text-brand-secondary">$100</span>
                <span className="font-body text-white/60 text-sm pb-1.5">/ 4-hour block</span>
              </div>
              <ul className="flex flex-col gap-2 text-sm font-body text-white/70">
                {['Flat rate, no surprises', 'Grocery, pharmacy, banking & more', 'Up to 4 hours of assistance', 'Within Collingwood area'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-secondary shrink-0" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={cn(
                  'mt-auto inline-flex items-center justify-center gap-2 font-body font-semibold text-sm',
                  'bg-gold-gradient text-brand-dark',
                  'h-11 px-6 rounded-xl shadow-warm-md',
                  'transition-transform transition-opacity duration-200',
                  'hover:brightness-105 active:scale-[0.97]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2'
                )}
              >
                Book a Local Trip
              </Link>
            </div>

            {/* Custom rate card */}
            <div className={cn(
              'flex flex-col gap-5 p-8 rounded-3xl',
              'bg-card-gradient border border-brand-primary/10 shadow-card'
            )}>
              <p className="font-body text-brand-muted text-sm font-medium uppercase tracking-widest">
                Longer Distances
              </p>
              <div className="flex items-end gap-2">
                <span className="font-display text-5xl font-bold text-brand-primary">Custom</span>
              </div>
              <p className="font-body text-brand-muted text-sm leading-body">
                Starting from <strong className="text-brand-dark">$25/hour + fuel</strong> for
                trips beyond Collingwood. Medical appointments to Barrie, Owen Sound, London,
                and beyond — contact us for an accurate quote.
              </p>
              <ul className="flex flex-col gap-2 text-sm font-body text-brand-muted">
                {['300 km service radius', 'Medical & personal appointments', 'Airport transfers', 'Caregiver accompaniment welcome'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-brand-secondary shrink-0" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={cn(
                  'mt-auto inline-flex items-center justify-center gap-2 font-body font-semibold text-sm',
                  'border-2 border-brand-primary text-brand-primary',
                  'h-11 px-6 rounded-xl',
                  'transition-transform transition-opacity duration-200',
                  'hover:bg-brand-primary hover:text-white active:scale-[0.97]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2'
                )}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════ CTA BANNER ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gold-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-brand-dark/10 blur-2xl" />
        </div>
        <div className="container-wide relative py-20 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark tracking-heading leading-display">
              Ready to Book Your Ride?
            </h2>
            <p className="font-body text-brand-dark/70 text-base leading-body">
              Call or fill out the booking form — we'll take care of the rest.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:+17058880613"
              className={cn(
                'inline-flex items-center justify-center gap-2 font-body font-semibold',
                'bg-brand-dark text-white',
                'h-12 px-7 rounded-xl shadow-brand-md',
                'transition-transform transition-opacity duration-200',
                'hover:bg-brand-primary active:scale-[0.97]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2'
              )}
            >
              705-888-0613
            </a>
            <Link
              to="/contact"
              className={cn(
                'inline-flex items-center justify-center gap-2 font-body font-semibold',
                'border-2 border-brand-dark/30 text-brand-dark bg-white/20',
                'h-12 px-7 rounded-xl',
                'transition-transform transition-opacity duration-200',
                'hover:bg-brand-dark/10 hover:border-brand-dark/50 active:scale-[0.97]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2'
              )}
            >
              Online Booking Form
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { Star, Quote, ArrowRight, MessageSquarePlus } from 'lucide-react'
import { cn } from '../lib/utils'

// ─── Testimonial data ─────────────────────────────────────────────────────────
// Note: These are placeholder testimonials — replace with real client reviews.
const testimonials = [
  {
    name:     'Margaret T.',
    location: 'Collingwood, ON',
    service:  'Medical Transportation',
    rating:   5,
    text:     'Mariea has been an absolute lifesaver for my mother\'s weekly dialysis appointments. She\'s always punctual, endlessly patient, and treats my mom with such genuine kindness. We couldn\'t manage without Help is Here — it\'s made an enormous difference to our family. (placeholder)',
    initials: 'MT',
  },
  {
    name:     'Hans K.',
    location: 'Wasaga Beach, ON',
    service:  'Social Outings',
    rating:   5,
    text:     'Als jemand der auch Deutsch spricht, war es wunderbar mit Mariea zu arbeiten. Sie ist äußerst zuverlässig und macht jeden Ausflug angenehm. Sehr empfehlenswert! (It was wonderful working with Mariea — her German is excellent, and she made every trip easy and enjoyable.) (placeholder)',
    initials: 'HK',
  },
  {
    name:     'Dorothy M.',
    location: 'Collingwood, ON',
    service:  'Medical Transportation',
    rating:   5,
    text:     'I was so nervous about finding reliable transport to my specialist in Barrie, but Help is Here made the whole experience completely stress-free. Mariea waited during my appointment and had me home safely. I couldn\'t ask for more. (placeholder)',
    initials: 'DM',
  },
  {
    name:     'Robert & Linda F.',
    location: 'The Blue Mountains, ON',
    service:  'Shopping & Errands',
    rating:   5,
    text:     'We use Help is Here for our weekly grocery runs and pharmacy trips. Mariea is incredibly accommodating and always goes above and beyond. Having someone trustworthy who can also handle my walker has made all the difference — we feel safe every time. (placeholder)',
    initials: 'RF',
  },
  {
    name:     'Erzsébet V.',
    location: 'Collingwood, ON',
    service:  'Medical Transportation',
    rating:   5,
    text:     'Mariea segítségével eljutok orvoshoz és a gyógyszertárba is. Nagyon megbízható és kedves. Magyar anyanyelvűként különösen örülök, hogy anyanyelvemen is kommunikálhatok. (Mariea helps me get to the doctor and pharmacy. Very reliable and kind. I especially appreciate being able to speak in Hungarian.) (placeholder)',
    initials: 'EV',
  },
  {
    name:     'Catherine B.',
    location: 'Owen Sound, ON',
    service:  'Airport Transfer',
    rating:   5,
    text:     'I needed a ride to Toronto Pearson at 5am and Mariea was there right on time, relaxed and professional. The drive was comfortable and I made my flight without any stress. Would absolutely use Help is Here again for airport trips. (placeholder)',
    initials: 'CB',
  },
]

// ─── Star component ──────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={0}
          fill={i < rating ? '#D9782A' : '#D1D5DB'}
          className="shrink-0"
        />
      ))}
    </div>
  )
}

// ─── Testimonial card ────────────────────────────────────────────────────────
function TestimonialCard({ name, location, service, rating, text, initials }: typeof testimonials[0]) {
  return (
    <div className={cn(
      'group relative flex flex-col gap-5 p-7 rounded-2xl',
      'bg-card-gradient border border-brand-primary/8',
      'shadow-card',
      'transition-transform transition-opacity duration-300',
      'hover:-translate-y-1 hover:shadow-card-hover'
    )}>
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote size={40} className="text-brand-primary" strokeWidth={1} />
      </div>

      {/* Header */}
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className={cn(
          'w-12 h-12 rounded-full flex items-center justify-center shrink-0',
          'bg-brand-primary text-white',
          'font-display font-bold text-base'
        )}>
          {initials}
        </div>

        <div className="flex flex-col gap-1 min-w-0">
          <p className="font-body font-semibold text-brand-dark text-sm">{name}</p>
          <p className="font-body text-brand-muted text-xs">{location}</p>
          <Stars rating={rating} />
        </div>
      </div>

      {/* Text */}
      <p className="font-body text-brand-dark/80 text-sm leading-body italic flex-1">
        "{text}"
      </p>

      {/* Service badge */}
      <span className={cn(
        'self-start font-body text-xs font-semibold',
        'bg-brand-secondary/12 text-brand-secondary border border-brand-secondary/25',
        'rounded-full px-3 py-1'
      )}>
        {service}
      </span>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <>
      {/* ════ PAGE HERO ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-hero-gradient overflow-hidden pt-32 pb-24">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-brand-primary-light/20 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="container-wide relative z-10">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-secondary mb-4">
            Client Experiences
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-display leading-display mb-4 text-balance">
            What Our Clients{' '}
            <span className="text-brand-secondary italic">Are Saying</span>
          </h1>
          <p className="font-body text-lg text-white/65 leading-body max-w-xl">
            Real people, real trips, real care. Here's what clients and their
            families have shared about their experience with Help is Here.
          </p>
        </div>
      </section>

      {/* ════ STATS STRIP ════════════════════════════════════════════════════ */}
      <section className="bg-brand-primary">
        <div className="container-wide py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '7',    suffix: ' days',   label: 'Available every week' },
              { value: '300',  suffix: ' km',     label: 'Service radius' },
              { value: '3',    suffix: '',         label: 'Languages served' },
              { value: '100%', suffix: '',         label: 'Door-to-door, every trip' },
            ].map(({ value, suffix, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <p className="font-display text-3xl sm:text-4xl font-bold text-brand-secondary">
                  {value}<span className="text-2xl">{suffix}</span>
                </p>
                <p className="font-body text-white/60 text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS GRID ═══════════════════════════════════════════════ */}
      <section className="section-pad bg-warm-gradient">
        <div className="container-wide">

          {/* Disclosure note */}
          <div className={cn(
            'flex items-start gap-3 p-4 rounded-xl mb-10',
            'bg-brand-secondary/8 border border-brand-secondary/20'
          )}>
            <Star size={15} className="text-brand-secondary shrink-0 mt-0.5" strokeWidth={2} />
            <p className="font-body text-brand-dark/70 text-xs leading-body">
              The following testimonials represent experiences shared by clients and their families.
              Have you used our service? We'd love to hear from you — your feedback helps others
              in the community find the transportation support they need.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ════ LEAVE A REVIEW CTA ══════════════════════════════════════════════ */}
      <section className="section-pad bg-surface-gradient">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Text */}
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-brand-secondary/15 flex items-center justify-center">
                <MessageSquarePlus size={24} className="text-brand-secondary" strokeWidth={1.75} />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark tracking-heading leading-display">
                Share Your{' '}
                <span className="text-brand-primary">Experience</span>
              </h2>
              <p className="font-body text-brand-muted leading-body">
                Have you used Help is Here? Your review helps others in the Collingwood
                community find the transportation support they need. It also means the
                world to Mariea and helps this small, local business grow.
              </p>
              <p className="font-body text-brand-muted text-sm leading-body">
                Even a few words go a long way. Thank you for sharing.
              </p>
            </div>

            {/* Review options */}
            <div className={cn(
              'p-8 rounded-3xl flex flex-col gap-6',
              'bg-card-gradient border border-brand-primary/8 shadow-brand-md'
            )}>
              <h3 className="font-display text-xl font-bold text-brand-dark tracking-heading">
                Leave a Review
              </h3>

              <div className="flex flex-col gap-3">
                {[
                  {
                    platform: 'Email Mariea Directly',
                    desc:     'Send your feedback straight to the owner',
                    href:     'mailto:marieamwiles@gmail.com?subject=Feedback for Help is Here',
                    cta:      'Send Feedback',
                  },
                  {
                    platform: 'Call to Provide Feedback',
                    desc:     'Prefer to chat? Give us a call',
                    href:     'tel:+17058880613',
                    cta:      '705-888-0613',
                  },
                ].map(({ platform, desc, href, cta }) => (
                  <a
                    key={platform}
                    href={href}
                    className={cn(
                      'flex items-center justify-between gap-4 p-5 rounded-xl',
                      'border border-brand-primary/10 bg-white/60',
                      'transition-transform transition-opacity duration-200',
                      'hover:border-brand-primary/25 hover:bg-white/80 hover:-translate-y-0.5',
                      'active:scale-[0.98]',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2'
                    )}
                  >
                    <div>
                      <p className="font-body font-semibold text-brand-dark text-sm">{platform}</p>
                      <p className="font-body text-brand-muted text-xs mt-0.5">{desc}</p>
                    </div>
                    <div className={cn(
                      'shrink-0 inline-flex items-center gap-1.5 font-body font-semibold text-xs',
                      'bg-gold-gradient text-brand-dark',
                      'h-8 px-4 rounded-lg shadow-warm-sm'
                    )}>
                      {cta}
                      <ArrowRight size={12} strokeWidth={2.5} />
                    </div>
                  </a>
                ))}
              </div>

              <p className="font-body text-brand-muted text-xs leading-body">
                All feedback is welcomed and appreciated. Mariea reads every message personally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ BOOK CTA ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gold-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/15 blur-3xl" />
        </div>
        <div className="container-wide relative py-20 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark tracking-heading leading-display">
              Ready to Experience It for Yourself?
            </h2>
            <p className="font-body text-brand-dark/70 text-base leading-body">
              Book your first ride today. No commitment — just great service.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact"
              className={cn(
                'inline-flex items-center gap-2 font-body font-semibold',
                'bg-brand-dark text-white',
                'h-12 px-7 rounded-xl shadow-brand-md',
                'transition-transform transition-opacity duration-200',
                'hover:bg-brand-primary active:scale-[0.97]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2'
              )}
            >
              Book a Ride
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

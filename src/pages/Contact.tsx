import { useState, type FormEvent, type ChangeEvent } from 'react'
import {
  Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle,
  ArrowRight, Send, MessageCircle, CalendarCheck,
} from 'lucide-react'
import { cn } from '../lib/utils'

// ══════════════════════════════════════════════════════════════════════════════
// BOOKING FORM
// ══════════════════════════════════════════════════════════════════════════════

interface BookingFields {
  fullName:        string
  email:           string
  phone:           string
  language:        string
  languageOther:   string
  tripDate:        string
  pickupTime:      string
  tripType:        string
  tripTypeOther:   string
  pickupAddress:   string
  destination:     string
  returnTime:      string
  passengerCount:  string
  hasWalker:       boolean
  hasWheelchair:   boolean
  hasCaregiver:    boolean
  notes:           string
}

type BookingErrors = Partial<Record<keyof BookingFields, string>>

const initialBooking: BookingFields = {
  fullName:       '',
  email:          '',
  phone:          '',
  language:       'english',
  languageOther:  '',
  tripDate:       '',
  pickupTime:     '',
  tripType:       '',
  tripTypeOther:  '',
  pickupAddress:  '',
  destination:    '',
  returnTime:     '',
  passengerCount: '1',
  hasWalker:      false,
  hasWheelchair:  false,
  hasCaregiver:   false,
  notes:          '',
}

const tripTypes = [
  { value: 'medical',    label: 'Medical Appointment' },
  { value: 'shopping',   label: 'Shopping & Errands' },
  { value: 'social',     label: 'Social Outing' },
  { value: 'airport',    label: 'Airport Transfer' },
  { value: 'other',      label: 'Other' },
]

const languages = [
  { value: 'english',   label: 'English' },
  { value: 'german',    label: 'Deutsch (German)' },
  { value: 'hungarian', label: 'Magyar (Hungarian)' },
  { value: 'other',     label: 'Other' },
]

function validateBooking(f: BookingFields): BookingErrors {
  const errors: BookingErrors = {}
  if (!f.fullName.trim())       errors.fullName      = 'Your name is required.'
  if (!f.email.trim())          errors.email         = 'Email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
                                errors.email         = 'Please enter a valid email address.'
  if (!f.phone.trim())          errors.phone         = 'Phone number is required.'
  if (!f.tripDate)              errors.tripDate      = 'Trip date is required.'
  if (!f.tripType)              errors.tripType      = 'Please select a trip type.'
  if (f.tripType === 'other' && !f.tripTypeOther.trim())
                                errors.tripTypeOther = 'Please describe your trip type.'
  if (!f.pickupAddress.trim())  errors.pickupAddress = 'Pickup address is required.'
  if (!f.destination.trim())    errors.destination   = 'Destination is required.'
  if (f.language === 'other' && !f.languageOther.trim())
                                errors.languageOther = 'Please specify your preferred language.'
  return errors
}

// ══════════════════════════════════════════════════════════════════════════════
// QUESTION FORM
// ══════════════════════════════════════════════════════════════════════════════

interface QuestionFields {
  name:    string
  email:   string
  phone:   string
  subject: string
  message: string
}

type QuestionErrors = Partial<Record<keyof QuestionFields, string>>

const initialQuestion: QuestionFields = {
  name:    '',
  email:   '',
  phone:   '',
  subject: '',
  message: '',
}

const subjects = [
  { value: 'general',       label: 'General Inquiry' },
  { value: 'service-area',  label: 'Service Area Question' },
  { value: 'pricing',       label: 'Pricing Question' },
  { value: 'accessibility', label: 'Accessibility Question' },
  { value: 'booking-help',  label: 'Help With Booking' },
  { value: 'other',         label: 'Other' },
]

function validateQuestion(f: QuestionFields): QuestionErrors {
  const errors: QuestionErrors = {}
  if (!f.name.trim())    errors.name    = 'Your name is required.'
  if (!f.email.trim())   errors.email   = 'Email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
                         errors.email   = 'Please enter a valid email address.'
  if (!f.subject)        errors.subject = 'Please select a subject.'
  if (!f.message.trim()) errors.message = 'Please include your message.'
  return errors
}

// ══════════════════════════════════════════════════════════════════════════════
// SHARED FIELD COMPONENT
// ══════════════════════════════════════════════════════════════════════════════

function Field({
  label, required, error, children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body text-sm font-medium text-brand-dark">
        {label}
        {required && <span className="text-brand-accent ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 font-body text-xs text-red-600 mt-0.5">
          <AlertCircle size={12} strokeWidth={2.5} />
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = cn(
  'w-full h-11 px-4 rounded-xl font-body text-sm text-brand-dark',
  'bg-white border border-brand-primary/15',
  'transition-opacity duration-200',
  'placeholder:text-brand-muted-light',
  'hover:border-brand-primary/30',
  'focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15',
  'focus-visible:ring-2 focus-visible:ring-brand-primary/20'
)
const errorInputClass = 'border-red-400 focus:border-red-500 focus:ring-red-200'

// ══════════════════════════════════════════════════════════════════════════════
// PAGE
// ══════════════════════════════════════════════════════════════════════════════

export default function Contact() {
  const [activeForm, setActiveForm] = useState<'booking' | 'question'>('booking')

  // Booking form state
  const [booking, setBooking]           = useState<BookingFields>(initialBooking)
  const [bookingErrors, setBookingErrors] = useState<BookingErrors>({})
  const [bookingDone, setBookingDone]   = useState(false)

  // Question form state
  const [question, setQuestion]         = useState<QuestionFields>(initialQuestion)
  const [questionErrors, setQuestionErrors] = useState<QuestionErrors>({})
  const [questionDone, setQuestionDone] = useState(false)

  // ── Booking handlers ───────────────────────────────────────────────────────
  function handleBookingChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    setBooking(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (bookingErrors[name as keyof BookingFields]) {
      setBookingErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  function handleBookingSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validateBooking(booking)
    if (Object.keys(errs).length > 0) { setBookingErrors(errs); return }

    const langLabel = booking.language === 'other'
      ? booking.languageOther
      : languages.find(l => l.value === booking.language)?.label ?? booking.language

    const tripLabel = booking.tripType === 'other'
      ? booking.tripTypeOther
      : tripTypes.find(t => t.value === booking.tripType)?.label ?? booking.tripType

    const accessibility = [
      booking.hasWalker     && 'Walker required',
      booking.hasWheelchair && 'Collapsible wheelchair',
      booking.hasCaregiver  && 'Caregiver accompanying',
    ].filter(Boolean).join(', ') || 'None'

    const body = [
      `BOOKING REQUEST — Help is Here`,
      ``,
      `Name:           ${booking.fullName}`,
      `Email:          ${booking.email}`,
      `Phone:          ${booking.phone}`,
      `Language:       ${langLabel}`,
      ``,
      `Trip Date:      ${booking.tripDate}`,
      `Pickup Time:    ${booking.pickupTime || 'TBD'}`,
      `Trip Type:      ${tripLabel}`,
      `Return Time:    ${booking.returnTime || 'TBD'}`,
      ``,
      `Pickup Address: ${booking.pickupAddress}`,
      `Destination:    ${booking.destination}`,
      ``,
      `Passengers:     ${booking.passengerCount}`,
      `Accessibility:  ${accessibility}`,
      ``,
      `Notes:`,
      booking.notes || '(none)',
    ].join('\n')

    const subject = encodeURIComponent(`Booking Request — ${booking.fullName} — ${booking.tripDate}`)
    window.location.href = `mailto:marieamwiles@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`
    setBookingDone(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ── Question handlers ──────────────────────────────────────────────────────
  function handleQuestionChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setQuestion(prev => ({ ...prev, [name]: value }))
    if (questionErrors[name as keyof QuestionFields]) {
      setQuestionErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  function handleQuestionSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validateQuestion(question)
    if (Object.keys(errs).length > 0) { setQuestionErrors(errs); return }

    const subjectLabel = subjects.find(s => s.value === question.subject)?.label ?? question.subject

    const body = [
      `QUESTION / INQUIRY — Help is Here`,
      ``,
      `Name:    ${question.name}`,
      `Email:   ${question.email}`,
      `Phone:   ${question.phone || 'Not provided'}`,
      `Subject: ${subjectLabel}`,
      ``,
      `Message:`,
      question.message,
    ].join('\n')

    const subject = encodeURIComponent(`Question: ${subjectLabel} — ${question.name}`)
    window.location.href = `mailto:marieamwiles@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`
    setQuestionDone(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* ════ PAGE HERO ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-hero-gradient overflow-hidden pt-32 pb-20">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-primary-light/20 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="container-wide relative z-10">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-secondary mb-4">
            Get In Touch
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-display leading-display mb-4 text-balance">
            Contact &{' '}
            <span className="text-brand-secondary italic">Book a Ride</span>
          </h1>
          <p className="font-body text-lg text-white/65 leading-body max-w-xl">
            Fill out a booking request or send us a question — we'll get back to
            you promptly.
          </p>
        </div>
      </section>

      <section className="section-pad bg-warm-gradient">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Contact info sidebar ─────────────────────────────────────── */}
            <div className="flex flex-col gap-5 lg:col-span-1">

              <div className={cn(
                'p-7 rounded-2xl flex flex-col gap-5',
                'bg-brand-primary text-white shadow-brand-lg'
              )}>
                <h2 className="font-display text-2xl font-bold tracking-heading">Contact Info</h2>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: Phone, label: 'Call or Text', href: 'tel:+17058880613',
                      value: '705-888-0613',
                    },
                    {
                      icon: Mail, label: 'Email', href: 'mailto:marieamwiles@gmail.com',
                      value: 'marieamwiles@gmail.com',
                    },
                  ].map(({ icon: Icon, label, href, value }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-3 hover:text-brand-secondary-light transition-opacity duration-200 active:opacity-70 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-secondary/20 transition-opacity duration-200">
                        <Icon size={16} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="font-body text-xs text-white/50 uppercase tracking-widest mb-0.5">{label}</p>
                        <p className="font-body font-semibold text-sm break-all">{value}</p>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={16} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-body text-xs text-white/50 uppercase tracking-widest mb-0.5">Based In</p>
                      <p className="font-body font-semibold text-sm">Collingwood, ON L9Y 5N7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Clock size={16} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-body text-xs text-white/50 uppercase tracking-widest mb-0.5">Hours</p>
                      <p className="font-body font-semibold text-sm">7 days a week, by appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cn(
                'p-6 rounded-2xl flex flex-col gap-4',
                'bg-brand-secondary/10 border border-brand-secondary/25'
              )}>
                <h3 className="font-display text-lg font-bold text-brand-dark tracking-heading">Good to Know</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'All bookings include a return trip for the driver — no one-way trips.',
                    'Please be fully vaccinated. Masks may be required.',
                    'Caregivers are welcome to accompany clients at no extra charge.',
                    'We accept collapsible wheelchairs and walkers.',
                    'Contact us for a quote on trips over 4 hours or longer distances.',
                  ].map(note => (
                    <li key={note} className="flex items-start gap-2.5 text-brand-dark font-body text-xs leading-body">
                      <CheckCircle size={13} className="text-brand-secondary shrink-0 mt-0.5" strokeWidth={2.5} />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Forms area ───────────────────────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-0">

              {/* Tab switcher */}
              <div className={cn(
                'flex gap-1 p-1 rounded-2xl mb-6',
                'bg-brand-primary/6 border border-brand-primary/10'
              )}>
                {[
                  { id: 'booking',  label: 'Book a Ride',    icon: CalendarCheck },
                  { id: 'question', label: 'Ask a Question', icon: MessageCircle },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveForm(id as 'booking' | 'question')}
                    className={cn(
                      'flex-1 flex items-center justify-center gap-2',
                      'py-3 px-4 rounded-xl font-body font-semibold text-sm',
                      'transition-transform transition-opacity duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-1',
                      'active:scale-[0.98]',
                      activeForm === id
                        ? 'bg-brand-primary text-white shadow-brand-sm'
                        : 'text-brand-muted hover:text-brand-dark'
                    )}
                  >
                    <Icon size={15} strokeWidth={2} />
                    {label}
                  </button>
                ))}
              </div>

              {/* ── BOOKING FORM ── */}
              {activeForm === 'booking' && (
                bookingDone ? (
                  <SuccessCard
                    title="Booking Request Sent!"
                    body="Your email client has been opened with your booking details. Please send the email and Mariea will confirm your trip shortly."
                    onReset={() => { setBookingDone(false); setBooking(initialBooking) }}
                    resetLabel="Submit Another Booking"
                  />
                ) : (
                  <form
                    onSubmit={handleBookingSubmit}
                    noValidate
                    className={cn(
                      'p-8 rounded-3xl flex flex-col gap-7',
                      'bg-card-gradient border border-brand-primary/8 shadow-brand-md'
                    )}
                  >
                    <h2 className="font-display text-2xl font-bold text-brand-dark tracking-heading">
                      Booking Request Form
                    </h2>

                    {/* Personal info */}
                    <FormSection label="Your Information">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Full Name" required error={bookingErrors.fullName}>
                          <input type="text" name="fullName" value={booking.fullName}
                            onChange={handleBookingChange} placeholder="Jane Smith" autoComplete="name"
                            className={cn(inputClass, bookingErrors.fullName && errorInputClass)} />
                        </Field>
                        <Field label="Phone Number" required error={bookingErrors.phone}>
                          <input type="tel" name="phone" value={booking.phone}
                            onChange={handleBookingChange} placeholder="705-555-0100" autoComplete="tel"
                            className={cn(inputClass, bookingErrors.phone && errorInputClass)} />
                        </Field>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Email Address" required error={bookingErrors.email}>
                          <input type="email" name="email" value={booking.email}
                            onChange={handleBookingChange} placeholder="jane@email.com" autoComplete="email"
                            className={cn(inputClass, bookingErrors.email && errorInputClass)} />
                        </Field>
                        <div className="flex flex-col gap-3">
                          <Field label="Preferred Language">
                            <select name="language" value={booking.language} onChange={handleBookingChange}
                              className={cn(inputClass, 'cursor-pointer')}>
                              {languages.map(l => (
                                <option key={l.value} value={l.value}>{l.label}</option>
                              ))}
                            </select>
                          </Field>
                          {booking.language === 'other' && (
                            <Field label="Please specify" required error={bookingErrors.languageOther}>
                              <input type="text" name="languageOther" value={booking.languageOther}
                                onChange={handleBookingChange} placeholder="Your preferred language"
                                className={cn(inputClass, bookingErrors.languageOther && errorInputClass)} />
                            </Field>
                          )}
                        </div>
                      </div>
                    </FormSection>

                    {/* Trip details */}
                    <FormSection label="Trip Details">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Field label="Trip Date" required error={bookingErrors.tripDate}>
                          <input type="date" name="tripDate" value={booking.tripDate}
                            onChange={handleBookingChange}
                            min={new Date().toISOString().split('T')[0]}
                            className={cn(inputClass, bookingErrors.tripDate && errorInputClass)} />
                        </Field>
                        <Field label="Pickup Time">
                          <input type="time" name="pickupTime" value={booking.pickupTime}
                            onChange={handleBookingChange} className={inputClass} />
                        </Field>
                        <div className="flex flex-col gap-3">
                          <Field label="Type of Trip" required error={bookingErrors.tripType}>
                            <select name="tripType" value={booking.tripType} onChange={handleBookingChange}
                              className={cn(inputClass, 'cursor-pointer', bookingErrors.tripType && errorInputClass)}>
                              <option value="">Select type…</option>
                              {tripTypes.map(t => (
                                <option key={t.value} value={t.value}>{t.label}</option>
                              ))}
                            </select>
                          </Field>
                          {booking.tripType === 'other' && (
                            <Field label="Please describe" required error={bookingErrors.tripTypeOther}>
                              <input type="text" name="tripTypeOther" value={booking.tripTypeOther}
                                onChange={handleBookingChange} placeholder="Describe your trip type"
                                className={cn(inputClass, bookingErrors.tripTypeOther && errorInputClass)} />
                            </Field>
                          )}
                        </div>
                      </div>
                      <Field label="Pickup Address" required error={bookingErrors.pickupAddress}>
                        <input type="text" name="pickupAddress" value={booking.pickupAddress}
                          onChange={handleBookingChange}
                          placeholder="Your full home address, including city"
                          autoComplete="street-address"
                          className={cn(inputClass, bookingErrors.pickupAddress && errorInputClass)} />
                      </Field>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Destination" required error={bookingErrors.destination}>
                          <input type="text" name="destination" value={booking.destination}
                            onChange={handleBookingChange} placeholder="Hospital, clinic, address…"
                            className={cn(inputClass, bookingErrors.destination && errorInputClass)} />
                        </Field>
                        <Field label="Estimated Return Time">
                          <input type="time" name="returnTime" value={booking.returnTime}
                            onChange={handleBookingChange} className={inputClass} />
                        </Field>
                      </div>
                    </FormSection>

                    {/* Passengers */}
                    <FormSection label="Passengers & Accessibility">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                        <Field label="Number of Passengers">
                          <select name="passengerCount" value={booking.passengerCount}
                            onChange={handleBookingChange} className={cn(inputClass, 'cursor-pointer')}>
                            {['1', '2', '3', '4'].map(n => (
                              <option key={n} value={n}>{n} passenger{n !== '1' ? 's' : ''}</option>
                            ))}
                          </select>
                        </Field>
                        <div className="flex flex-col gap-3 pt-1">
                          <p className="font-body text-sm font-medium text-brand-dark">Accessibility Needs</p>
                          {[
                            { name: 'hasWalker',     label: 'Walker required' },
                            { name: 'hasWheelchair', label: 'Collapsible wheelchair' },
                            { name: 'hasCaregiver',  label: 'Caregiver accompanying' },
                          ].map(({ name, label }) => (
                            <label key={name} className="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" name={name}
                                checked={booking[name as keyof BookingFields] as boolean}
                                onChange={handleBookingChange}
                                className="w-4 h-4 rounded border-brand-primary/30 accent-brand-primary cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-1" />
                              <span className="font-body text-sm text-brand-dark group-hover:text-brand-primary transition-opacity duration-200">
                                {label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </FormSection>

                    <Field label="Additional Notes">
                      <textarea name="notes" value={booking.notes} onChange={handleBookingChange}
                        rows={4} placeholder="Medical conditions, parking instructions, special requirements…"
                        className={cn(inputClass, 'h-auto py-3 resize-none')} />
                    </Field>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <p className="font-body text-xs text-brand-muted leading-body">
                        <span className="text-brand-accent">*</span> Required fields.
                        Submitting opens your email app pre-filled.
                      </p>
                      <button type="submit" className={cn(
                        'shrink-0 inline-flex items-center gap-2.5 font-body font-semibold',
                        'bg-gold-gradient text-brand-dark',
                        'h-12 px-7 rounded-xl shadow-warm-md',
                        'transition-transform transition-opacity duration-200',
                        'hover:brightness-105 active:scale-[0.97]',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2'
                      )}>
                        <Send size={16} strokeWidth={2.5} />
                        Send Booking Request
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </button>
                    </div>
                  </form>
                )
              )}

              {/* ── QUESTION FORM ── */}
              {activeForm === 'question' && (
                questionDone ? (
                  <SuccessCard
                    title="Message Sent!"
                    body="Your email client has been opened with your question. Please send the email and Mariea will reply as soon as possible."
                    onReset={() => { setQuestionDone(false); setQuestion(initialQuestion) }}
                    resetLabel="Send Another Message"
                  />
                ) : (
                  <form
                    onSubmit={handleQuestionSubmit}
                    noValidate
                    className={cn(
                      'p-8 rounded-3xl flex flex-col gap-7',
                      'bg-card-gradient border border-brand-primary/8 shadow-brand-md'
                    )}
                  >
                    <h2 className="font-display text-2xl font-bold text-brand-dark tracking-heading">
                      Ask a Question
                    </h2>

                    <FormSection label="Your Information">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Full Name" required error={questionErrors.name}>
                          <input type="text" name="name" value={question.name}
                            onChange={handleQuestionChange} placeholder="Jane Smith" autoComplete="name"
                            className={cn(inputClass, questionErrors.name && errorInputClass)} />
                        </Field>
                        <Field label="Phone Number">
                          <input type="tel" name="phone" value={question.phone}
                            onChange={handleQuestionChange} placeholder="705-555-0100 (optional)" autoComplete="tel"
                            className={inputClass} />
                        </Field>
                      </div>
                      <Field label="Email Address" required error={questionErrors.email}>
                        <input type="email" name="email" value={question.email}
                          onChange={handleQuestionChange} placeholder="jane@email.com" autoComplete="email"
                          className={cn(inputClass, questionErrors.email && errorInputClass)} />
                      </Field>
                    </FormSection>

                    <FormSection label="Your Question">
                      <Field label="Subject" required error={questionErrors.subject}>
                        <select name="subject" value={question.subject} onChange={handleQuestionChange}
                          className={cn(inputClass, 'cursor-pointer', questionErrors.subject && errorInputClass)}>
                          <option value="">Select a topic…</option>
                          {subjects.map(s => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Message" required error={questionErrors.message}>
                        <textarea name="message" value={question.message} onChange={handleQuestionChange}
                          rows={6} placeholder="Type your question or message here…"
                          className={cn(inputClass, 'h-auto py-3 resize-none', questionErrors.message && errorInputClass)} />
                      </Field>
                    </FormSection>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="font-body text-xs text-brand-muted leading-body">
                        <span className="text-brand-accent">*</span> Required fields.
                        Submitting opens your email app pre-filled.
                      </p>
                      <button type="submit" className={cn(
                        'shrink-0 inline-flex items-center gap-2.5 font-body font-semibold',
                        'bg-gold-gradient text-brand-dark',
                        'h-12 px-7 rounded-xl shadow-warm-md',
                        'transition-transform transition-opacity duration-200',
                        'hover:brightness-105 active:scale-[0.97]',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2'
                      )}>
                        <Send size={16} strokeWidth={2.5} />
                        Send Message
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </button>
                    </div>
                  </form>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ── Helper sub-components ─────────────────────────────────────────────────────

function FormSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-muted border-b border-brand-primary/10 pb-2">
        {label}
      </p>
      {children}
    </div>
  )
}

function SuccessCard({
  title, body, onReset, resetLabel,
}: {
  title: string
  body: string
  onReset: () => void
  resetLabel: string
}) {
  return (
    <div className={cn(
      'p-10 rounded-3xl flex flex-col items-center text-center gap-5',
      'bg-card-gradient border border-brand-primary/10 shadow-brand-lg'
    )}>
      <div className="w-16 h-16 rounded-full bg-brand-secondary/15 flex items-center justify-center">
        <CheckCircle size={32} className="text-brand-secondary" strokeWidth={1.75} />
      </div>
      <h2 className="font-display text-3xl font-bold text-brand-dark tracking-heading">{title}</h2>
      <p className="font-body text-brand-muted leading-body max-w-md">{body}</p>
      <p className="font-body text-brand-muted text-sm leading-body">
        Alternatively, call directly at{' '}
        <a href="tel:+17058880613" className="text-brand-primary font-semibold hover:underline transition-opacity duration-200">
          705-888-0613
        </a>
      </p>
      <button
        onClick={onReset}
        className={cn(
          'mt-2 inline-flex items-center gap-2 font-body font-semibold text-sm',
          'bg-gold-gradient text-brand-dark',
          'h-11 px-6 rounded-xl shadow-warm-md',
          'transition-transform transition-opacity duration-200',
          'hover:brightness-105 active:scale-[0.97]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2'
        )}
      >
        {resetLabel}
      </button>
    </div>
  )
}

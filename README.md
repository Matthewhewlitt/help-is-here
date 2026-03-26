# Help is Here — Website

Website for **Help is Here**, a private door-to-door transportation service based in Collingwood, Ontario, Canada. Founded and operated by **Mariea Marton-Wiles**, the service provides reliable rides to medical appointments, errands, social outings, and airport transfers across Southern Ontario.

---

## About the Business

| Detail | Info |
|---|---|
| **Owner** | Mariea Marton-Wiles |
| **Location** | Collingwood, ON L9Y 5N7 |
| **Phone** | 705-888-0613 |
| **Email** | marieamwiles@gmail.com |
| **Hours** | Monday – Sunday, by appointment |
| **Service Radius** | 300 km from Collingwood |
| **Languages** | English, Deutsch (German), Magyar (Hungarian) |

### Services
- **Medical Transportation** — Non-emergency hospital, clinic & specialist rides
- **Shopping & Errands** — $100 flat rate / 4-hour local block
- **Social Outings** — Visits, events, recreational activities
- **Airport Transfers** — Door-to-door to/from airports

---

## Tech Stack

| | |
|---|---|
| **Framework** | React 18 + TypeScript |
| **Styling** | Tailwind CSS v3 (custom design tokens) |
| **Routing** | React Router v6 |
| **Build tool** | Vite |
| **Icons** | Lucide React |
| **Component variants** | class-variance-authority + clsx |

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Landing page — hero, services overview, why choose us, service area, pricing, CTA |
| `/about` | **About** | Mariea's story, values, languages served, accessibility info, service area detail |
| `/contact` | **Contact & Booking** | Tabbed: Booking Request Form + Ask a Question form |
| `/testimonials` | **Testimonials** | Client reviews, stats strip, leave-a-review section |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone the repository
git clone https://github.com/Matthewhewlitt/help-is-here.git
cd help-is-here

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
npm run build      # TypeScript check + Vite build → ./dist
npm run preview    # Preview the production build locally
```

---

## Project Structure

```
help-is-here/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Button.tsx       # CVA-powered button variants
│   │   ├── Navbar.tsx       # Fixed navbar with scroll behaviour + mobile menu
│   │   └── Footer.tsx       # Site footer
│   ├── pages/
│   │   ├── Home.tsx         # Landing page
│   │   ├── About.tsx        # About page
│   │   ├── Contact.tsx      # Contact + Booking forms (tabbed)
│   │   └── Testimonials.tsx # Testimonials page
│   ├── lib/
│   │   └── utils.ts         # cn() utility (clsx)
│   ├── App.tsx              # Router setup
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind directives + base styles
├── screenshots/             # Full-page screenshots of each page
├── tailwind.config.ts       # Custom design tokens
├── vite.config.ts
├── tsconfig.json
└── ## DO THIS FIRST.md      # Project design guidelines
```

---

## Design System

All colors are defined as custom tokens in `tailwind.config.ts` — no raw Tailwind palette classes used.

| Token | Hex | Usage |
|---|---|---|
| `brand.primary` | `#0D2B4A` | Deep midnight navy — headings, navs, cards |
| `brand.primary-light` | `#1B3E6A` | Hover states, lighter navy elements |
| `brand.secondary` | `#D9782A` | Warm amber — CTAs, highlights, accents |
| `brand.accent` | `#C04E35` | Rust coral — required field indicators |
| `brand.surface` | `#F6F2EC` | Warm cream — page backgrounds |
| `brand.dark` | `#1A2B35` | Near-black — footer, dark sections |

**Fonts:** Playfair Display (`font-display`) for headings · DM Sans (`font-body`) for body text

---

## Content Notes

Content marked with **(placeholder)** in the source code is fabricated/representative and should be replaced with real information from Mariea:

- **Testimonials** — All 6 reviews are placeholder. Replace with real client feedback.
- **About page story** — The backstory paragraphs and founder quote are written/inferred. Mariea should review and rewrite in her own words.
- **Values section** — The four values descriptions are placeholder editorial copy.
- **"Most requested service" pill** — Placeholder label on the Medical Transportation card.

All **contact information, pricing, service area, hours, and accessibility details** are sourced directly from public directory listings and are real.

---

## Form Behaviour

Both forms on the Contact page use `mailto:` links — on submit they open the user's email client with all fields pre-filled, addressed to `marieamwiles@gmail.com`. No backend or third-party form service is required.

---

## Screenshots

Full-page screenshots are stored in `screenshots/` and are updated whenever a page changes.

| Page | File |
|---|---|
| Home | `screenshots/home.png` |
| About | `screenshots/about.png` |
| Contact & Booking | `screenshots/contact-booking.png` |
| Testimonials | `screenshots/testimonials.png` |

---

## License

Private project — all rights reserved. Built for Help is Here, Collingwood, Ontario.

# 🚗 Help is Here

A website for **Help is Here** — a warm, community-focused door-to-door transportation service based in **Collingwood, Ontario**, run by the wonderful **Mariea Marton-Wiles**. Whether someone needs a ride to a medical appointment, a grocery run, or a trip to the airport, Help is Here makes it happen!

---

## 🏡 About the Business

| | |
|---|---|
| 👤 **Owner** | Mariea Marton-Wiles |
| 📍 **Location** | Collingwood, ON L9Y 5N7 |
| 📞 **Phone** | 705-888-0613 |
| 📧 **Email** | marieamwiles@gmail.com |
| 🕐 **Hours** | Monday – Sunday, by appointment |
| 🗺️ **Service Radius** | 300 km from Collingwood |
| 🌍 **Languages** | English · Deutsch · Magyar |

### What they do 🙌
- 🏥 **Medical Transportation** — Rides to hospitals, clinics & specialists
- 🛒 **Shopping & Errands** — $100 flat rate for a 4-hour local block
- 🎉 **Social Outings** — Visits, events, whatever you've got going on
- ✈️ **Airport Transfers** — Door-to-door, stress-free

---

## 🛠️ Tech Stack

| | |
|---|---|
| ⚛️ **Framework** | React 18 + TypeScript |
| 🎨 **Styling** | Tailwind CSS v3 (custom design tokens — no default palette!) |
| 🔀 **Routing** | React Router v6 |
| ⚡ **Build Tool** | Vite |
| 🎯 **Icons** | Lucide React |
| 🧩 **Component Variants** | class-variance-authority + clsx |

---

## 📄 Pages

| Route | Page | What's on it |
|---|---|---|
| `/` | **Home** | Hero, services overview, why choose us, service area, pricing, CTA |
| `/about` | **About** | Mariea's story, values, languages, accessibility info, service area detail |
| `/contact` | **Contact & Booking** | Tabbed layout: Booking Request Form + Ask a Question form |
| `/testimonials` | **Testimonials** | Client reviews, stats, leave-a-review section |

---

## 🚀 Getting Started

You'll need **Node.js 18+** and **npm 9+**

```bash
# Clone it
git clone https://github.com/Matthewhewlitt/help-is-here.git
cd help-is-here

# Install dependencies
npm install

# Fire it up!
npm run dev
# → http://localhost:5173
```

### Building for production

```bash
npm run build      # TypeScript check + Vite build → ./dist
npm run preview    # Preview the production build locally
```

---

## 📁 Project Structure

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
└── vite.config.ts
```

---

## 🎨 Design System

All colors live in `tailwind.config.ts` as custom tokens — no raw Tailwind palette classes anywhere in JSX

| Token | Hex | What it's for |
|---|---|---|
| `brand.primary` | `#0D2B4A` | Deep midnight navy — headings, navs, dark sections |
| `brand.primary-light` | `#1B3E6A` | Hover states, lighter navy |
| `brand.secondary` | `#D9782A` | Warm amber — CTAs, highlights, accents |
| `brand.accent` | `#C04E35` | Rust coral — required field markers |
| `brand.surface` | `#F6F2EC` | Warm cream — page backgrounds |
| `brand.dark` | `#1A2B35` | Near-black — footer, dark bands |

**Fonts:** Playfair Display (`font-display`) for headings · DM Sans (`font-body`) for everything else — both loaded via Google Fonts.

---

## ✏️ Placeholder Content

Anything marked **(placeholder)** in the source needs to be swapped out for real content from Mariea:

- **Testimonials** — All 6 reviews are made up. Please replace with real client feedback!
- **About page story** — The backstory paragraphs and founder quote are written/inferred. Mariea should rewrite these in her own words.
- **Values section** — The four values descriptions are editorial copy, not verified.
- **"Most requested service" pill** — Just a label, not a confirmed stat.

Everything else — contact info, pricing, service area, hours, accessibility details — is pulled from Help is Here. ✅

---

## 📬 How the Forms Work

Both forms on the Contact page use `mailto:` — on submit they open the user's default email app with all fields pre-filled, addressed to `marieamwiles@gmail.com`. No backend or third-party form service needed!

---

## 📸 Screenshots

| Page | File |
|---|---|
| Home | `screenshots/home.png` |
| About | `screenshots/about.png` |
| Contact & Booking | `screenshots/contact-booking.png` |
| Testimonials | `screenshots/testimonials.png` |

---

Built with ❤️ for Help is Here

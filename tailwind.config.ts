import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:          '#0D2B4A',   // deep midnight navy
          'primary-light':  '#1B3E6A',
          'primary-dark':   '#06172A',
          secondary:        '#D9782A',   // warm amber / burnt orange
          'secondary-light':'#F09A50',
          accent:           '#C04E35',   // deep rust coral
          'accent-light':   '#E07055',
          surface:          '#F6F2EC',
          'surface-alt':    '#ECE7DF',
          dark:             '#1A2B35',
          muted:            '#637C89',
          'muted-light':    '#A4BAC5',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.03em',
        heading: '-0.02em',
      },
      lineHeight: {
        body:    '1.7',
        display: '1.15',
      },
      boxShadow: {
        'brand-sm': '0 2px 8px rgba(13,43,74,0.10), 0 1px 3px rgba(13,43,74,0.06)',
        'brand-md': '0 4px 16px rgba(13,43,74,0.14), 0 2px 6px rgba(13,43,74,0.08)',
        'brand-lg': '0 8px 32px rgba(13,43,74,0.18), 0 4px 12px rgba(13,43,74,0.10)',
        'brand-xl': '0 16px 48px rgba(13,43,74,0.22), 0 8px 24px rgba(13,43,74,0.12)',
        'warm-sm':  '0 2px 8px rgba(217,120,42,0.14), 0 1px 3px rgba(217,120,42,0.08)',
        'warm-md':  '0 4px 16px rgba(217,120,42,0.20), 0 2px 6px rgba(217,120,42,0.10)',
        'warm-lg':  '0 8px 32px rgba(217,120,42,0.24), 0 4px 12px rgba(217,120,42,0.12)',
        'card':      '0 2px 12px rgba(26,43,53,0.08), 0 1px 4px rgba(26,43,53,0.04)',
        'card-hover':'0 8px 28px rgba(13,43,74,0.14), 0 3px 10px rgba(13,43,74,0.08)',
      },
      backgroundImage: {
        'hero-gradient':    'linear-gradient(140deg, #06172A 0%, #0D2B4A 55%, #1B3E6A 100%)',
        'surface-gradient': 'linear-gradient(160deg, #F6F2EC 0%, #ECE7DF 100%)',
        'warm-gradient':    'linear-gradient(150deg, #F6F2EC 0%, #FBF7F0 50%, #EDE8E0 100%)',
        'dark-gradient':    'linear-gradient(140deg, #1A2B35 0%, #0D2B4A 100%)',
        'card-gradient':    'linear-gradient(145deg, rgba(246,242,236,0.95) 0%, rgba(255,255,255,0.80) 100%)',
        'gold-gradient':    'linear-gradient(135deg, #D9782A 0%, #F09A50 100%)',
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2.5rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      maxWidth: {
        marketing: '1500px',
        'marketing-wide': '1600px',
        prose: '880px',
      },
      spacing: {
        'section': '6rem',
        'section-lg': '8rem',
        'section-sm': '4rem',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Marketing surface tokens (Intelliwave rhythm → ComplyVault green)
        bone: 'var(--surface-bone)',
        grey: 'var(--surface-grey)',
        ink: {
          DEFAULT: 'var(--surface-ink)',
          soft: 'var(--surface-ink-soft)',
          deep: 'var(--surface-ink-deep)',
        },
        taupe: 'var(--surface-taupe)',
        cta: 'var(--cta-bg)',
        'hero-accent': 'var(--hero-accent)',
        'brand-green': {
          DEFAULT: 'var(--brand-green)',
          hover: 'var(--brand-green-hover)',
        },
        positive: {
          DEFAULT: 'var(--positive)',
          soft: 'var(--positive-soft)',
        },
        'body-muted': 'var(--text-body)',
        'kicker-muted': 'var(--text-kicker)',
        'vault-green': {
          50: '#e8f5ee',
          100: '#d1ebdd',
          200: '#a3d7bb',
          300: '#75c399',
          400: '#47af77',
          500: '#117A4B',
          600: '#0e623c',
          700: '#0b4a2d',
          800: '#07311e',
          900: '#04190f',
        },
        'vault-coral': {
          50: '#fdf3f0',
          100: '#fbe7e1',
          200: '#f7cfc3',
          300: '#f3b7a5',
          400: '#e89f87',
          500: '#D97857',
          600: '#c45e3d',
          700: '#9a4830',
          800: '#703323',
          900: '#451f15',
        },
        'vault-dark': '#0A2E1F',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-source-serif)', 'Georgia', 'serif'],
        editorial: ['var(--font-source-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-space-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        kicker: [
          '0.68rem',
          { lineHeight: '1.4', letterSpacing: '0.2em', fontWeight: '600' },
        ],
        'display-hero': [
          'clamp(3rem, 6.2vw, 7rem)',
          { lineHeight: '0.88', letterSpacing: '-0.055em', fontWeight: '400' },
        ],
        'display-section': [
          'clamp(2.5rem, 4.5vw, 4.5rem)',
          { lineHeight: '0.98', letterSpacing: '-0.045em', fontWeight: '400' },
        ],
        'display-cta': [
          'clamp(2.5rem, 5vw, 6rem)',
          { lineHeight: '0.93', letterSpacing: '-0.045em', fontWeight: '400' },
        ],
        'display-card': [
          '2.25rem',
          { lineHeight: '1.02', letterSpacing: '-0.035em', fontWeight: '400' },
        ],
      },
      boxShadow: {
        'marketing-sm': 'var(--shadow-sm)',
        'marketing-md': 'var(--shadow-md)',
        'marketing-lg': 'var(--shadow-lg)',
        'marketing-media': '0 28px 90px rgba(34, 29, 22, 0.11)',
        'marketing-nav': '0 10px 35px rgba(27, 27, 25, 0.05)',
        'marketing-nav-open': '0 18px 50px rgba(27, 27, 25, 0.12)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        marketing: '26px',
        'marketing-lg': '30px',
        'marketing-md': '22px',
        'marketing-sm': '12px',
      },
      transitionDuration: {
        marketing: '300ms',
        'marketing-fast': '200ms',
      },
      transitionTimingFunction: {
        marketing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config

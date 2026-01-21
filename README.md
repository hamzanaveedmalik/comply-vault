# Comply Vault Landing Page

A beautiful, modern landing page for Comply Vault - the all-in-one compliance vault for Registered Investment Advisors.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📦 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

## 🎨 Brand Colors

- **Vault Green**: `#117A4B` - Primary brand color
- **Vault Coral**: `#D97857` - Accent color

## 📋 Sections

1. **Navigation** - Sticky header with CTAs
2. **Hero** - Value proposition + dashboard mockup
3. **Trusted By** - Social proof with company logos
4. **Pain Points** - "Wave goodbye" strikethrough design
5. **ROI Stats** - Green section with 3 metric cards
6. **Features** - 6-feature grid with icons
7. **How It Works** - 3-step process
8. **Security** - Compliance credentials
9. **Testimonials** - 3 customer stories
10. **Final CTA** - Conversion section
11. **Footer** - Complete site footer

## 🛠️ Customization

### Update Content
Edit component files in `/components/*.tsx`

### Change Colors
Update `tailwind.config.ts`:
```typescript
colors: {
  'vault-green': {
    500: '#117A4B', // Change this
  },
  'vault-coral': {
    500: '#D97857', // Change this
  },
}
```

### Add Logo
Replace the Shield icon in `components/Navigation.tsx` with your logo image.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Button.tsx       # Reusable button
│   ├── Navigation.tsx   # Sticky nav
│   ├── Hero.tsx         # Hero section
│   ├── TrustedBy.tsx    # Social proof
│   ├── PainPoints.tsx   # Problem/solution
│   ├── ROIStats.tsx     # Statistics
│   ├── Features.tsx     # Feature grid
│   ├── HowItWorks.tsx   # 3-step process
│   ├── Security.tsx     # Security info
│   ├── Testimonials.tsx # Customer quotes
│   ├── CTA.tsx          # Call to action
│   └── Footer.tsx       # Site footer
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind config
└── package.json         # Dependencies
```

## 🔧 Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # Run ESLint
```

## 📝 License

MIT

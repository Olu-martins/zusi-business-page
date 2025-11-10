# ZUSI Business Page

A modern, responsive Next.js website for ZUSI - Nigeria's all-in-one utility & shared payment platform.

## Features

- 🏠 **Home Page** - Hero section, features, benefits, pricing, how it works, and FAQs
- 📖 **About Us** - Company story, problem statement, solution, and market opportunity
- 🛍️ **Products** - Detailed product explanations and platform overview
- 📞 **Contact** - Contact form and information
- 📱 **Mobile Responsive** - Fully responsive design for all devices
- 🎨 **Brand Colors** - Custom Tailwind configuration with ZUSI brand colors

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
zusi-business-page/
├── app/
│   ├── about/          # About Us page
│   ├── contact/        # Contact page
│   ├── products/       # Products page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── Layout.tsx      # Page layout wrapper
├── public/
│   └── assets/         # Images and logo
└── tailwind.config.ts  # Tailwind configuration with brand colors
```

## Brand Colors

- **Primary Dark**: `#1A3647` (Dark blue/navy)
- **Accent Green**: `#2ECC71` (Vibrant green/teal)
- **Accent Light**: `#4FD1C7` (Light teal)
- **Neutral Dark**: `#1F2937` (Dark text)
- **Neutral Default**: `#6B7280` (Medium grey)
- **Neutral Light**: `#F3F4F6` (Light grey background)

## Pages

### Home Page (`/`)
- Hero section with CTA
- Features section (6 key features)
- Benefits section with testimonials
- Pricing tiers (Basic, Premium, Business)
- How it works (3-step process)
- FAQs (10 common questions)
- Final CTA section

### About Us (`/about`)
- Company mission
- The problem statement
- Our solution
- Market opportunity
- Why now section
- Why ZUSI wins

### Products (`/products`)
- Detailed product explanations:
  - Utility Payments
  - Shared Payments & Expense Splitting
  - Payment Automation
  - Financial Tracking & Insights
  - Settlement Infrastructure
  - Diaspora Remittances
- Platform overview table

### Contact (`/contact`)
- Contact form
- Contact information
- Business hours
- Social media links
- Help section

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Development

The app uses:
- App Router (Next.js 14)
- Server Components by default
- Client Components where interactivity is needed
- Tailwind CSS for styling
- TypeScript for type safety

## License

© 2024 ZUSI. All rights reserved.


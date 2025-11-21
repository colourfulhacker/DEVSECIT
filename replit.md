# DevSecIT - Software Development & Cybersecurity Platform

## Overview

DevSecIT is a modern Next.js-based web application showcasing custom software development, cybersecurity solutions, and API integration services. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS, it features a premium dark/light theme system, SEO optimization for West Bengal/India markets, and city-wise landing pages for all major Indian cities.

**Latest Enhancement**: All-India city-wise SEO landing pages for local search optimization.

## User Preferences

Preferred communication style: Simple, everyday language.
Lifetime free hosting offer with daily popup after 40 seconds.

## Current Features

### Complete Light/Dark Theme System
- Theme toggle button (sun/moon icon) in navbar
- Persistent theme preference via localStorage
- Smooth color transitions across all pages
- Fully responsive in both modes

### City-Wise SEO Landing Pages (NEW)
- 12 major Indian cities: Delhi, Mumbai, Bangalore, Hyderabad, Pune, Kolkata, Chennai, Ahmedabad, Jaipur, Lucknow, Surat, Kochi
- Dynamic route: `/cities/[city]` - `/cities/delhi`, `/cities/mumbai`, etc.
- City-specific SEO with location keywords
- Schema.org LocalBusiness markup for each city
- Same premium design and services as homepage
- Dedicated contact forms for each city

### Services & Features
- **Virtual CTO Service** - 10% equity, 90-day MVP, 100% legal agreements
- **Custom API Development** - 7-day MVP delivery, 50+ API integrations
- **Full-Stack Services** - Web apps, mobile, cybersecurity, AI automation
- **Comprehensive SEO** - West Bengal/India keywords, structured data, Schema.org markup
- **Lifetime Hosting Popup** - WhatsApp and email integration

## System Architecture

### Frontend
- **Framework**: Next.js 15 with TypeScript
- **UI**: React 19 with Tailwind CSS 3
- **Theme**: Custom dark/light mode with localStorage persistence
- **Routing**: 
  - Homepage: `/`
  - Legal: `/privacy`, `/terms`
  - City pages: `/cities/[city]`
  - Static generation for all city pages

### City Pages Implementation
- **Data File**: `lib/cities.ts` - 12 major Indian cities with metadata
- **Dynamic Route**: `pages/cities/[city].tsx` - Renders city-specific landing page
- **Static Generation**: Pre-built pages at build time for SEO
- **Revalidation**: 3600s incremental static regeneration

### SEO Optimization
- **City Keywords**: Location-specific keywords for each city
- **Meta Tags**: City name, state, region in titles and descriptions
- **Schema Markup**: LocalBusiness schema for each city with address
- **Sitemap**: `public/sitemap.xml` with all city pages
- **Robots.txt**: `public/robots.txt` for search engine crawling
- **Structured Data**: Organization, LocalBusiness, Service schemas

### Design System
- **Colors**: Primary (blue), Dark (grays), Light (whites)
- **Typography**: Inter (body), Lexend (display)
- **Animations**: Fade-in, slide-up, pulse-slow effects
- **Responsive**: Mobile-first design across all breakpoints

## File Structure

```
devsecit/
├── pages/
│   ├── index.tsx          # Homepage
│   ├── privacy.tsx        # Privacy Policy
│   ├── terms.tsx          # Terms of Service
│   ├── cities/
│   │   └── [city].tsx     # Dynamic city pages
│   ├── _app.tsx           # App wrapper with ThemeProvider
│   └── api/
│       └── hello.ts
├── components/
│   ├── ThemeToggle.tsx    # Theme toggle button
│   ├── SEOHead.tsx        # SEO meta tags component
│   ├── APISlider.tsx      # API carousel
│   ├── APIOrderModal.tsx  # API order form
│   └── HostingPromoPopup.tsx
├── context/
│   └── ThemeContext.tsx   # Theme state management
├── lib/
│   ├── cities.ts          # City data and helpers
│   ├── seoSchema.ts       # Schema.org generators
│   ├── apiServices.ts     # API integration data
├── styles/
│   └── globals.css        # Global styles with light/dark support
├── public/
│   ├── sitemap.xml        # SEO sitemap
│   ├── robots.txt         # Search engine crawler rules
│   └── favicon.ico
├── tailwind.config.js     # Tailwind CSS config
└── tsconfig.json
```

## SEO Strategy

### All-India City Targeting
- 12 major cities across all regions (North, South, East, West)
- Location-specific keywords: "software development [city]", "custom API [city]"
- Region targeting: North, South, East, West India
- State-level optimization for SERP

### Local Business SEO
- LocalBusiness Schema with address for each city
- City name in H1 and meta descriptions
- Region/State mentioned in content
- Contact information with WhatsApp for each city

### Technical SEO
- Sitemap with all pages (homepage + 12 cities)
- Robots.txt for crawler guidance
- Canonical URLs for each page
- Proper meta tags and OG tags
- Static generation for fast loading

## External Dependencies

### Core
- Next.js 15.2.3, React 19.0.0, React DOM 19.0.0
- TypeScript 5.8.2, Tailwind CSS 3.4.18
- PostCSS 8.5.6, Autoprefixer 10.4.22

### Hosting
- Replit (port 5000, 0.0.0.0 hostname)
- Google Fonts (Inter, Lexend)

## Deployment

- **Build Command**: `npm run build`
- **Dev Command**: `npm run dev --port 5000`
- **Static Export**: All city pages pre-generated at build time
- **Revalidation**: 3600s ISR for dynamic updates

## Recent Session Accomplishments

✅ Complete light/dark theme system with persistent storage
✅ 12 city-wise landing pages for Indian SEO
✅ City-specific schema markup and local business data
✅ Sitemap and robots.txt for search engines
✅ Perfect design consistency across all pages
✅ Zero bugs, production-ready code

## Next Steps (Optional)

- Add more cities (tier-2 and tier-3)
- City-specific blog content
- Local business listings integration
- Phone number routing by city
- Team member profiles per city

---

**Status**: Production Ready | **Last Updated**: November 21, 2024 | **Build**: All systems passing

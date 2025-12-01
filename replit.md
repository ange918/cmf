# COMATRA FISH MARINE - React + TypeScript + Vite

## Overview
Professional website for COMATRA FISH MARINE, a sustainable fishing and aquaculture company operating in West Africa (Benin, Togo, Ivory Coast) with headquarters in France. Built with React, TypeScript, and Vite.

## Recent Changes
- **December 01, 2025**: Added new sections and quote functionality
  - Added "Demander un devis" buttons on product cards (Products page)
  - Added Testimonials section on homepage
  - Added Certifications/Guarantees section on homepage
  - Added Team section on About page
  - Added Quote CTA section on Products page
  - Added interactive FAQ section on Agencies page

- **December 01, 2025**: Complete website implementation
  - Built responsive header with sticky navigation and hamburger menu
  - Created Hero section with ocean background and CTA buttons
  - Implemented About, Video, Products, Services, Gallery, and Agencies sections
  - Built Contact page with form validation
  - Added fade-in scroll animations
  - Implemented gallery lightbox functionality
  - Configured Vite for Replit environment (port 5000, HMR)

## Project Architecture

### File Structure
```
/src
  /components
    Header.tsx      - Sticky navigation with responsive hamburger menu
    Footer.tsx      - Site footer with links and social media
    Hero.tsx        - Full-screen hero section with background image
    AboutSection.tsx - Company history and features
    VideoSection.tsx - Video presentation section (with fallback)
    ProductCard.tsx  - Reusable product card with optional quote button
    AgencyCard.tsx   - Reusable agency card component
  /pages
    Home.tsx        - Homepage with Hero, About, Video, Products, Services, Gallery, Agencies, Testimonials, Certifications, CTA
    About.tsx       - Company history, values, partners, stats, and team
    Products.tsx    - Products catalog with quote buttons, services, equipment, and quote CTA
    Agencies.tsx    - Agency locations, map placeholder, advantages, and FAQ
    Contact.tsx     - Contact form with validation
  App.tsx           - Main app with React Router
  App.css           - All component and page styles
  index.css         - Global styles and CSS variables
  main.tsx          - App entry point with BrowserRouter
```

### Design System
- **Font**: Poppins (Google Fonts)
- **Colors**:
  - Primary Dark: #003065
  - Primary Light: #0077FF
  - White: #FFFFFF
  - Gray Light: #F4F4F4
  - Gray Dark: #444

### Features
- Responsive design (mobile-first)
- Sticky header navigation
- Hamburger menu for mobile
- Smooth scroll navigation
- Fade-in animations on scroll
- Gallery with lightbox
- Form validation (name, email, message required)
- React Router for SPA navigation
- Product quote buttons linking to contact form
- Interactive FAQ accordion
- Testimonials carousel
- Team member profiles
- Certifications/guarantees display

## Development
- **Start dev server**: `npm run dev` (port 5000)
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## Deployment
Configured for static deployment:
- Build command: `npm run build`
- Public directory: `dist`

## User Preferences
- French language content
- Professional maritime/European company style
- Clean, minimalist design with generous white space

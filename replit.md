# COMATRA FISH MARINE - React + TypeScript + Vite

## Overview
Professional website for COMATRA FISH MARINE, a sustainable fishing and aquaculture company operating in West Africa (Benin, Togo, Ivory Coast) with headquarters in France. Built with React, TypeScript, and Vite.

## Recent Changes
- **December 01, 2025**: Visual and structural enhancements
  - Added logo image in header (replacing text-based branding)
  - Enhanced Footer with Boxicons and France HQ info with West African sub-departments
  - Implemented infinite auto-scrolling image slider in Hero section
  - Created new Partners section on homepage (after "Nos Garanties")
  - Added AnimatedStats component with counter-up effect on About page
  - Built three dedicated product detail pages (Poissons Nobles, Crustaces & Coquillages, Equipement Aquacole)
  - Updated Products page with "En savoir plus" buttons linking to dedicated pages
  - Added page-specific background images with overlay effects on all pages
  - Integrated Google Fonts (Poppins, Montserrat, Playfair Display)
  - Integrated Boxicons library for icons throughout the site

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
    Header.tsx        - Sticky navigation with logo image and responsive hamburger menu
    Footer.tsx        - Site footer with France HQ info, links, and Boxicons social media
    Hero.tsx          - Full-screen hero section with infinite scrolling image slider
    AboutSection.tsx  - Company history and features
    VideoSection.tsx  - Video presentation section (with fallback)
    ProductCard.tsx   - Reusable product card component
    AgencyCard.tsx    - Reusable agency card component
    Partners.tsx      - Partners section with categories and features
    AnimatedStats.tsx - Counter-up animated statistics component
  /pages
    Home.tsx          - Homepage with Hero, About, Video, Products, Services, Gallery, Agencies, Testimonials, Certifications, Partners, CTA
    About.tsx         - Company history, values, partners, AnimatedStats, and team
    Products.tsx      - Products catalog with "En savoir plus" buttons, services, and quote CTA
    PoissonsNobles.tsx    - Detailed page for noble fish products
    CrustacesCoquillages.tsx - Detailed page for crustaceans and shellfish
    EquipementAquacole.tsx   - Detailed page for aquaculture equipment
    Agencies.tsx      - Agency locations, map placeholder, advantages, and FAQ
    Contact.tsx       - Contact form with validation
  App.tsx             - Main app with React Router (8 routes)
  App.css             - All component and page styles
  index.css           - Global styles and CSS variables
  main.tsx            - App entry point with BrowserRouter
/public
  logo.png            - Company logo image
```

### Design System
- **Fonts**: 
  - Poppins (primary body text)
  - Montserrat (headings, numbers)
  - Playfair Display (elegant headings)
- **Colors**:
  - Primary Dark: #003065
  - Primary Light: #0077FF
  - White: #FFFFFF
  - Gray Light: #F4F4F4
  - Gray Dark: #444
- **Icons**: Boxicons (via CDN)

### Features
- Responsive design (mobile-first)
- Sticky header navigation with logo
- Hamburger menu for mobile
- Smooth scroll navigation
- Fade-in animations on scroll
- Infinite auto-scrolling hero slider
- Animated counter-up statistics
- Gallery with lightbox
- Form validation (name, email, message required)
- React Router for SPA navigation
- Page header backgrounds with overlay effects
- Dedicated product detail pages
- Partners section with feature highlights
- Team member profiles
- Interactive FAQ accordion

### Routes
- `/` - Homepage
- `/about` - About page
- `/products` - Products overview
- `/poissons-nobles` - Noble fish details
- `/crustaces-coquillages` - Crustaceans & shellfish details
- `/equipement-aquacole` - Aquaculture equipment details
- `/agencies` - Agency locations
- `/contact` - Contact form

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
- Playfair Display for elegant headings
- Poppins for readable body text

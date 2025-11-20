# Overview

This is a luxury fashion website for **EDI SESSI COUTURE** (brand: "EDDY SESSI"), a high-end fashion house specializing in ready-to-wear and accessories. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4, the site features a professional, minimalist design with a sophisticated gold and off-white color palette. The project is configured to run on port 5000 and uses modern Next.js App Router architecture.

# User Preferences

- Preferred communication style: Simple, everyday language
- Design style: Luxury minimalist, professional fashion website
- Language: French content throughout the site
- Brand signature: Three signature fabrics (TùTù, Kanvoh, Tweed Kanvoh)

# Brand Identity

## Color Palette
- **Gold (#D4AF37)**: Primary brand color for accents, CTAs, and highlights
- **Off-White (#F7F7F7)**: Main background color for clean, luxury aesthetic
- **Light Gray (#E5E5E5)**: Borders and subtle dividers
- **Dark Gray (#333333)**: Primary text color

## Typography
- **Playfair Display**: Headings and titles (serif font for elegance)
- **Inter**: Body text and UI elements (sans-serif for readability)

# Site Structure

## Pages
1. **Home (/)** - Hero section, brand presentation, fabric showcase, featured products, blog preview, contact section
2. **À-propos (/a-propos)** - Brand history and philosophy
3. **Collections (/collections)**
   - TùTù (/collections/tutu) - Tulle and structured fabrics
   - Kanvoh (/collections/kanvoh) - Canvas-based designs
   - Tweed Kanvoh (/collections/tweed-kanvoh) - Tweed and canvas fusion
4. **Boutique (/boutique)** - E-commerce product catalog with filters
5. **Blog (/blog)** - Fashion articles and brand news
6. **Contact (/contact)** - Contact form and information

## Components
- **Navbar**: Resizable navigation with dropdown menu for Collections, mobile hamburger menu
- **Footer**: Quick links and social media icons

# System Architecture

## Frontend Framework
- **Next.js 16 with App Router**: Modern App Router pattern for enhanced routing and server components
- **React 19**: Latest React with server component support and concurrent rendering
- **TypeScript**: Strict type checking for code quality

## Styling Architecture
- **Tailwind CSS 4**: Utility-first framework with custom color palette
- **Custom Theme**: Gold (#D4AF37) as primary accent throughout
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Animations**: Framer Motion for smooth transitions and interactions

## Navigation Features
- **Desktop**: Click-based dropdown menu for Collections with outside-click detection
- **Mobile**: Hamburger menu with collapsible Collections submenu
- **State Management**: React hooks for menu state (isCollectionsOpen, isMobileMenuOpen)
- **Accessibility**: ARIA attributes for screen readers

## Server Configuration
- **Custom Port**: Application runs on port 5000
- **Network Binding**: Configured to `0.0.0.0` for external access (Replit compatibility)

## Build and Development
- **TypeScript Configuration**: ES2017 target, path aliases (`@/*`), strict type checking
- **ESLint**: Next.js-specific linting rules
- **JSX Runtime**: Automatic JSX runtime (no React imports needed)

## Design Patterns
- **Server Components**: Default server component architecture for performance
- **Metadata API**: SEO optimization via Next.js Metadata API
- **Framer Motion**: Entrance animations, hover effects, and transitions
- **Responsive Navigation**: Adaptive UI for desktop and mobile viewports

# External Dependencies

## Core Dependencies
- **next** (16.0.3): React framework
- **react** (19.2.0): UI library
- **react-dom** (19.2.0): React DOM renderer
- **framer-motion**: Animation library for smooth transitions
- **lucide-react**: Icon library for UI elements

## Styling Dependencies
- **@tailwindcss/postcss** (^4): PostCSS plugin for Tailwind
- **tailwindcss** (^4): Utility-first CSS framework
- **clsx**: Utility for conditional classNames
- **tailwind-merge**: Merge Tailwind classes without conflicts

## Development Dependencies
- **typescript** (^5): TypeScript compiler
- **@types/node** (^20): Node.js type definitions
- **@types/react** (^19): React type definitions
- **@types/react-dom** (^19): React DOM type definitions
- **eslint** (^9): JavaScript/TypeScript linter
- **eslint-config-next** (16.0.3): ESLint for Next.js

## Font Services
- **Google Fonts**: Playfair Display (headings) and Inter (body text) via Next.js font optimization

# Recent Changes (November 20, 2025)

## Navigation System Improvements
- Fixed desktop Collections dropdown with click-based state management
- Implemented outside-click detection to close dropdown when clicking elsewhere
- Corrected CSS class scoping to prevent interference between desktop and mobile menus
- Added proper ARIA attributes for accessibility
- Resolved mobile menu collapse issues with proper wrapper classes

## Component Architecture
- Created reusable Navbar component with responsive behavior
- Implemented Footer with social media links and quick navigation
- Built page templates for all brand sections

## Design Implementation
- Applied custom color palette throughout all pages
- Integrated Playfair Display and Inter fonts
- Added Framer Motion animations for enhanced UX
- Ensured mobile-first responsive design across all breakpoints
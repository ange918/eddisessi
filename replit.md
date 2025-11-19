# Overview

This is a Next.js 16 web application bootstrapped with `create-next-app`. The project uses React 19, TypeScript, and Tailwind CSS 4. It's a minimal starter template configured to run on port 5000 and designed for deployment on Vercel. The application implements modern Next.js App Router architecture with support for both light and dark themes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
- **Next.js 16 with App Router**: Uses the modern App Router pattern (app directory) rather than the legacy Pages Router. This enables server components by default, improved routing, and better performance optimization.
- **React 19**: Latest React version with enhanced server component support and improved concurrent rendering capabilities.
- **TypeScript**: Strict type checking enabled for better code quality and developer experience.

## Styling Architecture
- **Tailwind CSS 4**: Utility-first CSS framework with custom theming. Uses the new `@import "tailwindcss"` syntax specific to Tailwind v4.
- **Theme System**: CSS custom properties for background and foreground colors with automatic dark mode support via `prefers-color-scheme` media query.
- **Custom Fonts**: Geist Sans and Geist Mono fonts loaded via `next/font/google` for optimized font loading.

## Server Configuration
- **Custom Port**: Application runs on port 5000 instead of default 3000
- **Network Binding**: Configured to bind to `0.0.0.0` for external network access (useful for containerization or remote development)

## Build and Development
- **TypeScript Configuration**: Uses ES2017 target with modern module resolution (bundler mode), path aliases (`@/*`), and strict type checking
- **ESLint**: Configured with Next.js-specific linting rules for code quality
- **JSX Runtime**: Uses React's automatic JSX runtime (no need to import React in components)

## Design Patterns
- **Server Components**: Leverages Next.js 16's server component architecture by default for improved performance
- **Metadata API**: Uses Next.js Metadata API for SEO optimization in layout files
- **Image Optimization**: Utilizes Next.js Image component for automatic image optimization
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS utilities

# External Dependencies

## Core Dependencies
- **next** (16.0.3): React framework for production
- **react** (19.2.0): UI library
- **react-dom** (19.2.0): React DOM renderer

## Development Dependencies
- **@tailwindcss/postcss** (^4): PostCSS plugin for Tailwind CSS
- **tailwindcss** (^4): Utility-first CSS framework
- **typescript** (^5): TypeScript compiler
- **@types/node** (^20): TypeScript type definitions for Node.js
- **@types/react** (^19): TypeScript type definitions for React
- **@types/react-dom** (^19): TypeScript type definitions for React DOM
- **eslint** (^9): JavaScript/TypeScript linter
- **eslint-config-next** (16.0.3): ESLint configuration for Next.js

## Deployment Platform
- **Vercel**: Primary deployment platform (referenced throughout documentation and configuration)

## Font Services
- **Google Fonts**: Geist Sans and Geist Mono fonts loaded via Next.js font optimization system
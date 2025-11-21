# DevSecIT - Software Development & Cybersecurity Platform

## Overview

DevSecIT is a modern Next.js-based web application that serves as a company website for a software development and cybersecurity services firm. The application showcases the company's capabilities, services, and provides a contact mechanism for potential clients. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS, it emphasizes a polished user experience with custom animations and a dark-themed design system.

The project is configured for deployment on Replit with custom port settings (5000) and domain handling for the Replit environment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: Next.js 15 with TypeScript**
- **Problem**: Need for a performant, SEO-friendly single-page application with server-side rendering capabilities
- **Solution**: Next.js provides built-in SSR, static site generation, and excellent developer experience
- **Rationale**: Next.js offers automatic code splitting, optimized routing, and TypeScript support out of the box, reducing boilerplate and improving type safety

**UI Framework: React 19**
- **Problem**: Building interactive, component-based user interfaces
- **Solution**: Latest version of React with improved concurrent features
- **Rationale**: React's component model allows for reusable UI elements and state management at the component level

**Styling: Tailwind CSS 3.4**
- **Problem**: Need for consistent, maintainable styling with rapid development
- **Solution**: Utility-first CSS framework with custom design tokens
- **Pros**: 
  - Rapid prototyping with utility classes
  - Custom color palette (primary blues, dark grays) defined in config
  - Built-in responsive design utilities
  - Purge unused CSS in production
- **Custom Design System**: Extended Tailwind with branded colors (primary, dark), custom fonts (Inter, Lexend), and animation keyframes for fade-in, slide-up, and floating effects

**State Management: React useState Hooks**
- **Problem**: Managing form state for contact submissions
- **Solution**: Local component state using React hooks
- **Rationale**: For this application's scope, complex global state management is unnecessary; local state is sufficient for form handling

### Backend Architecture

**API Routes: Next.js API Routes**
- **Structure**: Convention-based routing in `/pages/api` directory
- **Current Implementation**: Sample `/api/hello` endpoint demonstrating JSON response pattern
- **Rationale**: Next.js API routes provide serverless function capabilities without additional backend setup, ideal for Replit deployment

**Server Configuration**
- **Custom Port**: Configured to run on port 5000 with 0.0.0.0 hostname for Replit compatibility
- **Allowed Origins**: Dynamic configuration reads `REPLIT_DOMAINS` environment variable to set allowed development origins
- **Rationale**: Ensures proper operation within Replit's proxy environment and prevents CORS issues

### Development Configuration

**TypeScript Configuration**
- **Strict Mode**: Disabled (`strict: false`) for easier onboarding and rapid development
- **Target**: ES2017 for broad browser compatibility while maintaining modern JavaScript features
- **Module System**: ESNext with Node resolution for compatibility with Next.js and npm packages

**Linting: ESLint with Next.js Config**
- **Configuration**: Extends `next/core-web-vitals` ruleset
- **Rationale**: Enforces Next.js best practices and web performance standards

**Build System**
- **PostCSS**: Configured with Tailwind CSS and Autoprefixer plugins
- **Rationale**: Ensures CSS compatibility across browsers and processes Tailwind utilities

### Design Patterns

**Component Organization**
- **Pages-based Routing**: Files in `/pages` directory automatically become routes
- **Component Composition**: Logical separation of concerns with potential for `/components` directory (referenced in Tailwind config)
- **App Wrapper Pattern**: `_app.tsx` wraps all pages for global CSS injection and shared layout logic

**Responsive Design Approach**
- Mobile-first utility classes with Tailwind's responsive prefixes
- Fixed navigation with backdrop blur for modern aesthetic
- Breakpoint-aware navigation (hidden mobile menu on small screens)

**Animation Strategy**
- Custom keyframe animations defined in Tailwind config
- Utility classes for reusable animation patterns (fade-in, slide-up, pulse-slow)
- CSS-based animations for performance over JavaScript-heavy solutions

## External Dependencies

### Core Framework Dependencies
- **Next.js 15.2.3**: Full-stack React framework with SSR, routing, and API routes
- **React 19.0.0 / React DOM 19.0.0**: UI library and DOM rendering engine

### Styling and UI
- **Tailwind CSS 3.4.18**: Utility-first CSS framework
- **PostCSS 8.5.6**: CSS transformation tool
- **Autoprefixer 10.4.22**: Automatic vendor prefix addition for CSS
- **Google Fonts**: Inter and Lexend font families loaded via CDN

### Development Tools
- **TypeScript 5.8.2**: Static type checking
- **ESLint 9.23.0**: Code linting
- **@types packages**: TypeScript definitions for Node, React, and React DOM

### Hosting Environment
- **Replit**: Cloud development and hosting platform
  - Custom domain handling via environment variables
  - Port 5000 configuration for development and production servers
  - Hostname binding to 0.0.0.0 for external access

### Build and Deployment
- **No external database**: Currently no database dependency (could be added with Drizzle ORM)
- **No authentication service**: Currently no auth implementation
- **No external APIs**: No third-party API integrations at present
- **Static asset serving**: Next.js built-in static file serving from `/public` directory
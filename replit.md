# BookMe - Professional Interpretation & Translation Services

## Overview

BookMe is a professional interpretation and translation services booking platform for Ra'ad Mahmoud Al-Abbo and the Iraqi ProLingo Network. The application provides bilingual support (English/Arabic) for booking interpretation services and translation requests with integrated WhatsApp communication for service confirmation.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend, backend, and database layers:

- **Frontend**: React-based SPA with TypeScript, utilizing Vite for build tooling
- **Backend**: Express.js REST API with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for persistent data management (integrated Dec 28, 2025)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **React Router**: Using Wouter for lightweight client-side routing
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Internationalization**: Custom language context supporting English and Arabic with RTL layout
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Form Management**: React Hook Form with Zod validation

### Backend Architecture
- **Express.js**: RESTful API server with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL adapter (@neondatabase/serverless)
- **Data Validation**: Zod schemas for request/response validation
- **Storage Pattern**: Interface-based storage layer with in-memory fallback

### Database Schema
Three main entities:
- **Users**: Basic authentication (username/password)
- **Bookings**: Interpretation services with date ranges, service types, client details
- **Translations**: Document translation requests with word count pricing

### API Endpoints
- `GET/POST /api/bookings` - Booking management
- `PATCH /api/bookings/:id/status` - Status updates
- `GET/POST /api/translations` - Translation request management
- `PATCH /api/translations/:id/status` - Translation status updates

## Data Flow

1. **Service Booking**: Client selects service type → fills booking form → data validated → stored in database → WhatsApp message generated
2. **Translation Request**: Client inputs word count → calculates pricing → form submission → database storage → WhatsApp integration
3. **Real-time Updates**: TanStack Query manages server state with automatic refetching and caching

## External Dependencies

### Core Technologies
- **Database**: Neon PostgreSQL (serverless)
- **UI Framework**: React 18 with TypeScript
- **CSS Framework**: Tailwind CSS with PostCSS
- **Build Tool**: Vite with React plugin

### Third-party Integrations
- **WhatsApp**: Message generation for booking confirmations (client-side URL generation)
- **Fonts**: Google Fonts (Inter for English, Cairo for Arabic)
- **Icons**: Font Awesome for iconography

### Development Tools
- **Drizzle Kit**: Database migrations and schema management
- **ESBuild**: Server-side bundling for production
- **Replit Integration**: Development environment with cartographer plugin

## Deployment Strategy

### Development
- Vite dev server for frontend hot reload
- tsx for TypeScript execution in development
- Automatic browser refresh and error overlay

### Production Build
- Frontend: Vite build → static assets in dist/public
- Backend: ESBuild → bundled Node.js application in dist/
- Database: Drizzle migrations applied via `db:push` command

### Environment Configuration
- `NODE_ENV` for environment detection
- `DATABASE_URL` for PostgreSQL connection
- Replit-specific configurations for hosted environment

## Changelog

- June 28, 2025. Initial setup
- December 28, 2025. PostgreSQL database integration completed - switched from in-memory storage to persistent database storage with Drizzle ORM

## User Preferences

Preferred communication style: Simple, everyday language.
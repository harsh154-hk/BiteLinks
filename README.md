## Project Setup

This project uses Next.js App Router with TypeScript and Tailwind CSS.

### Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Getting Started

```bash
npm install
npm run dev
```

## App Structure

This project uses Next.js App Router with route groups.

### Route Groups
- `(public)` → Website pages (Home, Login)
- `dashboard` → Authenticated app pages

### Layouts
- Root layout → HTML + global styles
- Public layout → Navbar + Footer
- Dashboard layout → Sidebar + Navbar

## Dashboard

The dashboard uses a dedicated layout with:
- Fixed sidebar navigation
- Top navbar
- Content area

### Dashboard Pages
- `/dashboard` → URL Shortener
- `/dashboard/settings` → User settings

UI components are built using shadcn/ui.

## Backend (Supabase)

This project uses Supabase for backend services.

### Supabase Setup
- Auth
- Database (PostgreSQL)
- Server-side sessions

Environment variables are stored in `.env.local`.

Required variables:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

## Authentication

Authentication is handled using Supabase Auth.

### Features
- Email + password login
- Email + password signup
- Persistent sessions
- Logout support

Auth actions are handled on the client using Supabase browser client.

## Route Protection

Dashboard routes are protected using Next.js middleware.

### Behavior
- Unauthenticated users are redirected to `/login`
- Authentication is checked server-side
- Public routes remain accessible

This ensures secure access control for all dashboard pages.

## Account Deletion

Users can permanently delete their account from the dashboard.

### Implementation
- Uses server actions
- Supabase Admin API (service role key)
- Secure server-side execution

This ensures safe and irreversible account deletion.

## URL Shortener – Data Model

The URL shortener uses a `short_urls` table with:

- User ownership (`user_id`)
- Unique short codes
- Row Level Security (RLS)

All URLs are isolated per user using Supabase RLS policies.

## URL Shortener – Core Logic

Users can:
- Create short URLs
- View their own URLs

Implementation details:
- Server Actions
- Supabase RLS enforcement
- Secure user ownership


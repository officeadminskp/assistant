# Project Context & Instructions: Office Assistant Job Services

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Backend & Database:** Supabase (PostgreSQL with Row-Level Security, Supabase Auth, Supabase Storage)
- **Language:** TypeScript

## Project Architecture & Current Status
- **Completed:** Basic project structure, homepage, and database schema with Row-Level Security (`supabase/schema.sql`).
- **In Progress / Remaining Features:**
  1. Authentication (Login, Signup, Session management, Protected routes via Middleware)
  2. Job Search & Details (`/jobs` listing with filters, `/jobs/[id]` detail view)
  3. Job Posting (`/jobs/new` or employer dashboard form)
  4. User & Admin Dashboards (`/dashboard`, `/admin`)
  5. CV Upload (Private Supabase Storage bucket named `cvs`)
  6. Contact Page (`/contact`)

## Coding Standards & Rules
1. **Next.js 14 Conventions:**
   - Default to React Server Components (RSC) for data fetching.
   - Use `'use client'` only when interactivity, hooks (`useState`, `useEffect`), or browser APIs are required.
   - Use Next.js Server Actions for form submissions and data mutations.
2. **Supabase Integration:**
   - Always use the `@supabase/ssr` package pattern for creating server and client Supabase instances.
   - Respect the existing tables and Row-Level Security (RLS) policies defined in `supabase/schema.sql`. Do not bypass RLS using the service role key on client-facing routes.
   - For CV uploads, always target the private storage bucket named `cvs` and generate signed URLs for viewing/downloading.
3. **UI & Styling:**
   - Use clean, responsive Tailwind CSS utility classes.
   - Ensure all sample/seed job data is clearly marked with a `DEMO` badge or label so users know they are not real vacancies.
4. **Error Handling & Validation:**
   - Validate all form inputs (e.g., using Zod) before sending data to Supabase.
   - Return clear, user-friendly error messages for auth failures, unauthorized access, or failed file uploads.

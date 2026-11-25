# Office Assistant Job Services

Next.js 14 + Tailwind + Supabase (PostgreSQL, Auth, Storage).

## Run locally
1. Install Node 18+.
2. `npm install`
3. Create a free project at supabase.com and run `supabase/schema.sql` in its SQL editor.
4. Create a private Storage bucket named `cvs`.
5. `cp .env.example .env.local` and fill in your Supabase keys.
6. `npm run dev`, then open http://localhost:3000

## Deploy
Push to GitHub, import the repo into Vercel, add the same environment variables, deploy.

## Status
Done: project structure, homepage, database schema with row-level security.
Next: auth, jobs search and details, post a job, dashboards, admin panel, CV upload, contact page.
All sample jobs are labelled DEMO and are not real vacancies.

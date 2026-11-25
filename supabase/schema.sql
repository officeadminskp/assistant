create type user_role as enum ('seeker','employer','admin');
create type job_status as enum ('pending','approved','rejected');
create type app_status as enum ('submitted','reviewed','shortlisted','rejected');

create table profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text not null, phone text, role user_role not null default 'seeker',
  cv_path text, company_name text, created_at timestamptz default now()
);
create table categories (id serial primary key, name text unique not null);
create table jobs (
  id bigserial primary key, employer_id uuid references profiles(id) on delete cascade,
  category_id int references categories(id), title text not null, company text not null,
  location text not null, salary_min int, salary_max int, job_type text, qualification text,
  experience text, skills text[], description text not null, deadline date,
  is_demo boolean default false, status job_status default 'pending', created_at timestamptz default now()
);
create table applications (
  id bigserial primary key, job_id bigint references jobs(id) on delete cascade,
  seeker_id uuid references profiles(id) on delete cascade, cover_note text,
  status app_status default 'submitted', created_at timestamptz default now(), unique(job_id, seeker_id)
);
create table bookmarks (
  seeker_id uuid references profiles(id) on delete cascade,
  job_id bigint references jobs(id) on delete cascade, primary key (seeker_id, job_id)
);
create table messages (id bigserial primary key, name text, email text, body text, created_at timestamptz default now());

insert into categories(name) values ('Office Assistant'),('Data Entry Operator'),('Computer Operator'),
 ('Receptionist'),('Admin Assistant'),('Clerk'),('Typist'),('Office Coordinator'),('Personal Assistant');

alter table profiles enable row level security;
alter table jobs enable row level security;
alter table applications enable row level security;
alter table bookmarks enable row level security;
create policy "own profile" on profiles for all using (auth.uid() = id);
create policy "public approved jobs" on jobs for select using (status = 'approved');
create policy "employer manages own jobs" on jobs for all using (auth.uid() = employer_id);
create policy "seeker own applications" on applications for all using (auth.uid() = seeker_id);
create policy "seeker own bookmarks" on bookmarks for all using (auth.uid() = seeker_id);

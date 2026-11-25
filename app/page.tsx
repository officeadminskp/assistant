import Link from "next/link";
const categories = ["Office Assistant","Data Entry Operator","Computer Operator","Receptionist","Admin Assistant","Clerk","Typist","Office Coordinator","Personal Assistant"];
const demoJobs = [
  { id: 1, title: "Office Assistant", company: "Demo Company A", location: "Lahore", salary: "PKR 35,000–45,000" },
  { id: 2, title: "Data Entry Operator", company: "Demo Company B", location: "Sheikhupura", salary: "PKR 30,000–40,000" },
  { id: 3, title: "Receptionist", company: "Demo Company C", location: "Faisalabad", salary: "PKR 32,000–42,000" },
];
export default function Home() {
  return (<>
    <section className="bg-sky py-20 text-center">
      <h1 className="text-4xl font-bold text-navy md:text-5xl">Find Your Dream Office Assistant Job</h1>
      <p className="mx-auto mt-4 max-w-xl">We connect job seekers with administrative roles and help employers reach candidates.</p>
      <form action="/jobs" className="mx-auto mt-8 flex max-w-2xl flex-col gap-2 px-4 sm:flex-row">
        <input name="q" placeholder="Job title" aria-label="Job title" className="flex-1 rounded border p-3" />
        <input name="location" placeholder="Location" aria-label="Location" className="flex-1 rounded border p-3" />
        <button className="rounded bg-navy px-6 py-3 font-semibold text-white">Search</button>
      </form>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/jobs" className="rounded bg-navy px-6 py-3 text-white">Find Jobs</Link>
        <Link href="/post-job" className="rounded border border-navy px-6 py-3 text-navy">Post a Job</Link>
      </div>
    </section>
    <section className="mx-auto max-w-6xl p-6">
      <h2 className="mb-4 text-2xl font-bold text-navy">Latest Jobs <span className="text-sm font-normal">(demo listings)</span></h2>
      <div className="grid gap-4 md:grid-cols-3">{demoJobs.map(j=>(
        <Link key={j.id} href={`/jobs/${j.id}`} className="rounded-lg border p-5 shadow-sm transition hover:shadow-md">
          <span className="rounded bg-sky px-2 text-xs text-navy">DEMO</span>
          <h3 className="mt-2 font-semibold text-navy">{j.title}</h3>
          <p className="text-sm">{j.company} · {j.location}</p><p className="mt-1 text-sm">{j.salary}</p>
        </Link>))}</div>
    </section>
    <section className="mx-auto max-w-6xl p-6">
      <h2 className="mb-4 text-2xl font-bold text-navy">Popular Categories</h2>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">{categories.map(c=>
        <Link key={c} href={`/jobs?category=${encodeURIComponent(c)}`} className="rounded border p-4 text-navy hover:bg-sky">{c}</Link>)}</div>
    </section>
    <section className="mx-auto max-w-6xl p-6">
      <h2 className="mb-4 text-2xl font-bold text-navy">Why Choose Us</h2>
      <ul className="grid gap-4 md:grid-cols-3">
        {["Focused on office and admin roles","Free CV upload and job bookmarking","Employer posts reviewed before going live"].map(t=><li key={t} className="rounded bg-sky p-5 text-navy">{t}</li>)}
      </ul>
    </section>
  </>);
}

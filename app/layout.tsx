import "./globals.css";
import Link from "next/link";
export const metadata = {
  title: "Office Assistant Job Services",
  description: "Find office assistant, data entry, receptionist and admin jobs.",
};
const links = [["Home","/"],["Find Jobs","/jobs"],["Categories","/categories"],["About","/about"],["Contact","/contact"]];
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body>
      <header className="bg-navy text-white">
        <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <Link href="/" className="text-lg font-bold">Office Assistant <span className="text-sky">Job Services</span></Link>
          <ul className="hidden gap-6 md:flex">{links.map(([t,h])=><li key={h}><Link href={h}>{t}</Link></li>)}</ul>
          <Link href="/login" className="rounded bg-sky px-4 py-2 font-semibold text-navy">Login</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="mt-16 bg-navy p-8 text-center text-sm text-sky">© Office Assistant Job Services. Listings marked DEMO are samples only.</footer>
    </body></html>
  );
}

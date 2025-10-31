import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const navigation = [
  { href: "/", label: "Home" },
  { href: "/systems", label: "Systems" },
  { href: "/trading-assistant", label: "Trading Assistant" },
  { href: "/about", label: "About" },
  { href: "/learn", label: "Learn" },
  { href: "/legal", label: "Legal" },
];

export const metadata: Metadata = {
  title: {
    default: "BUXI DIGITAL | Smarter Systems. Honest Automation.",
    template: "%s | BUXI DIGITAL",
  },
  description:
    "Discover BUXI DIGITAL's trading ecosystem, automation systems, and the BUXI Trading Assistant for high-trust investing support.",
  metadataBase: new URL("https://buxidigital.com"),
  openGraph: {
    title: "BUXI DIGITAL Trading Automation",
    description:
      "Explore smart trading systems, affiliate platforms, and the BUXI Trading Assistant for responsible automation.",
    type: "website",
    url: "https://buxidigital.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUXI DIGITAL Trading Automation",
    description:
      "Explore smart trading systems, affiliate platforms, and the BUXI Trading Assistant for responsible automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="radial-gradient">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-(--accent) selection:text-black`}
      >
        <div className="relative flex min-h-screen flex-col">
          <div
            className="grid-overlay pointer-events-none fixed inset-0 -z-10"
            aria-hidden
          />
          <header className="sticky top-0 z-40 border-b border-white/5 bg-[#05060f]/80 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold text-white transition hover:text-(--accent)"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--accent) bg-white/5 text-sm font-semibold uppercase tracking-widest text-(--accent)">
                  BX
                </span>
                <span className="font-playfair text-xl font-semibold tracking-tight">
                  BUXI DIGITAL
                </span>
              </Link>
              <nav className="hidden gap-6 text-sm font-medium uppercase tracking-widest text-white/70 md:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative transition hover:text-(--accent)"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/trading-assistant"
                className="button-glow rounded-full border border-(--accent) bg-(--accent) px-4 py-2 text-sm font-semibold uppercase tracking-widest text-black shadow-[0_0_25px_rgba(57,255,20,0.35)] transition hover:bg-(--accent)/90"
              >
                Join the Assistant
              </Link>
            </div>
            <nav className="mx-auto mt-1 flex w-full max-w-6xl gap-4 overflow-x-auto px-6 pb-4 text-[11px] uppercase tracking-[0.35em] text-white/60 md:hidden">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="shrink-0 rounded-full border border-white/10 px-4 py-2 transition hover:border-(--accent) hover:text-(--accent)"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main className="flex-1">
            <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
              {children}
            </div>
          </main>
          <footer className="mt-auto border-t border-white/5 bg-[#05060f]/80 py-10 text-sm text-white/60 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} BUXI DIGITAL. Smarter systems, honest
                automation.
              </p>
              <div className="flex flex-wrap items-center gap-3 uppercase tracking-wider">
                <Link
                  href="mailto:hello@buxidigital.com"
                  className="text-white transition hover:text-(--accent)"
                >
                  hello@buxidigital.com
                </Link>
                <span className="hidden h-4 w-px bg-white/20 md:block" />
                <Link
                  href="/legal"
                  className="text-white/70 transition hover:text-(--accent)"
                >
                  Legal
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

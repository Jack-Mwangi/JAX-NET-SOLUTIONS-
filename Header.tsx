import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 lg:px-8 w-full border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          ModernSite
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

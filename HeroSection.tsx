import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background image with reduced opacity */}
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{
          backgroundImage: "url('/laptop-image.jpg')",
          opacity: 0.3,
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern z-[-2]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Create Stunning Websites That Convert
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Build beautiful, responsive websites that drive results. Our modern designs are optimized for user engagement and conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      title: "Responsive Design",
      description: "Our websites look stunning on any device, from desktop to mobile.",
      icon: "/0.svg",
    },
    {
      title: "Modern Aesthetics",
      description: "Clean, contemporary designs that align with your brand identity.",
      icon: "/1.svg",
    },
    {
      title: "Performance Optimized",
      description: "Lightning-fast load times for an exceptional user experience.",
      icon: "/2.svg",
    },
    {
      title: "Secure Framework",
      description: "Built-in security features to protect your website and users.",
      icon: "/3.svg",
    },
    {
      title: "User-Friendly CMS",
      description: "Easy content management systems that anyone can use.",
      icon: "/4.svg",
    },
    {
      title: "SEO Ready",
      description: "Optimized code that helps your site rank higher in search results.",
      icon: "/5.svg",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Powerful Features for Your Success
          </h2>
          <p className="text-lg text-muted-foreground">
            Our websites combine beautiful design with powerful functionality to drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature) => (
            <div key={feature.title} className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

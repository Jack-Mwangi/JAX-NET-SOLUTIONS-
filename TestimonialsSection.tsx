export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      content:
        "\"Working with ModernSite was a game-changer for our business. Our new website has increased conversions by 45% in just three months. The design is stunning and the functionality is exactly what we needed.\"",
      stars: 5,
    },
    {
      name: "David Chen",
      role: "CEO, Startup Innovations",
      content:
        "\"We needed a website that could scale with our rapid growth. ModernSite delivered a beautiful, responsive design that our customers love. Their attention to detail and technical expertise is unmatched.\"",
      stars: 5,
    },
    {
      name: "Michelle Thompson",
      role: "Owner, Boutique Retail",
      content:
        "\"Our e-commerce site needed a complete overhaul. ModernSite understood our vision perfectly and created a website that perfectly represents our brand. Sales have increased by 70% since launch!\"",
      stars: 5,
    },
  ];

  // Since stars are fixed elements in a UI, using index as key is acceptable here
  // as the order never changes and they are not conditionally rendered
  const StarRating = ({ count }: { count: number }) => {
    // Create an array with unique IDs for each star
    const stars = Array.from({ length: count }, (_, i) => `star-${testimonials.length}-${i}`);

    return (
      <div className="flex text-yellow-400">
        {stars.map((id) => (
          <img
            key={id}
            src="/star.svg"
            alt=""
            width={24}
            height={24}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. See what our clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-lg p-6 border shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{testimonial.content}</p>
              <StarRating count={testimonial.stars} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

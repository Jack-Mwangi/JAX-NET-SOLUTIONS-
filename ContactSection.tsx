import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteType: "",
    requirements: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Send form data to our API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          // Make it clear this should be sent to the specific email
          to: "mwangijackson140@gmail.com",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error submitting form");
      }

      setSubmitMessage("Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        websiteType: "",
        requirements: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const websiteTypes = [
    "E-commerce / Online Store",
    "Business / Corporate",
    "Portfolio / Personal",
    "Blog / News",
    "Landing Page",
    "Web Application",
    "Social Media Platform",
    "Educational / Course Website",
    "Other",
  ];

  const budgetRanges = [
    "Less than $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "Not sure yet",
  ];

  const timelineOptions = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "No rush",
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Let's Build Your Dream Website
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to take your online presence to the next level? Get in touch with us today and
              let's discuss how we can help you achieve your goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span>hello@modernsite.com</span>
              </div>
              <div className="flex items-center">
                <span>(123) 456-7890</span>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and we'll get back to you soon.
            </p>

            {submitMessage && (
              <div className={`p-4 mb-6 rounded-md ${submitMessage.includes("error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                {submitMessage}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name field */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Phone field */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="phone"
                >
                  Phone (Optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Website Type field */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="websiteType"
                >
                  What type of website do you need? <span className="text-red-500">*</span>
                </label>
                <select
                  id="websiteType"
                  name="websiteType"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                  value={formData.websiteType}
                  onChange={handleChange}
                >
                  <option value="">Select website type</option>
                  {websiteTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="requirements"
                >
                  Key Requirements/Features
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Please list the main features you need for your website"
                  value={formData.requirements}
                  onChange={handleChange}
                />
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="budget"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="timeline"
                >
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Additional Message */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us more about your project and any specific requirements"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 py-2 w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

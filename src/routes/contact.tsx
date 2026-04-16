import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact – Bone Physiotherapy Clinic" },
      { name: "description", content: "Book an appointment at Bone Physiotherapy Clinic, Safilguda, Secunderabad. Call 9390370782." },
      { property: "og:title", content: "Contact Bone Physiotherapy Clinic" },
      { property: "og:description", content: "Book your physiotherapy appointment today." },
    ],
  }),
  component: ContactPage,
});

const serviceOptions = [
  "Orthopaedic Care",
  "Neuro Rehabilitation",
  "Sports Rehabilitation",
  "Elderly Wellness",
  "Post-Surgery Rehab",
  "Back & Neck Pain",
  "Joint Pain & Arthritis",
  "Other",
];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "9390370782", href: "tel:9390370782" },
  { icon: Mail, label: "Email", value: "bonephysiotherapy@gmail.com", href: "mailto:bonephysiotherapy@gmail.com" },
  { icon: MapPin, label: "Address", value: "Beside Lucid Diagnostics, Plot No: 26-113, Balram Nagar, Safilguda, Secunderabad – 500047" },
  { icon: Clock, label: "Hours", value: "Monday to Saturday: 9:30 AM – 8:30 PM" },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", age: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I want to book an appointment.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AAge: ${encodeURIComponent(form.age)}%0AService: ${encodeURIComponent(form.service)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919390370782?text=${msg}`, "_blank");
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-medical-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your recovery? Book an appointment or reach out to us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <SectionHeading title="Book an Appointment" center={false} badge="Appointment Form" />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={update("phone")}
                      className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Age</label>
                    <input
                      type="number"
                      value={form.age}
                      onChange={update("age")}
                      className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="Your age"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service *</label>
                    <select
                      required
                      value={form.service}
                      onChange={update("service")}
                      className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                    placeholder="Describe your problem or concern..."
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  Send via WhatsApp
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <SectionHeading title="Contact Information" center={false} badge="Reach Us" />
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-sm border border-border">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-light shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

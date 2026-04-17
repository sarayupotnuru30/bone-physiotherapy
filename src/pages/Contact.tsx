import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const serviceOptions = [
  "Orthopaedic Care",
  "Neuro Rehabilitation",
  "Sports Rehabilitation",
  "Elderly Wellness",
  "Post-Surgery Rehab",
  "Back & Neck Pain",
  "Joint Pain & Arthritis",
  "Knee Replacement",
  "Hip Replacement",
  "Arthroscopy Surgery",
  "Other",
];

const contactBlocks = [
  { icon: Phone, label: "Call Us", value: "9390370782", href: "tel:9390370782", color: "bg-primary/10 text-primary" },
  { icon: Mail, label: "Email Us", value: "bonephysiotherapy@gmail.com", href: "mailto:bonephysiotherapy@gmail.com", color: "bg-medical-light text-medical-dark" },
  { icon: MapPin, label: "Visit Us", value: "Beside Lucid Diagnostics, Plot No: 26-113, Balram Nagar, Safilguda, Secunderabad – 500047", color: "bg-accent text-accent-foreground" },
  { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9:30 AM – 8:30 PM", color: "bg-secondary text-secondary-foreground" },
];

export default function ContactPage() {
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
      <section className="py-24 bg-gradient-to-br from-medical-light via-background to-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block mb-3 px-5 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground">Contact Us</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your recovery? Book an appointment or reach out to us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Blocks */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactBlocks.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-1">{item.label}</h3>
                {item.href ? (
                  <a href={item.href} className="text-sm text-primary hover:underline font-medium break-all">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl shadow-2xl border border-border p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                Appointment
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Book an Appointment</h2>
              <p className="mt-2 text-muted-foreground">Fill out the form and we'll connect with you via WhatsApp</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Age</label>
                  <input
                    type="number"
                    value={form.age}
                    onChange={update("age")}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Your age"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Service *</label>
                  <select
                    required
                    value={form.service}
                    onChange={update("service")}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  placeholder="Describe your problem or concern..."
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full text-base py-4">
                Send via WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

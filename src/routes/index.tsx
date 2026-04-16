import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Heart, Zap, Users, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import DoctorCard from "@/components/DoctorCard";
import ServiceCard from "@/components/ServiceCard";
import heroImg from "@/assets/hero-physio.jpg";
import orthoImg from "@/assets/ortho-care.jpg";
import neuroImg from "@/assets/neuro-rehab.jpg";
import sportsImg from "@/assets/sports-rehab.jpg";
import elderlyImg from "@/assets/elderly-care.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const WHATSAPP_URL = "https://wa.me/919390370782?text=Hi%2C%20I%20want%20to%20book%20an%20appointment.";

const servicesPreview = [
  { image: orthoImg, title: "Orthopaedic Care", description: "Expert treatment for fractures, joint disorders, and musculoskeletal conditions." },
  { image: neuroImg, title: "Neuro Rehabilitation", description: "Specialized recovery programs for stroke, spinal cord injuries & coordination." },
  { image: sportsImg, title: "Sports Rehabilitation", description: "Get back in the game with targeted sports injury recovery programs." },
  { image: elderlyImg, title: "Elderly Wellness", description: "Gentle, effective care for arthritis, mobility & chronic pain management." },
];

const whyUs = [
  { icon: Shield, title: "Experienced Professionals", desc: "Certified specialists with years of clinical expertise" },
  { icon: Heart, title: "Personalized Care", desc: "Treatment plans tailored to your unique needs" },
  { icon: Zap, title: "Advanced Techniques", desc: "Latest evidence-based therapy methods and equipment" },
  { icon: Users, title: "Patient-first Approach", desc: "Your comfort and recovery are our top priority" },
];

const testimonials = [
  { name: "Rajesh K.", text: "After my knee surgery, the rehab here was exceptional. I'm walking pain-free now!", rating: 5 },
  { name: "Priya S.", text: "The best physiotherapy clinic in Secunderabad. Dr. Chaitanya is incredibly skilled.", rating: 5 },
  { name: "Anand M.", text: "My chronic back pain is finally manageable. The personalized treatment made all the difference.", rating: 5 },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Physiotherapy consultation" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm">
              Expert Physiotherapy & Orthopaedic Care
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
              Restore Movement.{" "}
              <span className="text-primary">Relieve Pain.</span>{" "}
              Live Better.
            </h1>
            <p className="mt-6 text-lg text-background/80 leading-relaxed max-w-xl">
              Advanced Physiotherapy & Orthopedic Care for a Pain-Free Life
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Contact on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doctor */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Meet Our Expert" title="Your Health, Our Priority" />
          <DoctorCard />
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="Comprehensive Care Solutions"
            description="From orthopedic rehabilitation to sports recovery, we offer a full spectrum of physiotherapy services."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesPreview.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services" className="gap-2">
                View All Services <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-medical-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Why Choose Us" title="Trusted by Hundreds of Patients" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-medical-light">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Testimonials" title="What Our Patients Say" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <p className="mt-4 font-heading font-bold text-foreground text-sm">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              Book an appointment today and take the first step toward a pain-free life.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

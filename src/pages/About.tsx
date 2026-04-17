import { motion } from "framer-motion";
import { CheckCircle2, Award, Clock, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import DoctorCard from "@/components/DoctorCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import missionImg from "@/assets/about-mission.jpg";
import teamImg from "@/assets/about-team.jpg";

const specialties = [
  "Orthopedic Physiotherapy",
  "Post-Surgery Rehabilitation",
  "Spine & Back Pain Treatment",
  "Sports Injury Management",
  "Joint Pain & Arthritis Care",
  "Home Care Physiotherapy",
  "Neuro Rehabilitation",
];

const stats = [
  { icon: Users, value: "5000+", label: "Patients Treated" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Clock, value: "98%", label: "Recovery Rate" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-medical-light via-background to-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block mb-3 px-5 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
              Restoring Movement, <span className="text-primary">Changing Lives</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              At Bone Physiotherapy Clinic, we specialize in restoring movement, reducing pain, and improving quality of life through expert physiotherapy care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <s.icon className="h-8 w-8 text-primary-foreground/80 mb-2" />
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">{s.value}</p>
                <p className="text-sm text-primary-foreground/70">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <img src={missionImg} alt="Patient rehabilitation" className="rounded-3xl shadow-2xl w-full" loading="lazy" width={1280} height={720} />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-medical-light rounded-3xl -z-10" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Dedicated to Your Recovery
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We combine advanced medical expertise with compassionate care to help every patient achieve their fullest potential. Our evidence-based approach ensures optimal outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading badge="What We Do" title="Our Specialties" center={false} />
              <div className="grid sm:grid-cols-2 gap-3">
                {specialties.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground text-sm">{s}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <img src={teamImg} alt="Our medical team" className="rounded-3xl shadow-2xl w-full" loading="lazy" width={1280} height={720} />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Doctor" title="Meet Your Specialist" />
          <DoctorCard />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-medical-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Patient Stories" title="What Our Patients Say" />
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  );
}

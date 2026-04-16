import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import DoctorCard from "@/components/DoctorCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About – Bone Physiotherapy Clinic" },
      { name: "description", content: "Learn about Bone Physiotherapy Clinic – expert physiotherapy & orthopedic care in Secunderabad." },
      { property: "og:title", content: "About Bone Physiotherapy Clinic" },
      { property: "og:description", content: "Expert physiotherapy & orthopedic care in Secunderabad." },
    ],
  }),
  component: AboutPage,
});

const specialties = [
  "Orthopedic Physiotherapy",
  "Post-Surgery Rehabilitation",
  "Spine & Back Pain Treatment",
  "Sports Injury Management",
  "Joint Pain & Arthritis Care",
  "Home Care Physiotherapy",
  "Neuro Rehabilitation",
];

function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-medical-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Restoring Movement, Changing Lives
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              At Bone Physiotherapy Clinic, we specialize in restoring movement, reducing pain, and improving quality of life through expert physiotherapy care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="What We Do" title="Our Specialties" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {specialties.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-all"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium text-foreground">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Doctor" title="Meet Your Specialist" />
          <DoctorCard />
        </div>
      </section>
    </div>
  );
}

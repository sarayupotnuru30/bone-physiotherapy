import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import orthoImg from "@/assets/ortho-care.jpg";
import neuroImg from "@/assets/neuro-rehab.jpg";
import sportsImg from "@/assets/sports-rehab.jpg";
import elderlyImg from "@/assets/elderly-care.jpg";
import heroImg from "@/assets/hero-physio.jpg";
import strockrecovery from "@/assets/stroke-recovery.jpg";
import spinalcord from "@/assets/spinal-cord.jpg";
import balence from "@/assets/balence.webp";
import postsurgery from "@/assets/post-surgery.jpg";
import ligament from "@/assets/ligament.webp";
import muscletears from "@/assets/muscle-tears.webp";
import jointinjuries from "@/assets/joint-injuries.jpg";
import performance from "@/assets/performance.jpg";
import arthiritis from "@/assets/arthritis.jpg";
import mobility from "@/assets/mobility.webp";
import balencetraining from "@/assets/balence-training.jpg";
import chronicpain from "@/assets/chronic-pain.jpg";




const categories = [
  {
    title: "Orthopaedic & Musculoskeletal Care",
    services: [
      { image: orthoImg, title: "Fractures & Bone Injuries", description: "Expert treatment and rehabilitation for all types of fractures and bone trauma." },
      { image: heroImg, title: "Joint Disorders", description: "Specialized care for arthritis, joint stiffness, and degenerative conditions." },
      { image: sportsImg, title: "Muscle & Soft Tissue Injuries", description: "Targeted therapy for sprains, strains, and soft tissue damage." },
      { image: neuroImg, title: "Back & Neck Pain", description: "Evidence-based treatment for chronic and acute spinal conditions." },
    ],
  },
  {
    title: "Neurological Rehabilitation",
    services: [
      { image: strockrecovery, title: "Stroke Recovery", description: "Comprehensive rehabilitation programs to regain function after stroke." },
      { image: spinalcord, title: "Spinal Cord Injuries", description: "Specialized therapy for spinal cord injury recovery and mobility." },
      { image: balence, title: "Balance & Coordination", description: "Targeted exercises to improve balance, prevent falls, and restore coordination." },
      { image: postsurgery, title: "Post-Surgery Rehab", description: "Guided recovery programs after neurological surgeries." },
    ],
  },
  {
    title: "Sports Rehabilitation",
    services: [
      { image: ligament, title: "Ligament Injuries", description: "ACL, MCL, and other ligament injury treatment and recovery programs." },
      { image: muscletears, title: "Muscle Tears", description: "Fast-track recovery for muscle tears with targeted rehabilitation." },
      { image: jointinjuries, title: "Joint Injuries", description: "Expert care for sports-related joint injuries and dislocations." },
      { image: performance, title: "Performance Training", description: "Physiotherapy-guided performance enhancement and injury prevention." },
    ],
  },
  {
    title: "Elderly & Wellness Care",
    services: [
      { image: arthiritis, title: "Arthritis Care", description: "Gentle, effective management of arthritis symptoms and mobility." },
      { image: mobility, title: "Mobility Improvement", description: "Programs designed to maintain and improve independence in daily activities." },
      { image: balencetraining, title: "Balance Training", description: "Fall prevention and balance improvement exercises for seniors." },
      { image: chronicpain, title: "Chronic Pain Management", description: "Long-term pain relief strategies combining therapy and lifestyle guidance." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-medical-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Comprehensive Physiotherapy Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert care across orthopedics, neurology, sports medicine, and wellness — all under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {categories.map((cat, catIdx) => (
        <section key={cat.title} className={`py-20 ${catIdx % 2 === 1 ? "bg-surface" : ""}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={cat.title} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.services.map((s, i) => (
                <ServiceCard key={s.title} {...s} index={i} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

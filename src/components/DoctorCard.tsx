import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor.png";

const tags = ["Knee Replacement", "Hip Replacement", "Arthroscopy Surgery", "Sports Injury", "Joint Care"];

export default function DoctorCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border"
    >
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-medical-dark/20 to-transparent z-10" />
          <img
            src={doctorImg}
            alt="Dr. Chaitanya Reddy Chintham"
            className="w-full h-full object-cover object-top min-h-[400px]"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider w-fit">
            Lead Orthopaedic Surgeon
          </span>
          <h3 className="font-heading text-2xl lg:text-4xl font-bold text-foreground">
            Dr. Chaitanya Reddy Chintham
          </h3>
          <p className="text-primary font-semibold mt-2 text-lg">Consultant Orthopaedic Surgeon</p>
          <p className="text-sm text-muted-foreground mt-1">
            Bone Orthopaedic Clinic, in association with Oxycare Hospitals (ECIL | Begumpet | Gajwel)
          </p>
          <div className="mt-5 space-y-3 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              Joint pain doesn't just affect movement — it changes your routine, your confidence, and sometimes even your sleep. Whether it's a persistent knee problem, a hip issue, or a sports injury that refuses to heal, early expert care makes all the difference.
            </p>
            <p>
              From knee replacement and hip replacement to arthroscopy surgery and sports injury treatment, care is focused on restoring mobility and improving long-term joint health.
            </p>
            <p>
              If you are searching for a top orthopaedic surgeon in ECIL, Hyderabad, personalized evaluation and advanced surgical expertise are available close to you.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

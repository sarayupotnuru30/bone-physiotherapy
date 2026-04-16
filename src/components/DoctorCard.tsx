import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor.png";

export default function DoctorCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
    >
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-2 relative bg-gradient-to-br from-medical-light to-accent">
          <img
            src={doctorImg}
            alt="Dr. Chaitanya Reddy Chintham"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
          <span className="inline-block mb-2 px-3 py-1 rounded-full bg-medical-light text-medical-dark text-xs font-semibold w-fit">
            Lead Doctor
          </span>
          <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
            Dr. Chaitanya Reddy Chintham
          </h3>
          <p className="text-primary font-medium mt-1">Consultant Orthopaedic Surgeon</p>
          <p className="text-sm text-muted-foreground mt-1">Bone Orthopaedic Clinic (Safilguda | ECIL)</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Joint pain doesn't just affect movement — it impacts your daily life. From knee and hip replacements to sports injury treatments, expert care is available to restore mobility and long-term joint health.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Knee Replacement", "Hip Replacement", "Sports Injuries", "Joint Care"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
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

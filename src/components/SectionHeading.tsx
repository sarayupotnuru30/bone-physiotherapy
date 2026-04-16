import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({ badge, title, description, center = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-medical-light text-medical-dark text-xs font-semibold uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed mx-auto">{description}</p>
      )}
    </motion.div>
  );
}

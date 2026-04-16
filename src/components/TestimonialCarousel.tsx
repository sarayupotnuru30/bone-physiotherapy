import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajesh K.", role: "Knee Replacement Patient", text: "After my knee surgery, the rehab here was exceptional. I'm walking pain-free now! The team was so supportive throughout my recovery journey.", rating: 5 },
  { name: "Priya S.", role: "Back Pain Treatment", text: "The best physiotherapy clinic in Secunderabad. Dr. Chaitanya is incredibly skilled and genuinely cares about his patients.", rating: 5 },
  { name: "Anand M.", role: "Chronic Pain Management", text: "My chronic back pain is finally manageable. The personalized treatment plan made all the difference in my recovery.", rating: 5 },
  { name: "Sunita R.", role: "Sports Injury Recovery", text: "Got back to playing cricket within 3 months of my ligament injury. The sports rehab program here is world-class!", rating: 5 },
  { name: "Vikram P.", role: "Post-Surgery Rehab", text: "The post-surgery rehabilitation was thorough and professional. I regained full mobility faster than expected.", rating: 5 },
  { name: "Lakshmi D.", role: "Arthritis Care", text: "At 65, I thought my joint pain was permanent. The elderly care program here gave me back my independence.", rating: 5 },
  { name: "Karthik N.", role: "Spine Treatment", text: "Suffered from severe neck pain for years. After treatment here, I can finally work without discomfort. Highly recommended!", rating: 5 },
  { name: "Meena G.", role: "Hip Replacement Patient", text: "Dr. Chaitanya's expertise in hip replacement is remarkable. The whole experience from consultation to recovery was seamless.", rating: 5 },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 4000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const go = (dir: number) => {
    setCurrent((p) => (p + dir + testimonials.length) % testimonials.length);
    resetTimer();
  };

  const t = testimonials[current];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-card rounded-3xl shadow-xl border border-border p-8 md:p-12 min-h-[280px] flex flex-col justify-center relative overflow-hidden">
        <Quote className="absolute top-6 left-6 h-16 w-16 text-primary/10" />
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="text-center relative z-10"
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed italic font-medium">
              "{t.text}"
            </p>
            <div className="mt-6">
              <p className="font-heading font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={() => go(-1)} className="p-2 rounded-full bg-card border border-border hover:bg-accent transition-colors shadow-sm">
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); resetTimer(); }}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} className="p-2 rounded-full bg-card border border-border hover:bg-accent transition-colors shadow-sm">
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </div>
  );
}

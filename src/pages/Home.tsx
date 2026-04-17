// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { 
//   Shield, Heart, Zap, Users, ChevronRight, 
//   CheckCircle2 
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import SectionHeading from "@/components/SectionHeading";
// import ServiceCard from "@/components/ServiceCard";
// import TestimonialCarousel from "@/components/TestimonialCarousel";
// import DoctorCard from "@/components/DoctorCard"; // Added for the Doctor section

// // Assets
// import heroImg from "@/assets/hero-physio-new.jpg";
// import orthoImg from "@/assets/orthopedic.jpg";
// import neuroImg from "@/assets/neuro-rehabilitation.jpg";
// import sportsImg from "@/assets/sports-rehabilitation.jpg";
// import elderlyImg from "@/assets/elderly-welness.webp";

// const WHATSAPP_URL = "https://wa.me/919390370782?text=Hi%2C%20I%20want%20to%20book%20an%20appointment.";

// const servicesPreview = [
//   { image: orthoImg, title: "Orthopaedic Care", description: "Expert treatment for fractures, joint disorders, and musculoskeletal conditions." },
//   { image: neuroImg, title: "Neuro Rehabilitation", description: "Specialized recovery programs for stroke, spinal cord injuries & coordination." },
//   { image: sportsImg, title: "Sports Rehabilitation", description: "Get back in the game with targeted sports injury recovery programs." },
//   { image: elderlyImg, title: "Elderly Wellness", description: "Gentle, effective care for arthritis, mobility & chronic pain management." },
// ];

// const whyUs = [
//   { icon: Shield, title: "Experienced Professionals", desc: "Certified specialists with years of clinical expertise" },
//   { icon: Heart, title: "Personalized Care", desc: "Treatment plans tailored to your unique needs" },
//   { icon: Zap, title: "Advanced Techniques", desc: "Latest evidence-based therapy methods and equipment" },
//   { icon: Users, title: "Patient-first Approach", desc: "Your comfort and recovery are our top priority" },
// ];

// export default function HomePage() {
//   return (
//     <>
//       {/* Hero */}
//       <section className="relative min-h-screen flex items-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img src={heroImg} alt="Physiotherapy consultation" className="w-full h-full object-cover" width={1920} height={1080} />
//           <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/10" />
//         </div>
//         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-2xl"
//           >
//             <motion.span
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="inline-block mb-4 px-5 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary-foreground/10"
//             >
//               Expert Physiotherapy & Orthopaedic Care
//             </motion.span>
//             <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
//               Restore Movement.{" "}
//               <span className="text-primary">Relieve Pain.</span>{" "}
//               Live Better.
//             </h1>
//             <p className="mt-6 text-lg text-background/80 leading-relaxed max-w-xl">
//               Advanced Physiotherapy & Orthopedic Care for a Pain-Free Life
//             </p>
//             <div className="mt-8 flex flex-wrap gap-4">
//               <Button variant="hero" size="lg" asChild>
//                 <Link to="/contact">Book Appointment</Link>
//               </Button>
//               <Button variant="whatsapp" size="lg" asChild>
//                 <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
//                   Contact on WhatsApp
//                 </a>
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <SectionHeading
//             badge="Our Services"
//             title="Comprehensive Care Solutions"
//             description="From orthopedic rehabilitation to sports recovery, we offer a full spectrum of physiotherapy services."
//           />
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {servicesPreview.map((s, i) => (
//               <ServiceCard key={s.title} {...s} index={i} />
//             ))}
//           </div>
//           <div className="mt-10 text-center">
//             <Button variant="outline" size="lg" asChild>
//               <Link to="/services" className="gap-2">
//                 View All Services <ChevronRight className="h-4 w-4" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Doctor Section (Moved from About Page) */}
//       <section className="py-24 bg-surface">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <SectionHeading badge="Our Doctor" title="Meet Your Specialist" />
//           <DoctorCard />
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-24 bg-medical-light">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <SectionHeading badge="Why Choose Us" title="Trusted by Hundreds of Patients" />
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {whyUs.map((item, i) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-border"
//               >
//                 <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
//                   <item.icon className="h-8 w-8 text-primary" />
//                 </div>
//                 <h3 className="font-heading font-bold text-foreground text-lg">{item.title}</h3>
//                 <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <SectionHeading badge="Testimonials" title="What Our Patients Say" description="Real stories from patients who trusted us with their recovery." />
//           <TestimonialCarousel />
//         </div>
//       </section>

//       {/* CTA Banner */}
//       <section className="py-24 bg-gradient-to-br from-primary to-medical-dark relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-background blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-background blur-3xl" />
//         </div>
//         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
//               Ready to Start Your Recovery Journey?
//             </h2>
//             <h3 className="mt-4 text-primary-foreground/80 max-w-xl mx-auto text-lg">
//               Book an appointment today and take the first step toward a pain-free life.
//             </h3>
//             <div className="mt-8 flex flex-wrap justify-center gap-4">
//               <Button variant="secondary" size="lg" asChild>
//                 <Link to="/contact">Book Appointment</Link>
//               </Button>
//               <Button variant="whatsapp" size="lg" asChild>
//                 <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
//                   WhatsApp Us
//                 </a>
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }







import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Shield, Heart, Zap, Users, ChevronRight, 
  CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import DoctorCard from "@/components/DoctorCard";

// Assets
import heroImg from "@/assets/hero-physio-new.jpg";
import orthoImg from "@/assets/orthopedic.jpg";
import neuroImg from "@/assets/neuro-rehabilitation.jpg";
import sportsImg from "@/assets/sports-rehabilitation.jpg";
import elderlyImg from "@/assets/elderly-welness.webp";

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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Physiotherapy consultation" 
            className="w-full h-full object-cover" 
            width={1920} 
            height={1080} 
          />
          {/* Removed the heavy blue/dark gradient. 
              Added a very light overlay to ensure white text stays legible. 
              If you want NO overlay at all, simply delete the div below.
          */}
          <div className="absolute inset-0 bg-black/20" /> 
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4 px-5 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary-foreground/10"
            >
              Expert Physiotherapy & Orthopaedic Care
            </motion.span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Restore Movement.{" "}
              <span className="text-primary">Relieve Pain.</span>{" "}
              Live Better.
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl">
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

      {/* Services */}
      <section className="py-24">
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

      {/* Doctor Section */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Doctor" title="Meet Your Specialist" />
          <DoctorCard />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-medical-light">
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
                className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-border"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Testimonials" title="What Our Patients Say" description="Real stories from patients who trusted us with their recovery." />
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-primary to-medical-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-background blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-background blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto text-lg">
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
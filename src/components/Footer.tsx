// import { Link } from "react-router-dom";
// import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";
// import logo from "@/assets/logo2.png";

// const quickLinks = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About Us" },
//   { to: "/services", label: "Services" },
//   { to: "/contact", label: "Contact" },
// ] as const;

// const services = [
//   "Orthopaedic Care",
//   "Neuro Rehabilitation",
//   "Sports Rehabilitation",
//   "Elderly Wellness",
//   "Post-Surgery Rehab",
// ];

// export default function Footer() {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="bg-foreground text-background">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           <div>
//             <div className="flex items-center gap-3 mb-5">
//               <img src={logo} alt="Logo" className="h-12 w-auto rounded-lg" />
//               <div>
//                 <span className="font-heading font-bold text-lg block">Bone Physiotherapy</span>
//                 <span className="text-sm opacity-70">Clinic</span>
//               </div>
//             </div>
//             <p className="text-sm opacity-70 leading-relaxed">
//               Advanced physiotherapy and orthopedic care for a pain-free life. Restoring movement, relieving pain.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-heading font-bold text-base mb-5">Quick Links</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((l) => (
//                 <li key={l.to}>
//                   <Link to={l.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity" onClick={scrollToTop}>
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-heading font-bold text-base mb-5">Our Services</h4>
//             <ul className="space-y-3">
//               {services.map((s) => (
//                 <li key={s}>
//                   <Link to="/services" className="text-sm opacity-70 hover:opacity-100 transition-opacity" onClick={scrollToTop}>
//                     {s}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-heading font-bold text-base mb-5">Contact Info</h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <Phone className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
//                 <a href="tel:9390370782" className="text-sm opacity-70 hover:opacity-100 transition-opacity">9390370782</a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Mail className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
//                 <a href="mailto:bonephysiotherapy@gmail.com" className="text-sm opacity-70 hover:opacity-100 transition-opacity">bonephysiotherapy@gmail.com</a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
//                 <span className="text-sm opacity-70">Beside Lucid Diagnostics, Balram Nagar, Safilguda, Secunderabad – 500047</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Clock className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
//                 <span className="text-sm opacity-70">Mon–Sat: 9:30 AM – 8:30 PM</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-sm opacity-50">© {new Date().getFullYear()} Bone Physiotherapy Clinic. All rights reserved.</p>
//           <button
//             onClick={scrollToTop}
//             className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity"
//           >
//             Back to top <ArrowUp className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }




import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUp, Heart } from "lucide-react";
import logo from "@/assets/logo2.png";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

const services = [
  "Orthopaedic Care",
  "Neuro Rehabilitation",
  "Sports Rehabilitation",
  "Elderly Wellness",
  "Post-Surgery Rehab",
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Logo" className="h-12 w-auto rounded-lg" />
              <div>
                <span className="font-heading font-bold text-lg block">Bone Physiotherapy</span>
                <span className="text-sm opacity-70">Clinic</span>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Advanced physiotherapy and orthopedic care for a pain-free life. Restoring movement, relieving pain.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity" onClick={scrollToTop}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm opacity-70 hover:opacity-100 transition-opacity" onClick={scrollToTop}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <a href="tel:9390370782" className="text-sm opacity-70 hover:opacity-100 transition-opacity">9390370782</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <a href="mailto:bonephysiotherapy@gmail.com" className="text-sm opacity-70 hover:opacity-100 transition-opacity">bonephysiotherapy@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <span className="text-sm opacity-70">Beside Lucid Diagnostics, Balram Nagar, Safilguda, Secunderabad – 500047</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <span className="text-sm opacity-70">Mon–Sat: 9:30 AM – 8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm opacity-50 text-center md:text-left">
            © {new Date().getFullYear()} Bone Physiotherapy Clinic. All rights reserved.
          </p>

          <div className="flex justify-center items-center gap-1 text-sm">
            <span className="opacity-70">Made with</span>
            <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" />
            <span className="opacity-70 mr-1">by</span>
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-orange-500 font-medium hover:underline transition-all"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
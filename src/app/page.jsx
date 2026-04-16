import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  MessageCircle,
  Mail,
  ExternalLink,
  Globe,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Target,
  Briefcase,
  GraduationCap,
  Sparkles,
  Calendar,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

// --- Design System Constants ---
const COLORS = {
  canvas: "bg-[#F8FAFC]",
  workspace: "bg-[#FFFFFF]",
  foreground: "text-[#020617]",
  muted: "text-[#64748B]",
  primary: "bg-[#0F172A]",
  primaryText: "text-[#0F172A]",
  primaryHover: "hover:bg-[#1E293B]",
  primaryMuted: "bg-[#F1F5F9]",
  border: "border-[#E2E8F0]",
  borderStrong: "border-[#0F172A]",
  statusLow: "text-[#065F46] bg-[#D1FAE5]",
  statusMedium: "text-[#92400E] bg-[#FEF3C7]",
  statusHigh: "text-[#991B1B] bg-[#FEE2E2]",
};

// --- Components ---

const Pill = ({ children, className }) => (
  <div
    className={twMerge(
      "rounded-full px-3 py-1 text-[12px] font-medium border flex items-center gap-1.5 transition-all",
      COLORS.primaryMuted,
      COLORS.primaryText,
      "border-[#E2E8F0]",
      className,
    )}
  >
    {children}
  </div>
);

const Button = ({ children, variant = "primary", className, ...props }) => {
  const baseStyles =
    "px-5 py-2.5 rounded-[6px] text-sm font-medium transition-all flex items-center justify-center gap-2";
  const variants = {
    primary: `${COLORS.primary} text-white ${COLORS.primaryHover}`,
    secondary: `${COLORS.canvas} ${COLORS.primaryText} border ${COLORS.border} ${COLORS.primaryHover}`,
    ghost: "bg-transparent text-[#0F172A] hover:bg-[#F1F5F9]",
  };

  return (
    <button
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

const Counter = ({ target, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(target);
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <div
      ref={ref}
      className="text-[32px] font-normal tracking-tight text-[#0F172A]"
    >
      {count}
      {suffix}
    </div>
  );
};

const SectionHeading = ({ title, subtitle, badge }) => (
  <div className="mb-12">
    {badge && <Pill className="mb-4 w-fit">{badge}</Pill>}
    <h2 className="text-[24px] font-normal tracking-tight text-[#0F172A] mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[16px] text-[#64748B] max-w-2xl">{subtitle}</p>
    )}
  </div>
);

// --- Main Page Component ---

export default function ConferenceLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmitLeads = async (data) => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast.success("Thank you! Our committee will contact you soon.");
      reset();
    } catch (error) {
      console.error(error);
      toast.error(
        "Could not submit the form. Please try again or contact us via WhatsApp.",
      );
    }
  };

  const handleWhatsApp = (
    text = "Hi, I am interested in your conferences.",
  ) => {
    if (typeof window === "undefined") return;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/62811227479?text=${encodedText}`, "_blank");
  };

  return (
    <div className={twMerge("min-h-screen", COLORS.canvas)}>
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0F172A] rounded-md flex items-center justify-center">
                <Globe className="text-white" size={18} />
              </div>
              <span className="text-[18px] font-medium tracking-tight text-[#0F172A]">
                Scholarvein
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#hero"
                className="text-sm text-[#0F172A] hover:text-[#64748B] transition-all font-medium"
              >
                Overview
              </a>
              <a
                href="#why-join"
                className="text-sm text-[#64748B] hover:text-[#0F172A] transition-all"
              >
                Benefits
              </a>
              <a
                href="#how-it-works"
                className="text-sm text-[#64748B] hover:text-[#0F172A] transition-all"
              >
                Timeline
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="mailto:committee@eduglobal.org"
                className="text-[#64748B] hover:text-[#0F172A] transition-all"
              >
                <Mail size={18} />
              </a>
              <Button
                onClick={() => handleWhatsApp()}
                variant="secondary"
                className="text-sm"
              >
                <MessageCircle size={14} />
                Consult via WA
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-[#E2E8F0] bg-white"
          >
            <div className="px-6 py-4 space-y-4">
              <a
                href="#hero"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm text-[#0F172A] hover:text-[#64748B] transition-all border-b border-[#E2E8F0]"
              >
                Overview
              </a>
              <a
                href="#why-join"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm text-[#64748B] hover:text-[#0F172A] transition-all border-b border-[#E2E8F0]"
              >
                Benefits
              </a>
              <a
                href="#how-it-works"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm text-[#64748B] hover:text-[#0F172A] transition-all border-b border-[#E2E8F0]"
              >
                Timeline
              </a>
              <Button
                onClick={() => {
                  handleWhatsApp();
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4"
              >
                <MessageCircle size={14} />
                WhatsApp Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content - Now Full Width */}
      <main className={twMerge("min-h-screen", COLORS.workspace)}>
        {/* Section 2: Hero */}
        <section
          id="hero"
          className="relative min-h-[90vh] flex items-center px-6 md:px-16 pt-12 pb-24 overflow-hidden max-w-7xl mx-auto"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://raw.createusercontent.com/73329bf8-1f7b-4def-9f3b-1c6e414fb8ab/"
              alt="Conference Collage"
              className="w-full h-full object-cover opacity-[0.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-slate-50/50" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-8">
              <Pill>
                <Sparkles size={14} /> Hybrid Events
              </Pill>
              <Pill>
                <Globe size={14} /> Global Network
              </Pill>
              <Pill>
                <Award size={14} /> Scopus Indexed
              </Pill>
            </div>

            <h1 className="text-[42px] md:text-[64px] font-normal leading-[1.1] tracking-[-0.04em] text-[#0F172A] mb-8">
              Bridge the Gap Between <br className="hidden md:block" />
              Research and Global Impact.
            </h1>

            <p className="text-[18px] md:text-[20px] text-[#64748B] mb-10 max-w-2xl font-normal leading-relaxed">
              Join thousands of academics and professionals in our upcoming
              international conferences. Gain world-class insights, publication
              opportunities, and networking that lasts a lifetime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(
                      "http://bit.ly/UpcomingConference-RSF",
                      "_blank",
                    );
                  }
                }}
                className="px-8 py-4 text-base"
              >
                Explore Conferences
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="secondary"
                className="px-8 py-4 text-base"
                onClick={() => handleWhatsApp()}
              >
                Consult via WhatsApp
              </Button>
              <Button
                variant="ghost"
                className="px-8 py-4 text-base border border-[#E2E8F0]"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(
                      "https://www.researchsynergy.org/faq-how-to-submit-abstract/",
                      "_blank",
                    );
                  }
                }}
              >
                How to Submit
                <ExternalLink size={16} />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 3: Social Proof (Stats) */}
        <section className="px-6 md:px-16 py-16 bg-[#F1F5F9]/50 border-y border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-1">
              <Counter target="244" suffix="" duration={0.8} />
              <p className="text-sm text-[#64748B]">
                International Conferences
              </p>
            </div>
            <div className="space-y-1">
              <Counter target="4500" suffix="+" duration={0.8} />
              <p className="text-sm text-[#64748B]">Participants</p>
            </div>
            <div className="space-y-1">
              <Counter target="7190" suffix="+" duration={0.8} />
              <p className="text-sm text-[#64748B]">Institutions Represented</p>
            </div>
            <div className="space-y-1">
              <Counter target="87" suffix="" duration={0.8} />
              <p className="text-sm text-[#64748B]">Countries Represented</p>
            </div>
          </div>
        </section>

        {/* Section 4: Why Join Our Conferences */}
        <section id="why-join" className="px-6 md:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              badge="Why Join Us"
              title="Premium Academic Experience"
              subtitle="We provide a comprehensive ecosystem for research dissemination and professional growth."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe size={24} />,
                  title: "Global Reach",
                  desc: "Connect with experts from over 80 countries worldwide.",
                },
                {
                  icon: <Award size={24} />,
                  title: "Indexed Publication",
                  desc: "Submit your work to Scopus/Copernicus/EBSCO (etc.) indexed journals.",
                },
                {
                  icon: <Users size={24} />,
                  title: "Vibrant Networking",
                  desc: "Build meaningful collaborations across diverse disciplines.",
                },
                {
                  icon: <Target size={24} />,
                  title: "Expert Feedback",
                  desc: "Receive rigorous peer-reviews to enhance your research quality.",
                },
                {
                  icon: <Sparkles size={24} />,
                  title: "Hybrid Innovation",
                  desc: "Join virtually or physically with high-tech seamless streaming.",
                },
                {
                  icon: <TrendingUp size={24} />,
                  title: "Career Growth",
                  desc: "Gain international credentials recognized by top universities.",
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="group p-6 border border-[#E2E8F0] rounded-[6px] hover:border-[#0F172A] transition-all bg-white shadow-sm"
                >
                  <div className="mb-4 text-[#0F172A] group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-[18px] font-medium text-[#0F172A] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Audience Segmentation */}
        <section className="px-6 md:px-16 py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Designed for Your Background"
              subtitle="Tailored opportunities for every step of your professional and academic journey."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <GraduationCap size={32} />,
                  title: "For Academics",
                  points: [
                    "Scopus Publication",
                    "Oral & Poster Presentation",
                    "Scientific Networking",
                    "Research Collaboration",
                  ],
                },
                {
                  icon: <Briefcase size={32} />,
                  title: "For Practitioners",
                  points: [
                    "Industry Case Sharing",
                    "Evidence-Based Solutions",
                    "Peer Validation",
                    "Global Trend Insights",
                  ],
                },
                {
                  icon: <Users size={32} />,
                  title: "For Professionals",
                  points: [
                    "Strategic Networking",
                    "Cross-Sector Partnerships",
                    "Leadership Development",
                    "International Credentials",
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 border border-[#E2E8F0] rounded-[6px] bg-white flex flex-col items-center text-center shadow-sm"
                >
                  <div className="mb-6 text-[#0F172A]">{item.icon}</div>
                  <h3 className="text-[18px] font-medium text-[#0F172A] mb-6">
                    {item.title}
                  </h3>
                  <ul className="space-y-3 w-full text-left">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-[#64748B]"
                      >
                        <span className="text-[#0F172A] mt-0.5">-</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: How It Works */}
        <section id="how-it-works" className="px-6 md:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              badge="Process"
              title="Your Journey to Success"
              subtitle="Six simple steps to participating in the world's leading conferences."
            />

            <div className="relative">
              <div className="hidden md:block absolute top-[28px] left-[40px] right-[40px] h-[1px] bg-[#E2E8F0] z-0" />
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {[
                  {
                    step: "01",
                    title: "Registration",
                    desc: "Select conference and register your interest.",
                  },
                  {
                    step: "02",
                    title: "Submission",
                    desc: "Submit your abstract or full paper for review.",
                  },
                  {
                    step: "03",
                    title: "Review",
                    desc: "Rigorous peer-review process by experts.",
                  },
                  {
                    step: "04",
                    title: "Payment",
                    desc: "Secure conference fee through local/global channels.",
                  },
                  {
                    step: "05",
                    title: "Participation",
                    desc: "Join the conference and get your certificates.",
                  },
                  {
                    step: "06",
                    title: "Post-Conference",
                    desc: "Monitor Your Publication After the Conference.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative z-10 flex flex-col md:items-center md:text-center group"
                  >
                    <div className="w-[56px] h-[56px] rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center text-[18px] font-medium text-[#0F172A] mb-6 group-hover:border-[#0F172A] group-hover:bg-[#F1F5F9] transition-all">
                      {item.step}
                    </div>
                    <h4 className="text-[16px] font-medium text-[#0F172A] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed px-4">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Post Conference */}
        <section className="px-6 md:px-16 py-24 bg-[#F8FAFC]">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              badge="Next Steps"
              title="Post Conference"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <p className="text-sm md:text-base text-[#64748B] leading-relaxed text-center max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        {/* Section 9: Indexed in Scopus */}
        <section className="px-6 md:px-16 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-[24px] md:text-[32px] font-normal tracking-tight text-[#0F172A]">
                Indexed in Scopus Q1 and Q2
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="border border-[#E2E8F0] rounded-[10px] bg-white p-8 flex items-center justify-center min-h-[180px]">
                <img
                  src="/images/clarivate-analytics.png?v=5"
                  alt="Clarivate Analytics logo"
                  className="max-h-[110px] w-auto object-contain"
                />
              </div>
              <div className="border border-[#E2E8F0] rounded-[10px] bg-white p-8 flex items-center justify-center min-h-[180px]">
                <img
                  src="/images/scopus-logo.png"
                  alt="Scopus logo"
                  className="max-h-[110px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Indexed and Included */}
        <section className="px-6 md:px-16 py-24 bg-[#F8FAFC]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-[24px] md:text-[32px] font-normal tracking-tight text-[#0F172A]">
                Indexed and Included in the Database of
              </h2>
            </div>
            <div className="border border-[#E2E8F0] rounded-[10px] bg-white p-6 md:p-10 flex items-center justify-center">
              <img
                src="/images/indexed-database-logos.png?v=4"
                alt="Indexed and included database logos"
                className="w-full max-w-4xl h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Bottom CTA: WhatsApp */}
        <section className="px-6 md:px-16 py-24 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[28px] md:text-[40px] font-normal tracking-tight text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-slate-300 mb-10 text-[16px] md:text-[18px] max-w-2xl mx-auto">
              Chat with our committee team on WhatsApp for instant support and
              personalized guidance.
            </p>
            <Button
              onClick={() => handleWhatsApp()}
              className="bg-emerald-600 hover:bg-emerald-700 border-none px-12 py-5 rounded-full text-lg shadow-xl inline-flex"
            >
              <MessageCircle size={24} />
              Chat on WhatsApp Now
            </Button>
          </div>
        </section>
      </main>

      {/* Global Animation Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap');
        
        .font-instrument-sans {
          font-family: 'Instrument Sans', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #F8FAFC;
        }
        ::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #64748B;
        }
      `}</style>
    </div>
  );
}

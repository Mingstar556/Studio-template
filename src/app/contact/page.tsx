"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  Navigation,
} from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassButton from "@/components/ui/GlassButton";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the booking process and lead time?",
    answer:
      "We recommend booking at least 2–4 weeks in advance for commercial productions and soundstage rentals. After submitting your inquiry, our executive producer will schedule a 20-minute discovery call to finalize technical specs, equipment packages, and hold dates. A 50% deposit confirms your reservation on our studio calendar.",
  },
  {
    question: "Can we rent the studio space without hiring studio crew?",
    answer:
      "Yes. Our stages (Studio A, B, and C) are available for dry-hire by accredited production companies, creative agencies, and freelance directors. A Visibility Studio Stage Manager is always on site to assist with motorized grid operations, house power distribution, and stage safety protocols.",
  },
  {
    question: "What camera systems and lighting packages are included?",
    answer:
      "Our in-house equipment inventory includes ARRI Alexa 35, ARRI Alexa Mini LF, Phase One IQ4 150MP, Hasselblad H6D-100c, and Phantom Flex 4K. Lighting packages feature Profoto Pro-11 packs, Broncolor Para diffusers, and continuous Aputure Electro Storm arrays. Custom packages can be tailored to your production rider.",
  },
  {
    question: "How do you handle post-production, color grading, and delivery?",
    answer:
      "Our dedicated post-production suite operates in fully calibrated ACES 2065-1 color science and Dolby Vision HDR. We offer on-set DIT services, high-speed LTO archival, cinema conform, high-end beauty retouching, and final delivery via secure encrypted fiber servers.",
  },
  {
    question: "Do you accommodate international and on-location shoots?",
    answer:
      "Absolutely. While our primary headquarters is located in New York's Creative District, our directors and core camera crews regularly travel worldwide for destination fashion campaigns, automotive commercials, and architectural projects across Europe, Asia, and the Americas.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Photography",
    budget: "Under \\$5K",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Photography",
      budget: "Under \\$5K",
      description: "",
    });
    setIsSubmitted(false);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-[#fafafa] relative pb-28">
        {/* Background ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
          {/* Hero Section */}
          <div className="text-center mb-16 md:mb-20">
            <SectionHeading
              badge="RESERVATIONS & INQUIRIES"
              title="Get in Touch"
              subtitle="Let's discuss your next campaign, soundstage rental, or visual production. Our producers respond within 24 hours."
              align="center"
            />
          </div>

          {/* Two-Column Layout: Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-28">
            {/* Left Column: Contact Form (7 cols on lg) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 bg-[#18181B] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Form header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Project Consultation
                  </h3>
                  <p className="text-sm text-neutral-400 font-body mt-1">
                    Fill out the technical specifications of your project below.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Booking Calendar Open
                </span>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold font-heading text-white mb-2">
                    Inquiry Received
                  </h4>
                  <p className="text-neutral-400 text-sm max-w-md mb-8 font-body">
                    Thank you, {formData.name || "friend"}. Our studio coordinator has received your project details and will be in touch within 24 business hours with stage availability and estimates.
                  </p>
                  <GlassButton
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                  >
                    Submit Another Inquiry
                  </GlassButton>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Julian Ross"
                        className="w-full bg-[#18181B] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="julian@brand.com"
                        className="w-full bg-[#18181B] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Select */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#18181B] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                      >
                        Primary Service *
                      </label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full bg-[#18181B] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all cursor-pointer"
                      >
                        <option value="Photography">Photography</option>
                        <option value="Videography">Videography</option>
                        <option value="Brand Identity">Brand Identity</option>
                        <option value="Post-Production">Post-Production</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Range Select */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      required
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full bg-[#18181B] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all cursor-pointer"
                    >
                      <option value="Under \$5K">{`Under \$5K`}</option>
                      <option value="\$5K-\$15K">{`\$5K-\$15K`}</option>
                      <option value="\$15K-\$50K">{`\$15K-\$50K`}</option>
                      <option value="\$50K+">{`\$50K+`}</option>
                    </select>
                  </div>

                  {/* Project Description Textarea */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      required
                      rows={5}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      placeholder="Tell us about the creative vision, anticipated dates, specific stage requirements (Studio A, B, or C), and deliverables..."
                      className="w-full bg-[#18181B] border border-white/10 rounded-xl p-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <GlassButton
                      type="submit"
                      variant="glow"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center"
                      icon={<Send className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      {isSubmitting ? "Transmitting..." : "Send Inquiry"}
                    </GlassButton>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right Column: Studio Info Cards & Map (5 cols on lg) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              {/* Studio Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {/* Location */}
                <div className="p-5 rounded-2xl bg-[#18181B] border border-white/10 hover:border-white/25 transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5">
                      Studio Address
                    </span>
                    <p className="text-sm font-semibold text-white leading-snug">
                      123 Studio Avenue, Creative District, NY 10001
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-[#18181B] border border-white/10 hover:border-white/25 transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5">
                      General & Inquiries
                    </span>
                    <a
                      href="mailto:hello@visibilitystudio.com"
                      className="text-sm font-semibold text-white hover:underline block leading-snug"
                    >
                      hello@visibilitystudio.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-5 rounded-2xl bg-[#18181B] border border-white/10 hover:border-white/25 transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5">
                      Direct Studio Desk
                    </span>
                    <a
                      href="tel:+15551234567"
                      className="text-sm font-semibold text-white hover:underline block leading-snug"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-5 rounded-2xl bg-[#18181B] border border-white/10 hover:border-white/25 transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5">
                      Operating Hours
                    </span>
                    <p className="text-sm font-semibold text-white leading-snug">
                      Mon-Fri: 9AM-7PM, Sat: 10AM-5PM
                    </p>
                    <span className="text-[10px] font-mono text-neutral-500">
                      24/7 access available for booked productions
                    </span>
                  </div>
                </div>
              </div>

              {/* Small Embedded Map Placeholder */}
              <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#18181B] border border-white/10 overflow-hidden p-6 flex flex-col justify-between group shadow-xl">
                {/* Dark map grid styling */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

                {/* Concentric radar rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/5 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-white/10 pointer-events-none" />

                {/* Top map info */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <Navigation className="w-3.5 h-3.5 text-white" />
                    NEW YORK HQ
                  </span>
                  <span className="text-[10px] text-neutral-500">
                    40.7505° N, 73.9934° W
                  </span>
                </div>

                {/* Center Pin */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div className="relative">
                    <span className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-white/20 animate-ping" />
                    <div className="relative w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-white/30">
                      <MapPin className="w-3.5 h-3.5 fill-black" />
                    </div>
                  </div>
                  <span className="mt-2 text-xs font-bold font-heading text-white tracking-wide">
                    Visibility Studio
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    Creative District
                  </span>
                </div>

                {/* Bottom map status */}
                <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-neutral-400">
                  <span>GUEST PARKING ON SITE</span>
                  <span className="text-white">FREIGHT ELEVATOR READY</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto pt-8">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                Frequently Asked Questions
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                Everything You Need to Know
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFAQ === index;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl bg-[#18181B] border border-white/10 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                    >
                      <span className="font-heading font-semibold text-base sm:text-lg text-white">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="p-1 rounded-full bg-white/5 border border-white/10 text-white shrink-0"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="px-6 pb-6 pt-1 text-sm text-neutral-400 font-body leading-relaxed border-t border-white/5">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

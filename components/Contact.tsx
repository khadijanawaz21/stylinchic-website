"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwV2qO3sN_wPsc5m4_mVb6vyqStuPzEs9IYDZjV1twCygHw7wFOAs1vBLm8qLheZ_Kl/exec";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Invalid email address";
    if (!formData.service) errs.service = "Please select a service";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          date: formData.date,
          message: formData.message,
        }),
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", service: "", date: "", message: "" });
    } catch {
      setSubmitError(
        "Something went wrong. Please call us directly at +1 416-460-4592"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const inputStyles =
    "w-full rounded-xl border border-cream/20 bg-charcoal-light px-4 py-3 text-cream placeholder-cream/40 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";

  return (
    <section id="contact" className="bg-espresso py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Book Your Appointment" light />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left — Info side */}
          <div className="flex h-full flex-col justify-between">
            {/* Testimonial */}
            <blockquote className="rounded-2xl border border-cream/10 p-6">
              <p className="text-base italic leading-relaxed text-cream/80">
                &ldquo;Absolutely love my new look! Stylin&apos;Chic
                completely transformed my hair with the perfect cut and
                color.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-cream/50">
                — Emma Rose, Balayage &amp; Styling
              </footer>
            </blockquote>

            {/* Contact details */}
            <div className="mt-10 space-y-5">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-[15px] text-cream/70 hover:text-cream transition-colors"
              >
                <svg
                  className="h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-[15px] text-cream/70 hover:text-cream transition-colors"
              >
                <svg
                  className="h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {contactInfo.phone}
              </a>
              <div className="flex items-start gap-3 text-[15px] text-cream/70">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {contactInfo.address}
              </div>

              {/* Business hours */}
              <div className="flex items-start gap-3 text-[15px] text-cream/70">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p>Mon–Sat: By Appointment Only</p>
                  <p>Sunday: Closed</p>
                  {/* TODO: Confirm exact hours with Shabana and update */}
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-2 overflow-hidden rounded-xl shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.2938082661703!2d-79.11436028820131!3d43.87046383823129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cd7f9478a4dd%3A0x7a2345dee6e0bf24!2sStylin%E2%80%99Chic%20hair%20%26%20Beauty%20Salon%20Pickering!5e0!3m2!1sen!2s!4v1773688476790!5m2!1sen!2s"
                  width="100%"
                  height="220"
                  className="h-[180px] w-full md:h-[220px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stylin'Chic salon location on Google Maps"
                />
              </div>

              {/* Social links */}
              <div className="flex gap-4 pt-1">
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/60 transition-colors hover:border-accent hover:text-accent"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/60 transition-colors hover:border-accent hover:text-accent"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <motion.div
                className="flex h-full flex-col items-center justify-center rounded-3xl border border-cream/10 p-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-[22px] font-medium tracking-[-0.02em] text-cream">
                  Thank You!
                </h3>
                <p className="mt-2 text-[15px] text-cream/60">
                  Your booking request has been sent. We&apos;ll confirm your
                  appointment within 24 hours.
                </p>
                <a
                  href="tel:+14164604592"
                  className="mt-4 text-[14px] text-cream/50 hover:text-cream transition-colors"
                >
                  Or call us directly: +1 416-460-4592
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[14px] font-medium text-accent hover:text-accent-hover transition-colors cursor-pointer"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-3xl border border-cream/10 p-8 lg:p-10"
                noValidate
              >
                {submitError && (
                  <div className="rounded-xl bg-red-500/10 px-4 py-3 text-[14px] text-red-400">
                    {submitError}{" "}
                    <a
                      href="tel:+14164604592"
                      className="font-medium underline"
                    >
                      +1 416-460-4592
                    </a>
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputStyles}
                    aria-label="Full Name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputStyles}
                    aria-label="Email Address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputStyles}
                    aria-label="Preferred Service"
                  >
                    <option value="">Preferred Service</option>
                    <option value="cutting">Cutting</option>
                    <option value="color">Color</option>
                    <option value="styling">Styling</option>
                    <option value="treatment">Treatment</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={inputStyles}
                    aria-label="Appointment Date"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message (optional)"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputStyles} resize-none`}
                    aria-label="Message"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full rounded-xl bg-accent py-3.5 font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50 cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        className="inline-block h-4 w-4 rounded-full border-2 border-cream/30 border-t-cream"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending...
                    </span>
                  ) : (
                    "Book Appointment"
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

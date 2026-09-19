import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import SectionBadge from "../components/SectionBadge";

import {
  requestContactVerification,
  verifyContact,
} from "../services/contactService";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // =========================================
  // HANDLE INPUT CHANGE
  // =========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  // =========================================
  // REQUEST OTP
  // =========================================

  const handleRequestOtp = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await requestContactVerification(form);

      setSuccess(
        response?.message ||
          "Verification code sent to your email."
      );

      setStep("otp");
    } catch (requestError) {
      const message =
        requestError?.response?.data?.message ||
        "Unable to send verification code. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // VERIFY OTP
  // =========================================

  const handleVerify = async (event) => {
    event.preventDefault();

    if (!otp || otp.length !== 6) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await verifyContact({
        email: form.email,
        otp,
      });

      setSuccess(
        response?.message ||
          "Your message has been sent successfully."
      );

      setForm(initialForm);
      setOtp("");
      setStep("success");
    } catch (verifyError) {
      const message =
        verifyError?.response?.data?.message ||
        "Verification failed. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // GO BACK TO FORM
  // =========================================

  const goBack = () => {
    setStep("form");
    setOtp("");
    setError("");
    setSuccess("");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0D1220] py-20 sm:py-24 scroll-mt-20"
    >
      {/* =========================================
          BACKGROUND GLOWS
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Indigo Glow */}
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[130px]" />

        {/* Violet Glow */}
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

        {/* Cyan Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[120px]" />
      </div>

      {/* =========================================
          BACKGROUND GRID
      ========================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(148,163,184,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148,163,184,0.035) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div className="container-custom relative z-10">

        {/* =======================================
            SECTION HEADER
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionBadge>
            Contact
          </SectionBadge>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="gradient-text">
              {" "}meaningful.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Have a project, opportunity or idea you'd
            like to discuss? I'd love to hear from you.
          </p>
        </motion.div>

        {/* =======================================
            CONTACT CONTENT
        ======================================== */}

        <div className="mt-14 grid gap-7 lg:grid-cols-[0.78fr_1.22fr]">

          {/* =====================================
              LEFT CONTACT INFORMATION
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0F1524] p-7 sm:p-9"
          >
            {/* Top Gradient Line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

            {/* Card Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative">

              {/* Small Heading */}
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-400">
                Get in touch
              </p>

              {/* Main Heading */}
              <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
                Let's start a
                <span className="text-indigo-400">
                  {" "}conversation.
                </span>
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Whether you have a job opportunity,
                project idea or simply want to connect,
                you're welcome to reach out.
              </p>

              {/* =================================
                  EMAIL CARD
              ================================== */}

              <a
                href="mailto:dhirajkumar@example.com"
                className="group mt-8 flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:border-indigo-400/20 hover:bg-white/[0.055]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition group-hover:bg-indigo-500/15">
                  <Mail size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-slate-200">
                    dhirajkumar@example.com
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-slate-600 transition group-hover:text-indigo-400"
                />
              </a>

              {/* =================================
                  SOCIAL LINKS
              ================================== */}

              <div className="mt-8 border-t border-white/[0.07] pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Find me online
                </p>

                <div className="mt-4 flex gap-3">

                  {/* GitHub */}
                  <a
                    href="https://github.com/Offical-Dhiraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07] hover:text-white"
                  >
                    <FaGithub size={19} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07] hover:text-white"
                  >
                    <FaLinkedinIn size={18} />
                  </a>

                </div>
              </div>

              {/* =================================
                  SECURITY CARD
              ================================== */}

              <div className="mt-8 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4">
                <div className="flex items-start gap-3">

                  <ShieldCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div>
                    <p className="text-sm font-bold text-emerald-300">
                      Protected contact form
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Email verification and server-side
                      validation help reduce fake and
                      automated submissions.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

          {/* =====================================
              RIGHT FORM
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0F1524] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:p-9"
          >
            {/* Top Gradient Line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            {/* =================================
                STEP 1 — CONTACT FORM
            ================================== */}

            {step === "form" && (
              <>
                {/* Form Header */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-400">
                    Start a conversation
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-white">
                    Send a message
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Your email will be verified before
                    the message is delivered.
                  </p>
                </div>

                {/* Error */}
                {error && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-400/10 bg-red-400/[0.06] p-4 text-sm text-red-300">
                    <AlertCircle
                      size={18}
                      className="mt-0.5 shrink-0"
                    />

                    <span>
                      {error}
                    </span>
                  </div>
                )}

                {/* Contact Form */}
                <form
                  onSubmit={handleRequestOtp}
                  className="mt-8 space-y-5"
                >

                  {/* Honeypot */}
                  <div
                    className="absolute left-[-9999px]"
                    aria-hidden="true"
                  >
                    <label htmlFor="website">
                      Website
                    </label>

                    <input
                      id="website"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </div>

                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-300"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        maxLength={80}
                        placeholder="Your name"
                        className="dark-input"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-300"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        maxLength={120}
                        placeholder="you@example.com"
                        className="dark-input"
                      />
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      maxLength={150}
                      placeholder="What would you like to discuss?"
                      className="dark-input"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      maxLength={2000}
                      rows={6}
                      placeholder="Tell me about your project, opportunity or idea..."
                      className="dark-input resize-none leading-6"
                    />

                    <p className="mt-2 text-right text-xs text-slate-600">
                      {form.message.length}/2000
                    </p>
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={17} />
                      </>
                    )}
                  </button>

                </form>
              </>
            )}

            {/* =================================
                STEP 2 — OTP VERIFICATION
            ================================== */}

            {step === "otp" && (
              <div className="py-6">

                {/* Back */}
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-indigo-400"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>

                <div className="mx-auto mt-10 max-w-md text-center">

                  {/* Mail Icon */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/10 bg-indigo-500/10 text-indigo-400">
                    <Mail size={27} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-white">
                    Verify your email
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    We've sent a 6-digit verification
                    code to
                  </p>

                  <p className="mt-1 break-all font-bold text-slate-300">
                    {form.email}
                  </p>

                  {/* OTP Error */}
                  {error && (
                    <div className="mt-6 rounded-xl border border-red-400/10 bg-red-400/[0.06] p-4 text-sm text-red-300">
                      {error}
                    </div>
                  )}

                  {/* OTP Form */}
                  <form
                    onSubmit={handleVerify}
                    className="mt-8"
                  >
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={otp}
                      onChange={(event) =>
                        setOtp(
                          event.target.value
                            .replace(/\D/g, "")
                            .slice(0, 6)
                        )
                      }
                      placeholder="000000"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-4 text-center text-2xl font-black tracking-[0.5em] text-white outline-none transition placeholder:text-slate-700 focus:border-indigo-400/50 focus:ring-4 focus:ring-indigo-500/10"
                    />

                    <button
                      type="submit"
                      disabled={
                        loading ||
                        otp.length !== 6
                      }
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {loading
                        ? "Verifying..."
                        : "Verify & Send"}

                      {!loading && (
                        <CheckCircle2 size={17} />
                      )}
                    </button>
                  </form>

                  {/* Success Message */}
                  {success && (
                    <p className="mt-5 text-sm text-emerald-400">
                      {success}
                    </p>
                  )}

                </div>
              </div>
            )}

            {/* =================================
                STEP 3 — SUCCESS
            ================================== */}

            {step === "success" && (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">

                {/* Success Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/15 bg-emerald-400/10 text-emerald-400">
                  <CheckCircle2 size={40} />
                </div>

                <h3 className="mt-7 text-3xl font-black text-white">
                  Message sent!
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                  Thanks for reaching out. Your email
                  has been verified and your message
                  has been delivered successfully.
                </p>

                {/* Send Another */}
                <button
                  type="button"
                  onClick={() => {
                    setStep("form");
                    setSuccess("");
                  }}
                  className="mt-7 rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-3 text-sm font-bold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/20 hover:bg-indigo-500/10 hover:text-white"
                >
                  Send another message
                </button>

              </div>
            )}

          </motion.div>
        </div>

        {/* =======================================
            BOTTOM SECURITY NOTE
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 text-center text-xs text-slate-600"
        >
          <ShieldCheck
            size={15}
            className="text-emerald-500/70"
          />

          <span>
            Your message is protected with email verification
            and server-side validation.
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePortfolioData } from '../context/DataContext';
import { Mail, Phone, MapPin, Navigation, Send, Check, Copy } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';
import SocialLinks from '../components/common/SocialLinks';

export default function ContactPage() {
  const { data } = usePortfolioData();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!data) return null;
  const { contact, profile } = data;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = contact?.formspreeEndpoint;
      const isConfigured = endpoint && !endpoint.includes('xbjnqpkz') && !endpoint.includes('example');
      
      if (isConfigured) {
        await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });
      } else {
        // Fallback: Open mailto link with pre-filled message data
        const recipientEmail = contact?.directEmail || profile?.email || 'alex.morgan@example.com';
        const mailtoSubject = encodeURIComponent(`New Portfolio Inquiry from ${formData.name}`);
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Contact submit error:', err);
      // Even if network fails, trigger mailto fallback
      const recipientEmail = contact?.directEmail || profile?.email || 'alex.morgan@example.com';
      window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(`Inquiry from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    const emailToCopy = profile?.email || contact?.directEmail || 'pagedone1234@gmail.com';
    navigator.clipboard.writeText(emailToCopy);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
      
      {/* Top 2-Column Split Contact Card matching reference layout exactly */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="glass-panel rounded-[36px] p-6 sm:p-10 lg:p-12 relative overflow-hidden bg-white dark:bg-[#0f172a] border border-neutral-200/80 dark:border-slate-800/90 app-frame-shadow"
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Large Image Cutout matching reference photo framing */}
          <ScrollReveal variant="fadeLeft" className="lg:col-span-5 h-full">
            <div className="relative w-full h-full min-h-[380px] lg:min-h-[500px] rounded-3xl overflow-hidden bg-neutral-100 dark:bg-slate-800 border border-neutral-200/60 dark:border-slate-700/60 shadow-md group">
              <img
                src="/assets/contact_rep_portrait.jpg"
                alt="Customer support executive"
                className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-3xl" />
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal variant="fadeRight" className="lg:col-span-7 space-y-6 text-left">
            
            {/* Header Title & Description */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white font-heading tracking-tight">
                Send us a message
              </h1>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-slate-200 font-normal leading-relaxed mt-2">
                Your satisfaction is our top priority, and we are committed to providing exceptional service and support
              </p>
            </div>

            {/* Form Fields Container */}
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 space-y-3 text-center my-6"
                >
                  <Check className="w-10 h-10 mx-auto text-emerald-500" />
                  <h3 className="text-xl font-bold font-heading">Message Sent Successfully!</h3>
                  <p className="text-xs text-neutral-600 dark:text-slate-300 font-sans">
                    Thank you for reaching out. We have received your query and will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-accent underline cursor-pointer hover:opacity-80"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 pt-2"
                >
                  {/* Your Name * */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 dark:text-slate-200 block mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-neutral-50/80 dark:bg-slate-800/90 border border-neutral-200/80 dark:border-slate-700/80 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-400 focus:outline-none focus:border-accent focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-accent/20 transition-all font-sans"
                    />
                  </div>

                  {/* Email * */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 dark:text-slate-200 block mb-1">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-neutral-50/80 dark:bg-slate-800/90 border border-neutral-200/80 dark:border-slate-700/80 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-400 focus:outline-none focus:border-accent focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-accent/20 transition-all font-sans"
                    />
                  </div>

                  {/* Phone Number * */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 dark:text-slate-200 block mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-neutral-50/80 dark:bg-slate-800/90 border border-neutral-200/80 dark:border-slate-700/80 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-400 focus:outline-none focus:border-accent focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-accent/20 transition-all font-sans"
                    />
                  </div>

                  {/* Description * */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 dark:text-slate-200 block mb-1">
                      Description <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-neutral-50/80 dark:bg-slate-800/90 border border-neutral-200/80 dark:border-slate-700/80 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-400 focus:outline-none focus:border-accent focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-accent/20 resize-none transition-all font-sans"
                    />
                  </div>

                  {/* Full-width Action Button */}
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.01, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-sm shadow-lg shadow-accent/25 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? 'Sending...' : 'Send'}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

          </ScrollReveal>

        </div>

      </motion.div>

      {/* Bottom Horizontal Contact Details Card matching reference layout */}
      <ScrollReveal variant="fadeUp" delay={0.2}>
        <div className="glass-panel rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#0f172a] border border-neutral-200/80 dark:border-slate-800/90 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Address */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white font-heading">
                Address
              </h3>
              <p className="text-xs text-neutral-600 dark:text-slate-300 font-sans leading-tight">
                789 Oak Lane, Lakeside, TX 54321
              </p>
            </div>

            {/* 2. Contact */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white font-heading">
                Contact
              </h3>
              <p className="text-xs text-neutral-600 dark:text-slate-300 font-mono leading-tight">
                1800-2541-2541, 1800-14-0147
              </p>
            </div>

            {/* 3. Email */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white font-heading">
                Email
              </h3>
              <div className="flex items-center gap-1">
                <p className="text-xs text-neutral-600 dark:text-slate-300 font-mono leading-tight">
                  pagedone1234@gmail.com
                </p>
                <button onClick={copyEmail} title="Copy Email" className="text-neutral-400 hover:text-accent cursor-pointer">
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* 4. Google Map */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                <Navigation className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white font-heading">
                Google Map
              </h3>
              <p className="text-xs text-neutral-600 dark:text-slate-300 font-sans leading-tight">
                Discover our prime location{' '}
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline"
                >
                  View More
                </a>
              </p>
            </div>

          </div>
        </div>
      </ScrollReveal>

      {/* Social Media Channels Banner */}
      <ScrollReveal variant="fadeUp" delay={0.3}>
        <div className="glass-panel rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#0f172a] border border-neutral-200/80 dark:border-slate-800/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white font-heading">
              Connect on Social Media
            </h3>
            <p className="text-xs text-neutral-600 dark:text-slate-300 font-sans mt-0.5">
              Follow for updates, direct messaging, and project inquiries on LinkedIn, Twitter, Facebook, WhatsApp & Instagram.
            </p>
          </div>
          <SocialLinks socials={profile?.socials} />
        </div>
      </ScrollReveal>

    </div>
  );
}

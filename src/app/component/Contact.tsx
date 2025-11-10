'use client';

import { useState } from 'react';
import { ArrowUpRight, ArrowUpRightIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = { name: '', email: '', message: '' };
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email))
      newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setIsSubmitting(true);
      
      try {
        await emailjs.send(
          'service_ID',      // Replace with your Service ID
          'YOUR_TEMPLATE_ID',     // Replace with your Template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company || 'Not provided',
            message: formData.message,
            to_email: 'contact@hypermedia.co',
          },
          'YOUR_PUBLIC_KEY'       // Replace with your Public Key
        );

        alert('Message sent successfully!');
        setFormData({ name: '', company: '', email: '', message: '' });
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section className="relative z-[100] bg-[var(--color-primary)] overflow-hidden">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-[200px] px-2 sm:px-4 md:px-6 border-t border-r border-l border-neutral-700 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20 text-center">
          <p className="text-base sm:text-lg md:text-xl text-[#38B6FF] mb-3 sm:mb-4">
            Partner With HYPER
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight px-4">
            Let's Talk Business
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          {/* Name + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div>
              <label className="block text-white text-xs sm:text-sm mb-2 sm:mb-3">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white pb-2 sm:pb-3 text-white text-sm sm:text-base placeholder-neutral-500 focus:outline-none"
                  placeholder="Your full name"
                />
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#38B6FF] transition-all duration-300 peer-focus:w-full"></span>
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-2">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-white text-xs sm:text-sm mb-2 sm:mb-3">
                Company / Organization
              </label>
              <div className="relative group">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white pb-2 sm:pb-3 text-white text-sm sm:text-base placeholder-neutral-500 focus:outline-none"
                  placeholder="Type here"
                />
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#38B6FF] transition-all duration-300 peer-focus:w-full"></span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-white text-xs sm:text-sm mb-2 sm:mb-3">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b border-white pb-2 sm:pb-3 text-white text-sm sm:text-base placeholder-neutral-500 focus:outline-none"
                placeholder="For eg - your@email.com"
              />
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#38B6FF] transition-all duration-300 peer-focus:w-full"></span>
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-white text-xs sm:text-sm mb-2 sm:mb-3">
              Message <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="peer w-full bg-transparent border-b border-white pb-2 sm:pb-3 text-white text-sm sm:text-base placeholder-neutral-500 focus:outline-none resize-none"
                placeholder="Tell us about your project or inquiry..."
              />
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#38B6FF] transition-all duration-300 peer-focus:w-full"></span>
            </div>
            {errors.message && (
              <p className="text-red-500 text-xs mt-2">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
       <div className="flex justify-center pt-4 sm:pt-6">
  <div className="relative inline-block">
    <button
      type="submit"
      disabled={isSubmitting}
      className="relative px-5 py-2.5 sm:px-6 sm:py-3 text-black font-bold text-[10px] sm:text-xs tracking-widest uppercase flex items-center gap-2 bg-white disabled:opacity-50 transition-all hover:scale-105"
    >
      {isSubmitting ? 'Sending...' : 'Connect With Us'}
      <ArrowUpRightIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />

      {/* Cyan border - top-left */}
      <span className="absolute -top-[6px] -left-[6px] w-[calc(100%-4px)] h-[calc(100%-4px)] border-t-[6px] border-l-[6px] border-cyan-400 pointer-events-none"></span>

      {/* Pink border - bottom-right */}
      <span className="absolute -bottom-[6px] -right-[6px] w-[calc(100%-4px)] h-[calc(100%-4px)] border-b-[6px] border-r-[6px] border-pink-500 pointer-events-none"></span>
    </button>
  </div>
</div>
        </form>

        {/* Footer Text */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <p className="text-white text-xs sm:text-sm mb-1">
            For partnerships, press, or editorial inquiries:
          </p>
          
            <a href="mailto:contact@hypermedia.co"
            className="text-white text-xs sm:text-sm hover:text-[#38B6FF] inline-flex items-center gap-1 transition-colors" >
          
            contact@hypermedia.co
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
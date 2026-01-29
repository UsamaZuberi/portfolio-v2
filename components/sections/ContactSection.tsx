/**
 * ContactSection Component
 *
 * Provides contact information and a form for visitors to reach out.
 *
 * Features:
 * - Contact form with client-side validation
 * - Input fields: Full Name, Email, Message
 * - Error handling and user feedback
 * - Success/error messages after submission
 * - Contact information (email, location, response time)
 * - Social media links
 * - Accessibility support (ARIA labels, semantic HTML)
 * - Loading state during form submission
 *
 * Form Validation:
 * - Full name: Required, min 2 characters
 * - Email: Required, valid format
 * - Message: Required, min 10 characters
 *
 * @component
 * @returns {React.ReactElement} Contact section with form and info
 */

'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { portfolioData } from '@/data';
import type { ContactFormData, ContactFormErrors } from '@/types';

const ContactSection: React.FC = () => {
  const contactData = portfolioData.contact;

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Log the form data (for demonstration)
      console.log('Contact form submission:', formData);

      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', message: '' });

      // Announce success to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.className = 'sr-only';
      announcement.textContent = 'Message sent successfully!';
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-white px-4 py-20 dark:bg-gray-800 sm:px-6 lg:px-8"
      role="region"
      aria-label="Contact section"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's create something amazing together"
          className="mb-16"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="order-2 lg:order-1">
            <div className="flex h-full min-h-full flex-col rounded-2xl bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-8 shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-gray-800">
              <div className="flex-1">
                <div className="mb-8">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md dark:bg-gray-800">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-primary-500"></span>
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Available for Work
                    </span>
                  </div>
                  <h3 className="mb-3 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-3xl font-bold text-transparent dark:from-primary-400 dark:to-secondary-400">
                    Let&apos;s Connect
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ready to bring your ideas to life. Let&apos;s discuss how we can work together.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <a
                    href={`mailto:${contactData.email}`}
                    className="group relative block overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-700/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 transition-opacity group-hover:opacity-10" />
                    <div className="relative flex items-center gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg">
                        <svg
                          className="h-7 w-7"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Email Me
                        </h4>
                        <p className="truncate text-base font-medium text-gray-900 dark:text-white">
                          {contactData.email}
                        </p>
                      </div>
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </a>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-white p-5 shadow-md dark:bg-gray-700/50">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-secondary-500 to-pink-500 text-white">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Location
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {contactData.location}
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Remote work available
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-5 shadow-md dark:bg-gray-700/50">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-teal-500 text-white">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Response
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {contactData.responseTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
                <h4 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Follow me on social media
                </h4>
                <div className="flex gap-3">
                  {contactData.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-gray-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:text-white hover:shadow-lg dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                      aria-label={social.name}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        {social.name === 'GitHub' && (
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        )}
                        {social.name === 'LinkedIn' && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        )}
                        {social.name === 'Twitter' && (
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        )}
                        {social.name === 'WhatsApp' && (
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <form
              onSubmit={handleSubmit}
              className="flex h-full min-h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800"
              noValidate
            >
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Send a Message
              </h3>

              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name{' '}
                    <span className="text-red-500 dark:text-red-400" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${
                      errors.fullName
                        ? 'border-red-500 dark:border-red-400'
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:ring-primary-400`}
                    placeholder="John Doe"
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      className="mt-2 text-sm text-red-500 dark:text-red-400"
                      role="alert"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address{' '}
                    <span className="text-red-500 dark:text-red-400" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${
                      errors.email
                        ? 'border-red-500 dark:border-red-400'
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:ring-primary-400`}
                    placeholder="john@example.com"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-2 text-sm text-red-500 dark:text-red-400"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message{' '}
                    <span className="text-red-500 dark:text-red-400" aria-label="required">
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`resize-vertical w-full rounded-lg border ${
                      errors.message
                        ? 'border-red-500 dark:border-red-400'
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:ring-primary-400`}
                    placeholder="Tell me about your project..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-2 text-sm text-red-500 dark:text-red-400"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    text={isSubmitting ? 'Sending...' : 'Send Message'}
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                    ariaLabel={isSubmitting ? 'Sending message' : 'Send message'}
                  />

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <p
                      className="mt-3 flex items-center gap-2 text-green-600 dark:text-green-400"
                      role="status"
                      aria-live="polite"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p
                      className="mt-3 flex items-center gap-2 text-red-600 dark:text-red-400"
                      role="alert"
                      aria-live="assertive"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Failed to send message. Please try again or email me directly.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

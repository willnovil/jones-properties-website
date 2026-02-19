"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission — replace with actual form handler
    // (e.g., Formspree, Netlify Forms, or a Next.js API route)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="bg-available/10 border border-available/20 rounded-lg p-8 text-center">
        <svg className="w-12 h-12 text-available mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="font-heading text-xl font-bold text-primary mb-2">
          Message Sent!
        </h3>
        <p className="font-body text-foreground/60">
          Thank you for reaching out. We&apos;ll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-body text-sm font-medium text-foreground/70 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-200 rounded-md px-4 py-3 font-body text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-body text-sm font-medium text-foreground/70 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-200 rounded-md px-4 py-3 font-body text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground/70 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-gray-200 rounded-md px-4 py-3 font-body text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            placeholder="(423) 555-0000"
          />
        </div>
        <div>
          <label htmlFor="property" className="block font-body text-sm font-medium text-foreground/70 mb-1.5">
            Property of Interest
          </label>
          <input
            type="text"
            id="property"
            name="property"
            className="w-full border border-gray-200 rounded-md px-4 py-3 font-body text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            placeholder="e.g., Westside Commons Apartments"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-sm font-medium text-foreground/70 mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-gray-200 rounded-md px-4 py-3 font-body text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-vertical"
          placeholder="Tell us how we can help..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

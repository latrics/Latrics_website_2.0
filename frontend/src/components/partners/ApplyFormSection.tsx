"use client";

import React, { useState } from "react";
import SectionLayout from "../SectionLayout";

export default function ApplyFormSection() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    workEmail: "",
    phoneNumber: "",
    country: "",
    partnerTier: "",
    businessDetails: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Submitting Partner Application:", formData);
    setSubmitted(true);
  };

  return (
    <div id="apply-form">
      <SectionLayout 
        number="03 / APPLY" 
        title="" 
        subtitle=""
      >
        <div className="p-8 lg:p-12 w-full">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-brand-charcoal inline-block mr-2">
              Become a channel partner.
            </h3>
            <span className="text-brand-red font-medium italic">Fill this in &rarr;</span>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-sm">
              <h4 className="font-bold text-lg mb-2">Application Submitted Successfully!</h4>
              <p className="text-sm">Thank you for your interest in partnering with Latrics. Our team will review your application and get back to you within 5 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Row 1 */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Company name"
                    required
                    value={formData.companyName}
                    onChange={e => setFormData({...formData, companyName: e.target.value})}
                    className="w-full bg-white border border-gray-300 px-4 py-3.5 text-brand-charcoal placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Contact name"
                    required
                    value={formData.contactName}
                    onChange={e => setFormData({...formData, contactName: e.target.value})}
                    className="w-full bg-white border border-gray-300 px-4 py-3.5 text-brand-charcoal placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                {/* Row 2 */}
                <div>
                  <input 
                    type="email" 
                    placeholder="Work email"
                    required
                    value={formData.workEmail}
                    onChange={e => setFormData({...formData, workEmail: e.target.value})}
                    className="w-full bg-white border border-gray-300 px-4 py-3.5 text-brand-charcoal placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone number"
                    required
                    value={formData.phoneNumber}
                    onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                    className="w-full bg-white border border-gray-300 px-4 py-3.5 text-brand-charcoal placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                {/* Row 3 */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Country / region"
                    required
                    value={formData.country}
                    onChange={e => setFormData({...formData, country: e.target.value})}
                    className="w-full bg-white border border-gray-300 px-4 py-3.5 text-brand-charcoal placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <select 
                    required
                    value={formData.partnerTier}
                    onChange={e => setFormData({...formData, partnerTier: e.target.value})}
                    className="w-full bg-white border border-gray-300 px-4 py-3.5 text-brand-charcoal placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 10px center"
                    }}
                  >
                    <option value="" disabled>Partner tier interested in</option>
                    <option value="reseller">Reseller (Tier 01)</option>
                    <option value="integration">Integration partner (Tier 02)</option>
                    <option value="strategic">Strategic / delivery partner (Tier 03)</option>
                  </select>
                </div>
              </div>

              {/* Textarea */}
              <div>
                <textarea 
                  placeholder="Tell us about your business & why you'd like to partner..."
                  rows={5}
                  required
                  value={formData.businessDetails}
                  onChange={e => setFormData({...formData, businessDetails: e.target.value})}
                  className="w-full bg-white border border-gray-300 px-4 py-3.5 text-brand-charcoal placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors resize-y"
                />
              </div>

              {/* Submit Row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
                <button 
                  type="submit"
                  className="bg-black text-white px-8 py-3.5 text-sm font-semibold hover:bg-neutral-800 transition-colors"
                >
                  Submit application
                </button>
                <span className="text-[10px] md:text-xs font-semibold tracking-widest text-brand-olive uppercase">
                  RESPONSES REVIEWED WITHIN 5 BUSINESS DAYS
                </span>
              </div>
            </form>
          )}
        </div>
      </SectionLayout>
    </div>
  );
}

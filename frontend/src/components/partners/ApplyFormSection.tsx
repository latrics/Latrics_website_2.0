"use client";

import React, { useState } from "react";

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
    <div id="apply-form" className="w-full py-24 bg-[#1a1a1a]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Context & Steps */}
          <div className="lg:w-1/3 flex flex-col">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              03 / APPLY
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Ready to scale?<br />Let's partner.
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-16">
              Latrics partners with elite distributors, system integrators, and service providers. Fill out the application form to begin our joint evaluation process.
            </p>

            <div>
              <h4 className="text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase mb-8 border-b border-gray-800 pb-4">
                WHAT HAPPENS NEXT?
              </h4>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <span className="text-[#da291c] font-bold text-sm">01.</span>
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1">Application Review</h5>
                    <p className="text-gray-500 text-xs leading-relaxed">Our channel team reviews your business profile and territory suitability within 48 hours.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#da291c] font-bold text-sm">02.</span>
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1">Discovery Call</h5>
                    <p className="text-gray-500 text-xs leading-relaxed">We schedule a 30-minute alignment call to discuss margins, regional coverage, and technical capacity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#da291c] font-bold text-sm">03.</span>
                  <div>
                    <h5 className="text-white font-bold text-sm mb-1">Onboarding & Launch</h5>
                    <p className="text-gray-500 text-xs leading-relaxed">Access co-branded marketing collateral, certification training, and direct developer pricing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Partner Application</h3>
                <p className="text-gray-500 text-xs">Please share details about your business and goals.</p>
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
                      <label className="block text-[9px] font-bold text-gray-700 tracking-widest uppercase mb-2">Company name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Latrics Solutions"
                        required
                        value={formData.companyName}
                        onChange={e => setFormData({...formData, companyName: e.target.value})}
                        className="w-full bg-[#fafafa] border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#da291c] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-gray-700 tracking-widest uppercase mb-2">Contact name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Jane Doe"
                        required
                        value={formData.contactName}
                        onChange={e => setFormData({...formData, contactName: e.target.value})}
                        className="w-full bg-[#fafafa] border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#da291c] transition-colors"
                      />
                    </div>

                    {/* Row 2 */}
                    <div>
                      <label className="block text-[9px] font-bold text-gray-700 tracking-widest uppercase mb-2">Work email</label>
                      <input 
                        type="email" 
                        placeholder="e.g. jane@company.com"
                        required
                        value={formData.workEmail}
                        onChange={e => setFormData({...formData, workEmail: e.target.value})}
                        className="w-full bg-[#fafafa] border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#da291c] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-gray-700 tracking-widest uppercase mb-2">Phone number</label>
                      <input 
                        type="tel" 
                        placeholder="e.g. +91 98765 43210"
                        required
                        value={formData.phoneNumber}
                        onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                        className="w-full bg-[#fafafa] border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#da291c] transition-colors"
                      />
                    </div>

                    {/* Row 3 */}
                    <div>
                      <label className="block text-[9px] font-bold text-gray-700 tracking-widest uppercase mb-2">Country / region</label>
                      <input 
                        type="text" 
                        placeholder="e.g. India"
                        required
                        value={formData.country}
                        onChange={e => setFormData({...formData, country: e.target.value})}
                        className="w-full bg-[#fafafa] border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#da291c] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-gray-700 tracking-widest uppercase mb-2">Partner tier interested in</label>
                      <select 
                        required
                        value={formData.partnerTier}
                        onChange={e => setFormData({...formData, partnerTier: e.target.value})}
                        className="w-full bg-[#fafafa] border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#da291c] transition-colors appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 10px center"
                        }}
                      >
                        <option value="" disabled>Select a tier</option>
                        <option value="reseller">Reseller (Tier 01)</option>
                        <option value="integration">Integration partner (Tier 02)</option>
                        <option value="strategic">Strategic / delivery partner (Tier 03)</option>
                      </select>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div>
                    <label className="block text-[9px] font-bold text-gray-700 tracking-widest uppercase mb-2">Business details</label>
                    <textarea 
                      placeholder="Tell us about your business scope & why you'd like to partner..."
                      rows={4}
                      required
                      value={formData.businessDetails}
                      onChange={e => setFormData({...formData, businessDetails: e.target.value})}
                      className="w-full bg-[#fafafa] border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#da291c] transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
                    <button 
                      type="submit"
                      className="bg-[#da291c] text-white px-8 py-3.5 text-xs font-bold hover:bg-red-700 transition-colors uppercase tracking-widest"
                    >
                      SUBMIT APPLICATION &rarr;
                    </button>
                    <span className="text-[9px] font-bold tracking-widest text-[#da291c] uppercase">
                      REVIEWED WITHIN 5 BUSINESS DAYS
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

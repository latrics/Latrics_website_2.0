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

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("http://localhost:3001/api/cta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Partner Application",
          name: formData.contactName,
          email: formData.workEmail,
          company: formData.companyName,
          phone: formData.phoneNumber,
          message: formData.businessDetails,
          additionalData: {
            country: formData.country,
            partnerTier: formData.partnerTier
          }
        }),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An error occurred");
    }
  };

  return (
    <div id="apply-form" className="relative w-full py-24 bg-[#1a1a1a] overflow-hidden border-t-4 border-[#da291c]">
      
      {/* Top Left Faded Red Gradient */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#da291c] rounded-full blur-[150px] opacity-20 pointer-events-none" />
      
      {/* Bottom Right Faded Red Gradient */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#da291c] rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Context & Steps */}
          <div className="lg:w-1/3 flex flex-col">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              APPLY
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
            {status === "success" ? (
              <div className="flex flex-col md:flex-row shadow-xl overflow-hidden h-full min-h-[450px]">
                {/* Left Side (Dark) */}
                <div className="md:w-5/12 bg-[#111111] p-8 md:p-12 flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#0d2a1f] flex items-center justify-center mb-auto border border-emerald-900/30">
                    <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="mt-12">
                    <h4 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">STEP 1 OF 3</h4>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">Application<br/>submitted</h3>
                  </div>
                </div>
                
                {/* Right Side (Light) */}
                <div className="md:w-7/12 bg-white p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-gray-500 mb-10 text-lg">Here's what happens on our end while you wait.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#da291c] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                      <p className="text-gray-900 font-medium">Review <span className="text-gray-500 font-normal">— channel team checks fit within 48 hours</span></p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-200 text-gray-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                      <p className="text-gray-400 font-medium">Discovery call scheduled</p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-200 text-gray-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                      <p className="text-gray-400 font-medium">Onboarding & launch</p>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <p className="text-gray-500">Questions? <a href="mailto:info@latrics.com" className="text-[#da291c] font-medium hover:underline">info@latrics.com</a></p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 md:p-12 shadow-xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Partner Application</h3>
                  <p className="text-gray-500 text-xs">Please share details about your business and goals.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
                  )}
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
                      disabled={status === "loading"}
                      className="bg-[#da291c] text-white px-8 py-3.5 text-xs font-bold hover:bg-red-700 transition-colors uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "SUBMITTING..." : "SUBMIT APPLICATION \u2192"}
                    </button>
                    <span className="text-[9px] font-bold tracking-widest text-[#da291c] uppercase">
                      REVIEWED WITHIN 5 BUSINESS DAYS
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}

import React from "react";
import SectionLayout from "../SectionLayout";

const faqs = [
  {
    question: "Who can apply?",
    answer: "System integrators, drone-service operators & regional resellers across mining, energy, and infrastructure."
  },
  {
    question: "Is there a cost to join?",
    answer: "No sign-up fee for Reseller tier; Integration & Strategic tiers include an onboarding package."
  },
  {
    question: "How long is the approval process?",
    answer: "Typically 2-3 weeks, including a technical & compliance review."
  }
];

export default function FaqSection() {
  return (
    <SectionLayout 
      number="05 / FAQ" 
      title="" 
      subtitle=""
    >
      <div className="w-full divide-y divide-gray-200">
        {faqs.map((faq, i) => (
          <div key={i} className="p-8 lg:p-12 flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
            <h4 className="text-brand-charcoal font-bold text-lg md:w-1/3 shrink-0">
              {faq.question}
            </h4>
            <p className="text-brand-olive text-sm md:w-2/3 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

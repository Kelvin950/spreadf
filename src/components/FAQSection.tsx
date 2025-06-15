import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is fanslink?',
    answer: 'Insert the notification description here. It would look better as two lines of text.',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#52586A" strokeWidth="1.5" fill="#fff9f6"/><path d="M10 6.5a1.5 1.5 0 0 1 1.5 1.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5A1.5 1.5 0 0 1 10 6.5Zm0 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="#52586A"/></svg>
    ),
    bg: 'bg-[#fdfcf7]',
    border: 'border-[#b6bf97]'
  },
  {
    question: 'Is this just for big creators?',
    answer: 'No — it works best when you have even 10–100 people who care about what you do.',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#52586A" strokeWidth="1.5" fill="#cdefb2"/><path d="M10 6.5a1.5 1.5 0 0 1 1.5 1.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5A1.5 1.5 0 0 1 10 6.5Zm0 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="#52586A"/></svg>
    ),
    bg: 'bg-[#cdefb2]',
    border: 'border-none'
  },
  {
    question: 'How do I get paid?',
    answer: 'Insert the notification description here. It would look better as two lines of text.',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#52586A" strokeWidth="1.5" fill="#fff9f6"/><path d="M10 6.5a1.5 1.5 0 0 1 1.5 1.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5A1.5 1.5 0 0 1 10 6.5Zm0 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="#52586A"/></svg>
    ),
    bg: 'bg-[#fdfcf7]',
    border: 'border-[#b6bf97]'
  },
  {
    question: 'Can I post different types of content?',
    answer: 'Insert the notification description here. It would look better as two lines of text.',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#52586A" strokeWidth="1.5" fill="#fff9f6"/><path d="M10 6.5a1.5 1.5 0 0 1 1.5 1.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5A1.5 1.5 0 0 1 10 6.5Zm0 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="#52586A"/></svg>
    ),
    bg: 'bg-[#fdfcf7]',
    border: 'border-[#b6bf97]'
  },
  {
    question: 'How do I bring fans to my page?',
    answer: 'Insert the notification description here. It would look better as two lines of text.',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#52586A" strokeWidth="1.5" fill="#fff9f6"/><path d="M10 6.5a1.5 1.5 0 0 1 1.5 1.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5A1.5 1.5 0 0 1 10 6.5Zm0 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="#52586A"/></svg>
    ),
    bg: 'bg-[#fdfcf7]',
    border: 'border-[#b6bf97]'
  },
  {
    question: 'Is my data secure?',
    answer: 'Insert the notification description here. It would look better as two lines of text.',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#52586A" strokeWidth="1.5" fill="#fff9f6"/><path d="M10 6.5a1.5 1.5 0 0 1 1.5 1.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5A1.5 1.5 0 0 1 10 6.5Zm0 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="#52586A"/></svg>
    ),
    bg: 'bg-[#fdfcf7]',
    border: 'border-[#b6bf97]'
  },
];

const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(1); // 2nd item open by default

  return (
    <section className="w-full flex justify-center py-10 sm:py-14 md:py-20 px-2 sm:px-4 bg-[#18181b]">
      <div className="w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl flex flex-col gap-6 sm:gap-12">
        {/* Heading */}
        <div className="flex flex-col gap-1 sm:gap-2 items-center">
          <span className="uppercase tracking-widest text-[#b7e97b] text-xs sm:text-sm font-semibold">FAQs</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white text-center">Frequently Asked Questions</h2>
        </div>
        {/* Accordion List */}
        <div className="flex flex-col gap-2 sm:gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row items-start gap-2 sm:gap-4 rounded-[10px] shadow-md px-4 sm:px-6 py-3 sm:py-4 border bg-[#232323] border-[#292929] transition-all duration-200`}
            >
              <div className="mt-1 shrink-0">{faq.icon}</div>
              <div className="flex-1">
                <button
                  className="w-full text-left flex items-center justify-between gap-2 focus:outline-none"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                >
                  <span className="text-base sm:text-lg md:text-xl font-semibold text-white">{faq.question}</span>
                  <span className="ml-2">
                    {openIdx === idx ? (
                      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="4" y="9" width="12" height="2" rx="1" fill="#b7e97b"/></svg>
                    ) : (
                      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="4" y="9" width="12" height="2" rx="1" fill="#b7e97b"/><rect x="9" y="4" width="2" height="12" rx="1" fill="#b7e97b"/></svg>
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-40 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}
                  style={{}}
                >
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 
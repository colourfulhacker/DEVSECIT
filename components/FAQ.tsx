import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Are the courses beginner friendly?',
    answer: 'Yes. All courses start from basics and gradually move to advanced concepts. No prior experience needed for most courses.'
  },
  {
    question: 'Do you provide certificates?',
    answer: 'Yes. Every student receives an official DEV SEC IT Certification after course completion.'
  },
  {
    question: 'Will I get job assistance?',
    answer: 'Yes. We provide placement support, interview preparation, resume building, and internship opportunities.'
  },
  {
    question: 'Are classes online or offline?',
    answer: 'Both options are available depending on your location.'
  },
  {
    question: 'Are projects included?',
    answer: 'Yes. Each course includes real-world, industry-level projects.'
  },
  {
    question: 'Can I pay in installments?',
    answer: 'Yes. EMI and flexible payment options are available.'
  },
  {
    question: 'What if I miss a class?',
    answer: 'Recordings and backup classes are provided for all sessions.'
  },
  {
    question: 'Will I get lifetime access to study materials?',
    answer: 'Yes, you get lifetime access to notes, recordings, and project files.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 dark:bg-dark-800 light:bg-gray-50 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white light:text-gray-900">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl dark:text-gray-400 light:text-gray-600">Everything about our professional courses</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="dark:bg-dark-700 light:bg-white rounded-lg border dark:border-dark-600 light:border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center dark:hover:bg-dark-600 light:hover:bg-gray-50 transition"
              >
                <span className="font-semibold dark:text-white light:text-gray-900">{item.question}</span>
                <span className="text-primary-400 text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 border-t dark:border-dark-600 light:border-gray-200 dark:bg-dark-800 light:bg-gray-50">
                  <p className="dark:text-gray-300 light:text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

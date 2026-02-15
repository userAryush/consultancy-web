import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useApi } from '../hooks/useApi';
import { faqService } from '../services';
import SectionWrapper from './ui/SectionWrapper';
import Skeleton from './ui/Skeleton';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div
            className={`transition-all duration-300 rounded-2xl mb-4 border ${isOpen
                    ? 'border-brand-primary/30 bg-white shadow-md shadow-brand-primary/5'
                    : 'border-gray-100 bg-white hover:border-brand-primary/20 hover:shadow-sm'
                }`}
        >
            <button
                onClick={toggle}
                className="w-full px-6 py-6 md:px-8 flex items-center justify-between text-left group"
            >
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-brand-primary' : 'text-gray-900'
                    }`}>
                    {question}
                </span>

                <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                    }`}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 md:px-8 pb-8">
                            <div className="h-px w-full bg-gray-100 mb-6" />
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-4xl">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = ({ limit = 8 }) => {
    const { data: faqs, loading } = useApi(faqService.getAll);
    const [openIndex, setOpenIndex] = useState(0);

    if (loading) {
        return (
            <SectionWrapper title="Common Questions" subtitle="Help Center">
                <div className="max-w-5xl mx-auto space-y-4">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-24 w-full rounded-2xl" />
                    ))}
                </div>
            </SectionWrapper>
        );
    }

    if (!faqs || !Array.isArray(faqs) || faqs.length === 0) return null;

    return (
        <SectionWrapper
            id="faq"
            title="Everything You Need to Know"
            subtitle="Frequently Asked Questions"
            className="bg-gray-50/30"
        >
            {/* Single Column Layout, centered and wide */}
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col">
                    {faqs.slice(0, limit).map((faq, index) => (
                        <FAQItem
                            key={faq.id || index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-gray-500 font-medium">
                        Still have more questions?
                        <button className="ml-2 text-brand-primary font-bold hover:underline transition-all">
                            Chat with us
                        </button>
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default FAQ;
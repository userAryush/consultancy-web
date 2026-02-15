import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { testimonialService } from '../services';
import SectionWrapper from './ui/SectionWrapper';
import Card from './ui/Card';
import Skeleton from './ui/Skeleton';

const Testimonials = () => {
    const { data: testimonials, loading } = useApi(testimonialService.getAll);

    if (loading) {
        return (
            <SectionWrapper title="Our Success Stories" subtitle="Testimonials">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-[220px] rounded-2xl w-full" />
                    ))}
                </div>
            </SectionWrapper>
        );
    }

    if (!testimonials || !Array.isArray(testimonials) || testimonials.length === 0) return null;

    return (
        <SectionWrapper
            id="testimonials"
            title="Stories of Success"
            subtitle="Our Students Love Us"
            className="bg-gray-50/50"
        >
            {/* Grid Layout: 1 column on mobile, 2 columns on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.id || index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="overflow-hidden bg-white border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-[1.5rem] flex h-[220px] group">

                            {/* SIDE IMAGE - RECTANGLE (Balanced Size) */}
                            <div className="w-[140px] md:w-[180px] shrink-0 relative overflow-hidden">
                                <img
                                    src={testimonial.image || `https://i.pravatar.cc/400?u=${testimonial.id}`}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                            </div>

                            {/* CONTENT AREA */}
                            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative">
                                <Quote className="absolute top-6 right-8 w-10 h-10 text-brand-primary/5 group-hover:text-brand-primary/10 transition-colors" />

                                <div>
                                    <div className="flex space-x-0.5 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                                        ))}
                                    </div>

                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-4 line-clamp-3">
                                        "{testimonial.comment || testimonial.content}"
                                    </p>

                                    <div className="mt-auto">
                                        <h4 className="text-lg font-bold text-gray-900 leading-none">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-brand-primary text-sm font-medium mt-1">
                                            {testimonial.destination || "Successful Alumnus"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
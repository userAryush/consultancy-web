import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { classService } from '../services';
import SectionWrapper from './ui/SectionWrapper';
import Card from './ui/Card';
import Button from './ui/Button';
import Skeleton from './ui/Skeleton';

const LanguageClasses = () => {
    const { data: classes, loading } = useApi(classService.getAll);

    if (loading) {
        return (
            <SectionWrapper title="Language Proficiency Classes" subtitle="Boost Your Profile">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[...Array(3)].map((_, i) => (
                        <Skeleton key={i} className="h-64 rounded-2xl" />
                    ))}
                </div>
            </SectionWrapper>
        );
    }

    if (!classes || !Array.isArray(classes) || classes.length === 0) return null;

    return (
        <SectionWrapper
            id="classes"
            title="Language Proficiency Classes"
            subtitle="Master the Language"
            className="bg-brand-secondary/50"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.isArray(classes) && classes.map((cls, index) => (
                    <motion.div
                        key={cls.id || index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="flex flex-col h-full border-none group">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={cls.image || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"}
                                    alt={cls.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {cls.level || "Enroll Now"}
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{cls.name}</h3>

                                <div className="space-y-3 mb-6 flex-grow">
                                    <div className="flex items-center text-gray-600 text-sm">
                                        <Calendar className="w-4 h-4 mr-3 text-brand-primary" />
                                        <span>Duration: {cls.duration || "12 Weeks"}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 text-sm">
                                        <Clock className="w-4 h-4 mr-3 text-brand-primary" />
                                        <span>Schedule: {cls.schedule || "Mon - Fri, 8AM - 10AM"}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 text-sm">
                                        <BookOpen className="w-4 h-4 mr-3 text-brand-primary" />
                                        <span>Material: Comprehensive Kits Included</span>
                                    </div>
                                </div>

                                <Button variant="outline" className="w-full group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300">
                                    Class Details <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default LanguageClasses;

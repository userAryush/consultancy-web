import { motion } from 'framer-motion';
import {
    Compass,
    MapPin,
    CreditCard,
    Search,
    FileText,
    GraduationCap,
    PlaneTakeoff,
    Clock
} from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const services = [
    {
        icon: Compass,
        title: "University Selection",
        desc: "Finding the perfect match for your academic background, career goals, and budget from our pool of 500+ global partners."
    },
    {
        icon: Search,
        title: "Course Counseling",
        desc: "Expert guidance on choosing the right program that aligns with future market trends and your personal interests."
    },
    {
        icon: FileText,
        title: "Application Support",
        desc: "End-to-end assistance with document preparation, Statement of Purpose (SOP) editing, and application submission."
    },
    {
        icon: GraduationCap,
        title: "Scholarship Guidance",
        desc: "Helping students identify and apply for merit-based and need-based scholarships to ease financial burdens."
    },
    {
        icon: CreditCard,
        title: "Visa Assistance",
        desc: "Comprehensive visa interview preparation and documentation review with our 98% success rate track record."
    },
    {
        icon: Clock,
        title: "Pre-Departure Briefing",
        desc: "Essential workshops on culture, lifestyle, and academic expectations in your new home country."
    },
    {
        icon: MapPin,
        title: "Post-Landing Support",
        desc: "Assistance with accommodation, airport pickup, and local orientation to ensure a smooth transition."
    },
    {
        icon: PlaneTakeoff,
        title: "Travel & Forex",
        desc: "Best-in-class travel insurance options and currency exchange services for a hassle-free journey."
    }
];

const Services = () => {
    return (
        <div>
            {/* Header */}
            <div className="relative h-[45vh] min-h-[400px] flex items-center border-b border-gray-100 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1560264280-88b68371db39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlcnZpY2VzfGVufDB8fDB8fHww"
                        alt="Consulting Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-primary/90" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center text-white pt-24">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Our Premium Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-secondary/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        We provide comprehensive support at every stage of your study abroad journey.
                    </motion.p>
                </div>
            </div>

            {/* Services Grid */}
            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="p-8 h-full transition-all duration-500 border border-brand-primary/5 flex flex-col group">
                                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-primary/5">
                                    <service.icon className="w-7 h-7 text-brand-primary transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed flex-grow">
                                    {service.desc}
                                </p>
                                <div className="mt-8 pt-6 border-t border-brand-primary/5">
                                    <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">Learn More</span>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* CTA Section */}
            <div className="bg-brand-primary py-16">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Experience the GlobalStudy Difference</h2>
                    <p className="text-brand-secondary/80 mb-10 text-lg">Our experts are ready to guide you through the complex process of studying abroad.</p>
                    <Button size="lg" variant="primary" className="bg-brand-accent text-brand-primary hover:bg-white transition-colors border-none shadow-lg">
                        Book a Free Consultation
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Services;

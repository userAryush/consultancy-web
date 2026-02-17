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
        title: "University Selection",
        desc: "Finding the perfect match for your academic background, career goals, and budget from our pool of 500+ global partners.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
        features: [
            { label: "Partner Institutions", text: "Access to 500+ top-ranked global partner universities." },
            { label: "Budget Planning", text: "Matched programs based on your financial considerations." },
            { label: "Career Alignment", text: "Guidance on programs with high employability rates." }
        ]
    },
    {
        title: "Course Counseling",
        desc: "Expert guidance on choosing the right program that aligns with future market trends and your personal interests.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60",
        features: [
            { label: "Aptitude Assessment", text: "Identify the best courses based on your skills and interests." },
            { label: "Market Research", text: "Insights into global career trends and high-demand industries." },
            { label: "Pathways Support", text: "Tailored advice on foundational and degree-level pathways." }
        ]
    },
    {
        title: "Application Support",
        desc: "Navigating the documentation process can be challenging. Our team provides expert assistance to ensure all your application materials are accurate and complete.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60",
        features: [
            { label: "Document Verification", text: "Guidance on required documents and verification of educational credentials." },
            { label: "Application Assistance", text: "Help with crafting personal statements and letters of recommendation." },
            { label: "Checklist Provisioning", text: "Comprehensive checklists to ensure you have all necessary documents prepared." }
        ]
    },
    {
        title: "Scholarship Guidance",
        desc: "Helping students identify and apply for merit-based and need-based scholarships to ease financial burdens.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60",
        features: [
            { label: "Merit Scholarships", text: "Identify opportunities based on academic excellence." },
            { label: "Need-Based Aid", text: "Support for students requiring financial assistance." },
            { label: "Grant Writing", text: "Professional advice on writing strong scholarship applications." }
        ]
    },
    {
        title: "Visa Assistance",
        desc: "Navigating the visa application process can be daunting, but our visa assistance service is here to simplify it for you. We provide expert guidance at every step.",
        image: "https://images.unsplash.com/photo-1544717297-fa95b3ee21f3?w=800&auto=format&fit=crop&q=60",
        features: [
            { label: "Step-by-Step Guidance", text: "Detailed support in completing visa applications accurately." },
            { label: "Documentation Support", text: "Assistance in securing necessary documentation from educational institutions." },
            { label: "Pre-Arrival Preparation", text: "Information on what to expect upon arrival regarding visa regulations." }
        ]
    },
    {
        title: "Pre-Departure Briefing",
        desc: "Essential workshops on culture, lifestyle, and academic expectations in your new home country.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?w=800&auto=format&fit=crop&q=60",
        features: [
            { label: "Cultural Orientation", text: "Workshops on local customs, language, and cultural adjustments." },
            { label: "Travel Planning", text: "Assistance with ticket booking and travel arrangements." },
            { label: "Budget Briefing", text: "Guidance on managing living expenses and local banking." }
        ]
    },
    {
        title: "Post-Landing Support",
        desc: "Assistance with accommodation, airport pickup, and local orientation to ensure a smooth transition.",
        image: "https://images.unsplash.com/photo-1517732359359-5117142435e9?w=800&auto=format&fit=crop&q=60",
        features: [
            { label: "Airport Pickup", text: "Coordinated transportation from the airport to your accommodation." },
            { label: "Housing Assistance", text: "Help in finding safe and affordable student housing options." },
            { label: "Local Orientation", text: "Information on local transportation, banking, and essential services." }
        ]
    },
    {
        title: "Travel & Forex",
        desc: "Best-in-class travel insurance options and currency exchange services for a hassle-free journey.",
        image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&auto=format&fit=crop&q=60",
        features: [
            { label: "Insurance Support", text: "Comprehensive travel and health insurance coverage." },
            { label: "Forex Guidance", text: "Assistance with currency exchange and international money transfers." },
            { label: "Communication Setup", text: "Support in obtaining local SIM cards and maintaining connectivity." }
        ]
    }
];

const Services = () => {
    return (
        <div className="bg-[#FFFDF1]">
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

            {/* Services List (Alternating Zig-Zag) */}
            <SectionWrapper className="bg-transparent py-20 px-4">
                <div className="max-w-7xl mx-auto space-y-32">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                        >
                            {/* Image Section (30%) */}
                            <div className="w-full md:w-[35%]">
                                <div className="overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] relative group">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                            </div>

                            {/* Text Section (70%) */}
                            <div className="w-full md:w-[65%] text-left">
                                <h2 className="text-2xl md:text-4xl font-black text-[#0B2D72] mb-8 leading-tight">
                                    {service.title}
                                </h2>

                                <p className="text-black text-sm md:text-lg leading-relaxed mb-10 max-w-3xl">
                                    {service.desc}
                                </p>

                                <div className="">
                                    <h4 className="text-xl font-bold text-[#0B2D72] mb-6 flex items-center gap-3">

                                        Key Features:
                                    </h4>

                                    <ul className="grid grid-cols-1 gap-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="mt-2 min-w-[10px] h-[10px] rounded-full bg-[#0B2D72]"></div>
                                                <div className="text-lg">
                                                    <span className="font-bold text-black">{feature.label}:</span>
                                                    <span className="text-gray-700 ml-1">{feature.text}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* CTA Section */}
            <div className="bg-[#0B2D72] py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#B91C1C]"></div>
                <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
                    <h2 className="text-4xl font-extrabold mb-8">Ready to Start Your Journey?</h2>
                    <p className="text-white/80 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
                        Our experts are ready to guide you through the complex process of studying abroad with personalized support.
                    </p>
                    <Button size="lg" className="bg-[#E5C362] text-[#0B2D72] font-black uppercase tracking-widest px-12 py-6 rounded-none hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl">
                        Book a Free Consultation
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Services;

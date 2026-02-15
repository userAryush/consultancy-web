import { motion } from 'framer-motion';
import {
    Building2,
    UserCheck,
    Map,
    CheckCircle2,
    Zap,
    Award
} from 'lucide-react';
import { cn } from '../utils/cn';
import SectionWrapper from './ui/SectionWrapper';
import Card from './ui/Card';

const features = [
    {
        icon: Building2,
        title: "Top Universities",
        desc: "Partnerships with 500+ premium universities across the globe.",
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        icon: UserCheck,
        title: "Expert Mentors",
        desc: "Guidance from counselors who have studied abroad themselves.",
        color: "text-purple-600",
        bgColor: "bg-purple-50"
    },
    {
        icon: Award,
        title: "High Success Rate",
        desc: "98% visa approval rate and 100% university placement.",
        color: "text-amber-600",
        bgColor: "bg-amber-50"
    },
    {
        icon: Zap,
        title: "Fast Processing",
        desc: "Swift application handling through our digital processing desk.",
        color: "text-rose-600",
        bgColor: "bg-rose-50"
    },
    {
        icon: Map,
        title: "Global Presence",
        desc: "Offices in 10+ countries to support you even after you reach.",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50"
    },
    {
        icon: CheckCircle2,
        title: "End-to-End Support",
        desc: "From IELTS coaching to post-landing accommodation help.",
        color: "text-cyan-600",
        bgColor: "bg-cyan-50"
    }
];

const WhyChooseUs = () => {
    return (
        <SectionWrapper
            id="about-preview"
            title="Why Choose GlobalStudy?"
            subtitle="The Best for Your Future"
            className="bg-brand-secondary/50"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="p-8 h-full border-brand-primary/5 hover:border-brand-primary/20 group transition-all duration-300">
                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300", feature.bgColor)}>
                                <feature.icon className={cn("w-7 h-7 transition-colors duration-300 group-hover:text-white", feature.color)} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default WhyChooseUs;

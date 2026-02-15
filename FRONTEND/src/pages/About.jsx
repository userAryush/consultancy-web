import { motion } from 'framer-motion';
import { Target, Eye, History, Award } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import { useApi } from '../hooks/useApi';
import { teamService } from '../services';
import Skeleton from '../components/ui/Skeleton';

const About = () => {
    const { data: team, loading } = useApi(teamService.getAll);

    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <div className="relative h-[45vh] min-h-[400px] flex items-center mb-12 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                        alt="About Our Consultancy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-primary/90" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center text-white pt-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Empowering Your Global Ambitions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-secondary/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        With over 15 years of experience, we've helped thousands of students find their perfect university abroad.
                    </motion.p>
                </div>
            </div>

            {/* Chairman Highlight */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                                alt="Chairman"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-brand-secondary p-8 rounded-2xl shadow-xl hidden md:block border border-brand-primary/10 max-w-xs">
                            <Award className="w-10 h-10 text-brand-primary mb-4" />
                            <p className="text-gray-900 font-bold mb-1">Global Leadership Award</p>
                            <p className="text-gray-500 text-sm italic">Recognized for Excellence in Education Consulting (2024)</p>
                        </div>
                    </div>
                    <div>
                        <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">Message from the Chairman</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            "Education is the most powerful weapon which you can use to change the world."
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            At GlobalStudy, we don't just process applications; we build futures. Our mission is to bridge the gap between talented students and world-class education systems.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Every student has a unique story and a unique dream. Our personalized approach ensures that you're not just another number, but a pioneer on a journey that we're honored to support.
                        </p>
                        <div>
                            <h4 className="text-xl font-bold text-gray-900">Dr. Robert Chen</h4>
                            <p className="text-brand-primary font-medium">Founder & Chairman, GlobalStudy</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Vision & Mission */}
            <div className="bg-brand-secondary/50 py-24">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Target,
                            title: "Our Mission",
                            desc: "To provide transparent, ethical, and high-quality guidance to students aspiring for global education."
                        },
                        {
                            icon: Eye,
                            title: "Our Vision",
                            desc: "To be the world's most trusted partner in international education and career development."
                        },
                        {
                            icon: History,
                            title: "Our Legacy",
                            desc: "Building a bridge between aspirations and achievements for over 15 successful years."
                        }
                    ].map((item, i) => (
                        <Card key={i} className="p-10 text-center flex flex-col items-center hover:bg-brand-primary hover:text-white transition-all border-none shadow-none hover:shadow-lg group">
                            <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="opacity-80 leading-relaxed">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <SectionWrapper title="Meet Our Expert Team" subtitle="Guided by the Best">
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[...Array(4)].map((_, i) => <Skeleton key={i} className="aspect-[4/5] rounded-2xl" />)}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Array.isArray(team) && team.map((member, i) => (
                            <motion.div
                                key={member.id || i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                                    <img
                                        src={member.image || `https://i.pravatar.cc/400?u=${member.id}`}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                                <p className="text-brand-primary font-medium text-sm mb-2">{member.designation || member.role}</p>
                                <p className="text-gray-500 text-sm line-clamp-2">{member.bio || "Over 8 years of experience in student counseling and visa guidance."}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </SectionWrapper>
        </div>
    );
};

export default About;

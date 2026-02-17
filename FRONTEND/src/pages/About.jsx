import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, History, Award, ArrowRight, Linkedin, Facebook, Instagram, Twitter, Music2 } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import { useApi } from '../hooks/useApi';
import { teamService } from '../services';
import Skeleton from '../components/ui/Skeleton';
import CounsellorEmailModal from '../components/CounsellorEmailModal';

const About = () => {
    const { data: teamData, loading } = useApi(teamService.getGrouped);
    const [index, setIndex] = useState(0);
    const [selectedCounsellor, setSelectedCounsellor] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Initial state for team data to prevent undefined errors
    const processedTeam = teamData || { leaders: [], counsellors: [], staff: [] };

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

            {/* Our History Section */}
            <SectionWrapper className="bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center space-x-4 mb-8">

                        <h2 className="text-3xl font-bold">Our Journey & History</h2>
                    </div>
                    <div className="space-y-8 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[2px] before:bg-brand-primary/10">
                        {[
                            { year: '2010', title: 'The Beginning', desc: 'GlobalStudy was founded with a small office of 3 people and a big dream to simplify international education.' },
                            { year: '2015', title: 'Expanding Horizons', desc: 'Opened our 5th international branch and partnered with over 200 top-tier universities across 10 countries.' },
                            { year: '2020', title: 'Digital Transformation', desc: 'Launched our online counseling platform, helping students remotely during the global pandemic.' },
                            { year: '2024', title: 'Excellence Recognized', desc: 'Voted "Best Education Consultancy" by the Global Student Choice Awards for three consecutive years.' }
                        ].map((event, i) => (
                            <div key={i} className="relative pl-12">
                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-4 border-brand-primary z-10" />
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <h3 className="text-xl font-bold text-brand-primary">{event.year}: {event.title}</h3>
                                </div>
                                <p className="text-gray-600 mt-2 leading-relaxed">{event.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Achievements & Statistics */}
            <div className="bg-brand-primary py-24 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
                    {[
                        { label: 'Visa Success Rate', value: '98%' },
                        { label: 'University Partners', value: '500+' },
                        { label: 'Scholarships Secured', value: '$10M+' },
                        { label: 'Successful Students', value: '15,000+' }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <p className="text-4xl md:text-5xl font-black mb-2 text-brand-accent">{stat.value}</p>
                            <p className="text-brand-secondary/80 font-medium uppercase tracking-widest text-xs md:text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Vision & Mission */}
            <div className="bg-brand-secondary/30 py-24">
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
                        <Card key={i} className="p-10 h-full border-none shadow-xl hover:shadow-2xl group transition-all duration-500 bg-white">
                            <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-brand-secondary/30 py-24">
                <SectionWrapper title="Our Professional Team" subtitle="Guided by Experts">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[...Array(3)].map((_, i) => <Skeleton key={i} className="aspect-[4/5] rounded-3xl" />)}
                        </div>
                    ) : (
                        <div className="space-y-24">
                            {/* Combined Role-based Rows for About Page */}
                            {processedTeam.leaders.length > 0 && (
                                <div className="space-y-12">
                                    <div className="flex items-center space-x-4">
                                        
                                        <h3 className="text-2xl font-bold">Executive Leadership</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {processedTeam.leaders.map((leader, i) => (
                                            <motion.div
                                                key={leader.id || i}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                className="group overflow-hidden bg-white p-0 rounded-3xl shadow-lg border border-brand-primary/5 hover:shadow-xl transition-all"
                                            >
                                                <div className="aspect-[4/5] relative overflow-hidden">
                                                    <img
                                                        src={leader.image || `https://i.pravatar.cc/400?u=${leader.id}`}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        alt={leader.name}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                                <div className="p-8 text-center text-center">
                                                    <h4 className="text-xl font-bold text-gray-900">{leader.name}</h4>
                                                    <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-2">{leader.designation}</p>
                                                    <p className="text-gray-500 text-sm italic line-clamp-2">"{leader.short_bio || leader.bio}"</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {processedTeam.counsellors.length > 0 && (
                                <div className="space-y-12 outline-none" tabIndex="0" onKeyDown={(e) => {
                                    if (e.key === 'ArrowRight') {
                                        setIndex((prev) => Math.min(prev + 1, processedTeam.counsellors.length - 1));
                                    } else if (e.key === 'ArrowLeft') {
                                        setIndex((prev) => Math.max(prev - 1, 0));
                                    }
                                }}>
                                    <div className="flex items-center space-x-4">
                                        
                                        <h3 className="text-2xl font-bold">Expert Counsellors</h3>
                                    </div>

                                    <div className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none">
                                        <motion.div
                                            drag="x"
                                            dragConstraints={{ left: 0, right: 0 }}
                                            dragElastic={0.2}
                                            onDragEnd={(_, info) => {
                                                const threshold = 50;
                                                if (info.offset.x < -threshold && index < processedTeam.counsellors.length - 1) {
                                                    setIndex(index + 1);
                                                } else if (info.offset.x > threshold && index > 0) {
                                                    setIndex(index - 1);
                                                }
                                            }}
                                            animate={{
                                                x: `calc(-${index * (100 / (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1))}%)`
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            className="flex gap-8"
                                        >
                                            {processedTeam.counsellors.map((counsellor, i) => (
                                                <motion.div
                                                    key={counsellor.id || i}
                                                    animate={{
                                                        scale: i === index ? 1 : 0.95,
                                                        opacity: 1
                                                    }}
                                                    className="counsellor-card w-full md:w-[calc(33.33%-22px)] lg:w-[calc(25%-24px)] flex-shrink-0 group relative p-4 rounded-3xl bg-white/50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-primary/10"
                                                >
                                                    <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 shadow-sm group-hover:shadow-md transition-all">
                                                        <img
                                                            src={counsellor.image || `https://i.pravatar.cc/400?u=${counsellor.id}`}
                                                            alt={counsellor.name}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                                                        />
                                                        <div className="absolute inset-0 bg-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedCounsellor(counsellor);
                                                                    setIsModalOpen(true);
                                                                }}
                                                                className="bg-white text-brand-primary text-[10px] font-bold py-2 px-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                                            >
                                                                Contact/Email
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <h4 className="text-lg font-bold text-gray-900 mb-0.5">{counsellor.name}</h4>
                                                        <p className="text-brand-primary font-medium text-[10px] uppercase tracking-wider">{counsellor.designation}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            )}

                            {processedTeam.staff.length > 0 && (
                                <div className="space-y-12">
                                    <div className="flex items-center space-x-4">
                                    
                                        <h3 className="text-2xl font-bold">Support Staff</h3>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                        {processedTeam.staff.map((staff, i) => (
                                            <motion.div
                                                key={staff.id || i}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                className="text-center group"
                                            >
                                                <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all">
                                                    <img
                                                        src={staff.image || `https://i.pravatar.cc/400?u=${staff.id}`}
                                                        alt={staff.name}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                                <h5 className="font-bold text-sm">{staff.name}</h5>
                                                <p className="text-gray-500 text-[10px] uppercase">{staff.designation}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </SectionWrapper>
                {/* Social Connect Section */}
                <div className="mt-20 py-10 border-t border-brand-primary/5">
                    <div className="text-center">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Join Our Community</h4>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            Stay connected with us for the latest scholarship updates and international student news.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-5">
                            {[
                                { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, href: "#" },
                                { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, href: "#" },
                                { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, href: "#" },
                                { name: 'Twitter', icon: <Twitter className="w-6 h-6" />, href: "#" },
                                { name: 'TikTok', icon: <Music2 className="w-6 h-6" />, href: "#" }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="group relative p-4 rounded-2xl bg-white border border-gray-100 shadow-sm text-gray-600 hover:text-brand-primary hover:border-brand-primary/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="relative z-10">
                                        {social.icon}
                                    </div>
                                    <div className="absolute inset-0 bg-brand-primary/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {selectedCounsellor && (
                <CounsellorEmailModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    counsellor={selectedCounsellor}
                />
            )}
        </div>
    );
};

export default About;

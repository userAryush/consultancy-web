import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight, User } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Skeleton from '../components/ui/Skeleton';
import { teamService } from '../services';
import CounsellorEmailModal from '../components/CounsellorEmailModal';

const TeamPage = () => {
    const [teamData, setTeamData] = useState({ leaders: [], counsellors: [], staff: [] });
    const [loading, setLoading] = useState(true);
    const [selectedCounsellor, setSelectedCounsellor] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await teamService.getGrouped();
                setTeamData(response.data);
            } catch (error) {
                console.error("Failed to fetch team:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTeam();
    }, []);

    const handleEmailClick = (counsellor) => {
        setSelectedCounsellor(counsellor);
        setIsModalOpen(true);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    if (loading) {
        return (
            <div className="pt-24 space-y-16">
                {[...Array(3)].map((_, i) => (
                    <SectionWrapper key={i}>
                        <Skeleton className="h-10 w-48 mb-8 mx-auto" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[...Array(3)].map((_, idx) => (
                                <Skeleton key={idx} className="h-96 rounded-3xl" />
                            ))}
                        </div>
                    </SectionWrapper>
                ))}
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-brand-secondary/30 min-h-screen">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-brand-primary mb-6"
                >
                    Meet Our Professionals
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 text-xl max-w-2xl mx-auto"
                >
                    Our dedicated team of experts is here to guide your educational journey with trust and integrity.
                </motion.p>
            </div>

            {/* Leadership Section */}
            {teamData.leaders.length > 0 && (
                <SectionWrapper className="mb-32">
                    <div className="text-center mb-16">
                        <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Authority & Trust</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2">Leadership Team</h2>
                    </div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    >
                        {teamData.leaders.map((leader) => (
                            <motion.div key={leader.id} variants={itemVariants}>
                                <Card className="p-0 overflow-hidden border-none bg-brand-secondary shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                    <div className="aspect-[4/5] relative overflow-hidden">
                                        <img
                                            src={leader.image || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"}
                                            alt={leader.name}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="p-8 text-center">
                                        <h3 className="text-2xl font-bold text-brand-primary mb-1">{leader.name}</h3>
                                        <p className="text-brand-accent font-semibold mb-4 tracking-wide uppercase text-xs">{leader.designation}</p>
                                        <p className="text-gray-600 leading-relaxed text-sm italic line-clamp-3">
                                            "{leader.bio || leader.short_bio}"
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </SectionWrapper>
            )}

            {/* Counsellors Section */}
            {teamData.counsellors.length > 0 && (
                <SectionWrapper className="mb-32 px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Get Expert Guidance</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2">Professional Counsellors</h2>
                    </div>

                    <div className="relative group/scroll">
                        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar gap-8 w-full">
                            {teamData.counsellors.map((counsellor) => (
                                <motion.div
                                    key={counsellor.id}
                                    variants={itemVariants}
                                    className="snap-start w-[280px] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] flex-shrink-0 group relative"
                                >
                                    <Card className="overflow-hidden bg-brand-secondary border-none h-full transition-all duration-500 hover:shadow-2xl">
                                        <div className="relative h-80 overflow-hidden">
                                            <img
                                                src={counsellor.image || "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"}
                                                alt={counsellor.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                <Button
                                                    onClick={() => handleEmailClick(counsellor)}
                                                    variant="primary"
                                                    className="bg-white text-brand-primary hover:bg-brand-accent hover:text-white border-none shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-bold"
                                                >
                                                    <Mail className="w-5 h-5 mr-2" />
                                                    Contact Counsellor
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <h3 className="text-xl font-bold mb-1">{counsellor.name}</h3>
                                            <p className="text-brand-primary font-medium text-xs mb-4 uppercase tracking-wider">{counsellor.designation}</p>
                                            <p className="text-gray-600 text-sm mb-6 line-clamp-2">{counsellor.short_bio}</p>
                                            <div className="flex items-center space-x-4 pt-6 border-t border-brand-primary/5">
                                                <a
                                                    href={`https://wa.me/${counsellor.whatsapp_number}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-green-600 hover:text-green-700 transition-colors"
                                                    title="WhatsApp"
                                                >
                                                    <MessageCircle className="w-5 h-5" />
                                                </a>
                                                <div className="h-4 w-[1px] bg-gray-200" />
                                                <button
                                                    onClick={() => handleEmailClick(counsellor)}
                                                    className="text-brand-primary hover:text-brand-accent transition-colors"
                                                    title="Email"
                                                >
                                                    <Mail className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>
            )}

            {/* Staff Section */}
            {teamData.staff.length > 0 && (
                <SectionWrapper>
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Supporting Operations</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Support Staff</h2>
                    </div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                    >
                        {teamData.staff.map((staff) => (
                            <motion.div key={staff.id} variants={itemVariants}>
                                <div className="group relative aspect-square rounded-2xl overflow-hidden bg-brand-secondary shadow-md hover:shadow-xl transition-all duration-500">
                                    <img
                                        src={staff.image || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"}
                                        alt={staff.name}
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="font-bold text-sm text-gray-900">{staff.name}</p>
                                    <p className="text-xs text-gray-500">{staff.designation}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </SectionWrapper>
            )}

            {/* Modal */}
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

export default TeamPage;

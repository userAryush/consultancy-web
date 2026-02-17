import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { teamService } from '../services';
import SectionWrapper from './ui/SectionWrapper';
import Skeleton from './ui/Skeleton';
import CounsellorEmailModal from './CounsellorEmailModal';

const Team = () => {
    const { data: teamData, loading } = useApi(teamService.getGrouped);
    const [selectedCounsellor, setSelectedCounsellor] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Carousel State
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const dragX = useMotionValue(0);

    const handleEmailClick = (counsellor) => {
        setSelectedCounsellor(counsellor);
        setIsModalOpen(true);
    };

    const onKeyDown = (e) => {
        if (!teamData?.counsellors?.length) return;
        if (e.key === 'ArrowRight') {
            setIndex((prev) => Math.min(prev + 1, teamData.counsellors.length - 1));
        } else if (e.key === 'ArrowLeft') {
            setIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    if (loading) {
        return (
            <SectionWrapper title="Our Expert Team" subtitle="Meet the Professionals">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[...Array(3)].map((_, i) => (
                        <Skeleton key={i} className="aspect-[4/5] rounded-2xl" />
                    ))}
                </div>
            </SectionWrapper>
        );
    }

    if (!teamData || (!teamData.leaders.length && !teamData.counsellors.length)) return null;

    return (
        <SectionWrapper
            id="team"
            title="Our Expert Team"
            subtitle="Meet the Professionals"
            className="bg-brand-secondary/30"
        >
            <div className="space-y-24">
                {/* Leaders Summary Row */}
                {teamData.leaders.length > 0 && (
                    <div className="space-y-12">
                        <div className="flex items-center space-x-4">

                            <h3 className="text-2xl font-bold">Executive Leadership</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamData.leaders.slice(0, 3).map((leader, i) => (
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
                                    <div className="p-8 text-center">
                                        <h4 className="text-xl font-bold text-gray-900">{leader.name}</h4>
                                        <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-2">{leader.designation}</p>
                                        <p className="text-gray-500 text-sm italic line-clamp-2">"{leader.short_bio || leader.bio}"</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Gesture-based Counsellor Carousel */}
                {teamData.counsellors.length > 0 && (
                    <div className="space-y-12 outline-none" tabIndex="0" onKeyDown={onKeyDown}>
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
                                    if (info.offset.x < -threshold && index < teamData.counsellors.length - 1) {
                                        setIndex(index + 1);
                                    } else if (info.offset.x > threshold && index > 0) {
                                        setIndex(index - 1);
                                    }
                                }}
                                animate={{ x: `calc(-${index * (100 / (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1))}%)` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="flex gap-8"
                            >
                                {teamData.counsellors.map((member, i) => (
                                    <motion.div
                                        key={member.id || i}
                                        animate={{
                                            scale: i === index ? 1 : 0.95,
                                            opacity: 1
                                        }}
                                        className="w-full md:w-[calc(33.33%-22px)] lg:w-[calc(25%-24px)] flex-shrink-0 group relative p-4 rounded-3xl bg-white/50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-primary/10"
                                    >
                                        <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 shadow-sm group-hover:shadow-md transition-all">
                                            <img
                                                src={member.image || `https://i.pravatar.cc/400?u=${member.id}`}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                                            />
                                            <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                <button
                                                    onClick={() => handleEmailClick(member)}
                                                    className="bg-white text-brand-primary text-[10px] font-bold py-2 px-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                                >
                                                    Contact/Email
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h4 className="text-lg font-bold text-gray-900 mb-0.5">{member.name}</h4>
                                            <p className="text-brand-primary font-medium text-[10px] uppercase tracking-wider">{member.designation}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                )}
            </div>

            {selectedCounsellor && (
                <CounsellorEmailModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    counsellor={selectedCounsellor}
                />
            )}
        </SectionWrapper>
    );
};

export default Team;

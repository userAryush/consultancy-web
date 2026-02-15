import { motion } from 'framer-motion';
import { useApi } from '../hooks/useApi';
import { teamService } from '../services';
import SectionWrapper from './ui/SectionWrapper';
import Skeleton from './ui/Skeleton';

const Team = () => {
    const { data: team, loading } = useApi(teamService.getAll);

    if (loading) {
        return (
            <SectionWrapper title="Our Expert Team" subtitle="Meet the Professionals">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="aspect-[4/5] rounded-2xl" />
                    ))}
                </div>
            </SectionWrapper>
        );
    }

    if (!team || !Array.isArray(team) || team.length === 0) return null;

    return (
        <SectionWrapper
            id="team"
            title="Our Expert Team"
            subtitle="Meet the Professionals"
            className="bg-brand-secondary/30"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.slice(0, 4).map((member, i) => (
                    <motion.div
                        key={member.id || i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-4 rounded-3xl bg-brand-secondary hover:shadow-xl transition-all duration-300"
                    >
                        <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                            <img
                                src={member.image || `https://i.pravatar.cc/400?u=${member.id}`}
                                alt={member.name}
                                className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                        <p className="text-brand-primary font-medium text-sm mb-2">{member.designation || member.role}</p>
                        <p className="text-gray-500 text-sm line-clamp-2">{member.bio || "Expert education consultant with years of experience."}</p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Team;

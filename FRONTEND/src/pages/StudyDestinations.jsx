import { motion } from 'framer-motion';
import { useApi } from '../hooks/useApi';
import { destinationService } from '../services';
import SectionWrapper from '../components/ui/SectionWrapper';
import Skeleton from '../components/ui/Skeleton';

// For simplicity in this step, I'll redefine a more detailed list card if needed, 
// but DestinationPreview already has a good one. 
// However, DestinationCard in DestinationPreview was local. Let's make it reusable or redefine.

const StudyDestinations = () => {
    const { data: destinations, loading } = useApi(destinationService.getAll);

    return (
        <div className="min-h-screen">
            <div className="relative h-[45vh] min-h-[400px] flex items-center mb-12 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1706823871410-ed8b01faef7e?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Education"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-primary/90" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-white pt-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Explore Study Destinations
                    </motion.h1>
                    <p className="text-brand-secondary/90 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Choose from the world's most popular education hubs and start your international career journey today.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <Skeleton key={i} className="aspect-[3/4] rounded-2xl" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {Array.isArray(destinations) && destinations.map((dest, i) => (
                            <motion.div
                                key={dest.id || i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <a href={`/destinations/${dest.slug}`}>
                                    <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lg bg-brand-secondary">
                                        <img
                                            src={dest.banner_image || dest.image || "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80"}
                                            alt={dest.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-transparent to-transparent opacity-80" />
                                        <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                                            <h3 className="text-3xl font-bold mb-2">{dest.name}</h3>
                                            <p className="text-brand-secondary/80 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {dest.description || `Discover world-class universities and vibrant student life in ${dest.name}.`}
                                            </p>
                                            <div className="flex items-center text-brand-accent font-bold uppercase tracking-wider text-xs">
                                                View Universities <span>&rarr;</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                )}
            </SectionWrapper>
        </div>
    );
};

export default StudyDestinations;

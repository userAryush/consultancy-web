import { motion } from 'framer-motion';
import { useApi } from '../hooks/useApi';
import { destinationService } from '../services';
import SectionWrapper from '../components/ui/SectionWrapper';
import Skeleton from '../components/ui/Skeleton';
import { DestinationCard } from '../components/DestinationPreview';

const StudyDestinations = () => {
    const { data: destinations, loading } = useApi(destinationService.getAll);

    return (
        <div className="min-h-screen pb-20">
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
                        className="text-4xl md:text-7xl font-bold mb-6"
                    >
                        Explore Study Destinations
                    </motion.h1>
                    <p className="text-brand-secondary/90 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Choose from the world's most popular education hubs and start your international career journey today.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Destinations</h2>
                    <p className="text-gray-600">Discover your path in one of these global education centers.</p>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[...Array(8)].map((_, i) => (
                            <Skeleton key={i} className="aspect-[3/4] rounded-2xl" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Array.isArray(destinations) && destinations.map((dest, i) => (
                            <DestinationCard
                                key={dest.id || i}
                                destination={dest}
                                index={i}
                            />
                        ))}
                    </div>
                )}
            </SectionWrapper>
        </div>
    );
};

export default StudyDestinations;

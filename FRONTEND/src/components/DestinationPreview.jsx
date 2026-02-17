import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { destinationService } from '../services';
import SectionWrapper from './ui/SectionWrapper';
import Card from './ui/Card';
import Button from './ui/Button';
import Skeleton from './ui/Skeleton';

const countryToCode = {
    'usa': 'us',
    'united states': 'us',
    'uk': 'gb',
    'united kingdom': 'gb',
    'canada': 'ca',
    'australia': 'au',
    'germany': 'de',
    'ireland': 'ie',
    'new zealand': 'nz',
    'japan': 'jp',
    'south korea': 'kr',
    'france': 'fr',
};

export const DestinationCard = ({ destination, index }) => {
    const countryCode = countryToCode[destination.name.toLowerCase()] || countryToCode[destination.slug.toLowerCase()] || 'un';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link to={`/destinations/${destination.slug}`}>
                <Card className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden border-none cursor-pointer">
                    <div className="absolute inset-0">
                        <img
                            src={destination.banner_image || destination.image || "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80"}
                            alt={destination.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent transition-opacity duration-300 group-hover:opacity-90 opacity-80" />
                    </div>

                    {/* Flag Pop-up (Sliding Animation) */}
                    <div className="absolute top-4 right-0 z-20 pointer-events-none overflow-hidden">
                        <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-l-lg shadow-xl border border-white/50 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            <img
                                src={`https://flagcdn.com/w80/${countryCode}.png`}
                                alt={`${destination.name} flag`}
                                className="w-8 h-auto rounded-sm shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center space-x-1 text-brand-accent text-xs font-bold mb-2 uppercase tracking-widest">
                            <MapPin className="w-3 h-3" />
                            <span>Popular Choice</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 flex items-center justify-between">
                            {destination.name}
                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-gray-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                            {destination.description || `Explore top universities and career opportunities in ${destination.name}.`}
                        </p>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
};

const DestinationPreview = () => {
    const { data: destinations, loading, error } = useApi(destinationService.getAll);

    if (loading) {
        return (
            <SectionWrapper
                title="Top Study Destinations"
                subtitle="Explore the World"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="aspect-[3/4] rounded-2xl" />
                    ))}
                </div>
            </SectionWrapper>
        );
    }

    // Handle empty or error states gracefully
    if (error || !destinations || !Array.isArray(destinations) || destinations.length === 0) {
        return null; // Or show error message
    }

    return (
        <SectionWrapper
            id="destinations"
            title="Popular Study Destinations"
            subtitle="Start Your Journey"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {destinations?.slice(0, 4).map((dest, index) => (
                    <DestinationCard
                        key={dest.id || index}
                        destination={dest}
                        index={index}
                    />
                ))}
            </div>

            <div className="text-center">
                <Link to="/destinations">
                    <Button variant="outline" size="lg">
                        View All Destinations
                    </Button>
                </Link>
            </div>
        </SectionWrapper>
    );
};

export default DestinationPreview;

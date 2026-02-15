import { motion } from 'framer-motion';
import { useApi } from '../hooks/useApi';
import { galleryService } from '../services';
import SectionWrapper from '../components/ui/SectionWrapper';
import Skeleton from '../components/ui/Skeleton';

const Gallery = () => {
    const { data: images, loading } = useApi(galleryService.getAll);

    return (
        <div className="min-h-screen">
            <div className="relative h-[45vh] min-h-[400px] flex items-center mb-12 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                        alt="Gallery"
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
                        Our Gallery
                    </motion.h1>
                    <p className="text-brand-secondary/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A glimpse into the life of our students and our consultancy events across the world.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                {loading ? (
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                        {[...Array(6)].map((_, i) => (
                            <Skeleton key={i} className="w-full h-64 rounded-2xl" />
                        ))}
                    </div>
                ) : (
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                        {Array.isArray(images) && images.map((img, i) => (
                            <motion.div
                                key={img.id || i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="break-inside-avoid"
                            >
                                <div className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 bg-brand-secondary">
                                    <img
                                        src={img.image || img.url}
                                        alt={img.title || "Gallery Image"}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-2">{img.title || "Campus Life"}</h4>
                                            <p className="text-brand-accent text-sm">{img.caption || "Success story celebration"}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </SectionWrapper>
        </div>
    );
};

export default Gallery;

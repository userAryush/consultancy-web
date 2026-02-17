import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    MapPin,
    GraduationCap,
    FileText,
    ArrowRight,
    Info,
    ExternalLink,
    Sparkles
} from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { destinationService } from '../services';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Skeleton from '../components/ui/Skeleton';
import FAQ from '../components/FAQ';

const DestinationDetail = () => {
    const { slug } = useParams();
    const { data: destination, loading: destLoading } = useApi(() => destinationService.getBySlug(slug), [slug]);

    if (destLoading) {
        return (
            <div className="space-y-12">
                <Skeleton className="h-[60vh] w-full" />
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-9 space-y-6">
                            <Skeleton className="h-12 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                        <div className="lg:col-span-3">
                            <Skeleton className="h-64 rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!destination) return <div className="pt-40 text-center">Destination not found</div>;

    const universities = destination.universities || [];
    const steps = destination.application_steps || [];
    const requirements = destination.document_requirements || [];

    return (
        <div className="bg-white">
            {/* Hero Section - Same Design */}
            <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
                <img
                    src={destination.banner_image || destination.image}
                    className="w-full h-full object-cover"
                    alt={destination.name}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/90 via-brand-primary/60 to-brand-primary/10" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 z-10 pt-24">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">{destination.name}</h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide drop-shadow-md">
                            {destination.meta_title || "Your gateway to premium international education."}
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
                    <svg className="relative block w-full h-[60px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,40 C400,140 800,-30 1200,90 L1200,120 L0,120 Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
            </div>

            {/* Main Content Grid - Widened to 1400px and 9:3 split */}
            <div className="max-w-[1440px] mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Widened to span 9 columns */}
                    <div className="lg:col-span-9 space-y-24">

                        {/* REDESIGNED: Why Study Section */}
                        <section className="relative">
                            <div className="flex items-center space-x-4 mb-10">
                                <div className="p-3 bg-brand-primary/10 rounded-2xl">
                                    <Sparkles className="w-8 h-8 text-brand-primary" />
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                                    Why Study in <span className="text-brand-primary">{destination.name}?</span>
                                </h2>
                            </div>

                           
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                                <div className="prose prose-xl text-gray-700 max-w-none relative z-10">
                                    <p className="leading-relaxed whitespace-pre-wrap font-medium text-gray-800">
                                        {destination.why_study || destination.full_description || destination.short_description}
                                    </p>
                                </div>
                            
                        </section>

                        {/* Application Roadmap - Same Design */}
                        <section>
                            <div className="flex items-center space-x-4 mb-12">
                                <div className="p-3 bg-brand-primary/10 rounded-xl">
                                    <GraduationCap className="w-8 h-8 text-brand-primary" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Application Roadmap</h3>
                            </div>
                            <div className="relative space-y-12 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-primary/10">
                                {steps.map((step, i) => (
                                    <div key={step.id || i} className="relative pl-14 group">
                                        <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-brand-secondary border-4 border-brand-primary flex items-center justify-center font-bold text-brand-primary z-10 transition-colors group-hover:bg-brand-primary group-hover:text-white">
                                            {step.order_number || i + 1}
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                                        <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Document Requirements - Redesigned for Clarity */}
                        <section id="requirements" className="bg-brand-secondary/40 -mx-6 px-10 py-20 md:rounded-[3rem] border border-brand-primary/5">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
                                <div className="flex items-center space-x-4">
                                    <div className="p-4 bg-white rounded-2xl shadow-sm">
                                        <FileText className="w-10 h-10 text-brand-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900">Document Requirements</h3>
                                        <p className="text-gray-500 mt-1">Ensure you have these prepared for your application</p>
                                    </div>
                                </div>
                            </div>

                            {requirements.length > 0 ? (
                                /* Grid changed to 1 column on mobile, 2 columns on large screens */
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {requirements.map((req, i) => (
                                        <div
                                            key={req.id || i}
                                            className="group bg-white p-8 rounded-3xl shadow-sm border border-transparent hover:border-brand-primary/20 hover:shadow-xl transition-all duration-300 flex items-start space-x-6"
                                        >
                                            {/* Visual Indicator */}
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="bg-green-100 group-hover:bg-green-500 transition-colors rounded-full p-2">
                                                    <CheckCircle2 className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-grow">
                                                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                                                    {req.title}
                                                </h4>
                                                {req.description && (
                                                    <p className="text-gray-600 text-base leading-relaxed">
                                                        {req.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white/50 backdrop-blur-sm p-10 rounded-3xl border border-dashed border-gray-300 text-center">
                                    <p className="text-gray-500 italic text-lg">No specific requirements listed at this time.</p>
                                </div>
                            )}
                        </section>


                        {/* Universities Grid - 2 per row with Massive Image focus */}
                        <section>
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-brand-primary/10 rounded-xl">
                                        <MapPin className="w-8 h-8 text-brand-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900">Top Universities</h3>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {universities.map((univ, i) => (
                                    <Card
                                        key={univ.id || i}
                                        className="group overflow-hidden rounded-2xl border-none bg-white shadow-md hover:shadow-2xl transition-all duration-300"
                                    >
                                        {/* BIG IMAGE CONTAINER: Covering the top/full width */}
                                        <div className="relative h-64 sm:h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
                                            {univ.logo ? (
                                                <img
                                                    src={univ.logo}
                                                    alt={univ.name}
                                                    // object-cover makes it fill the space like a background
                                                    // object-contain is safer if logos have specific aspect ratios
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <GraduationCap className="w-24 h-24 text-gray-300" />
                                            )}

                                            {/* Optional Gradient Overlay to make the image feel more "premium" */}
                                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                                        </div>

                                        {/* TEXT CONTENT: Simple and clean below the big image */}
                                        <div className="p-8">
                                            <h4 className="text-2xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                                                {univ.name}
                                            </h4>
                                            {univ.ranking && (
                                                <p className="mt-2 text-brand-primary font-bold text-sm uppercase tracking-wider">
                                                    Global Rank: #{univ.ranking}
                                                </p>
                                            )}
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        <section id="faqs">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="p-3 bg-brand-primary/10 rounded-xl">
                                    <Info className="w-8 h-8 text-brand-primary" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h3>
                            </div>
                            <FAQ limit={10} />
                        </section>
                    </div>

                    {/* Right Column: Narrowed to span 3 columns */}
                    <div className="lg:col-span-3 lg:relative">
                        <div className="sticky top-28 space-y-6">

                            {/* Main CTA - Compressed Padding */}
                            <div className="bg-brand-primary p-8 rounded-[2rem] text-white shadow-xl shadow-brand-primary/20">
                                <h4 className="text-2xl font-bold mb-4">Ready to Start?</h4>
                                <p className="text-brand-secondary/80 text-sm mb-6 leading-relaxed">
                                    Expert guidance for your application to {destination.name}.
                                </p>
                                <div className="space-y-3">
                                    <Link to="/contact">
                                        <Button variant="outline" className="w-full h-12 text-md border-white/30 text-white hover:bg-white/10">
                                            Book Consultation
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Need Help? Box - Scaled Down */}
                            <div className="bg-brand-secondary/30 p-6 rounded-[2rem] border border-brand-primary/5">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h4>
                                <p className="text-xs text-gray-600 mb-4 font-medium">Questions about visa or scholarships?</p>
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0">
                                        <ExternalLink className="w-5 h-5" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Call us</p>
                                        <p className="font-bold text-gray-900 text-sm truncate">+977-1-4XXXXXX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DestinationDetail;
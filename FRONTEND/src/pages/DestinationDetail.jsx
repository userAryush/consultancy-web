import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    MapPin,
    GraduationCap,
    FileText,
    ArrowRight,
    Info,
    ExternalLink
} from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { destinationService, universityService } from '../services';
import SectionWrapper from '../components/ui/SectionWrapper';
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
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-6">
                            <Skeleton className="h-12 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                        <Skeleton className="h-64 rounded-2xl" />
                    </div>
                </SectionWrapper>
            </div>
        );
    }

    if (!destination) return <div className="pt-40 text-center">Destination not found</div>;

    const universities = destination.universities || [];
    const steps = destination.application_steps || [];
    const requirements = destination.document_requirements || [];

    return (
        // <div className="bg-white">
        //     {/* Hero Section */}
        //     <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        //         <img
        //             src={destination.banner_image || destination.image}
        //             className="w-full h-full object-cover"
        //             alt={destination.name}
        //         />
        //         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        //         <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
        //             <motion.div
        //                 initial={{ opacity: 0, y: 30 }}
        //                 animate={{ opacity: 1, y: 0 }}
        //                 className="max-w-4xl"
        //             >
        //                 <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">{destination.name}</h1>
        //                 <p className="text-xl md:text-2xl font-light tracking-wide drop-shadow-md">
        //                     {destination.meta_title || "Your gateway to premium international education."}
        //                 </p>
        //             </motion.div>
        //         </div>
        //     </div>
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
                <img
                    src={destination.banner_image || destination.image}
                    className="w-full h-full object-cover"
                    alt={destination.name}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/90 via-brand-primary/60 to-brand-primary/10" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 z-10 pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">{destination.name}</h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide drop-shadow-md">
                            {destination.meta_title || "Your gateway to premium international education."}
                        </p>
                    </motion.div>
                </div>

                {/* The Asymmetrical Curve */}
                <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
                    <svg
                        className="relative block w-full h-[60px] md:h-[100px]"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            /* M0,40 (Starts high on left) 
                               C400,140 800,-30 1200,90 (Dips and ends lower on right) 
                            */
                            d="M0,40 C400,140 800,-30 1200,90 L1200,120 L0,120 Z"
                            fill="#FFFFFF"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Extensive Info */}
                    <div className="lg:col-span-8 space-y-24">

                        {/* Why Study Section */}
                        <section>
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="p-3 bg-brand-primary/10 rounded-xl">
                                    <Info className="w-8 h-8 text-brand-primary" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Why Study in {destination.name}?</h2>
                            </div>
                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <p className="leading-relaxed whitespace-pre-wrap text-lg">
                                    {destination.why_study || destination.full_description || destination.short_description}
                                </p>
                            </div>
                        </section>

                        {/* Document Requirements (Now a full section) */}
                        <section id="requirements" className="bg-brand-secondary -mx-4 px-4 py-16 md:rounded-3xl border border-brand-primary/5">
                            <div className="flex items-center space-x-4 mb-10">
                                <div className="p-3 bg-brand-primary/10 rounded-xl">
                                    <FileText className="w-8 h-8 text-brand-primary" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Document Requirements</h3>
                            </div>

                            {requirements.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {requirements.map((req, i) => (
                                        <div key={req.id || i} className="bg-white/50 p-6 rounded-2xl shadow-sm border border-brand-primary/5 flex items-start space-x-4">
                                            <div className="mt-1 bg-green-50 rounded-full p-1">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{req.title}</h4>
                                                {req.description && <p className="text-gray-600 text-sm leading-relaxed">{req.description}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 italic">No specific requirements listed for this destination yet.</p>
                            )}
                        </section>

                        {/* Application Roadmap */}
                        <section>
                            <div className="flex items-center space-x-4 mb-12">
                                <div className="p-3 bg-brand-primary/10 rounded-xl">
                                    <GraduationCap className="w-8 h-8 text-brand-primary" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Application Roadmap</h3>
                            </div>

                            <div className="relative space-y-12 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-primary/10">
                                {steps.length > 0 ? (
                                    steps.map((step, i) => (
                                        <div key={step.id || i} className="relative pl-14 group">
                                            <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-brand-secondary border-4 border-brand-primary flex items-center justify-center font-bold text-brand-primary z-10 transition-colors group-hover:bg-brand-primary group-hover:text-white">
                                                {step.order_number || i + 1}
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                                            <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 italic">Application roadmap is being updated.</p>
                                )}
                            </div>
                        </section>

                        {/* Universities Grid */}
                        <section>
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-brand-primary/10 rounded-xl">
                                        <MapPin className="w-8 h-8 text-brand-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900">Top Universities</h3>
                                </div>
                                <span className="px-4 py-2 bg-brand-secondary/50 rounded-full text-brand-primary font-bold text-sm">
                                    {universities.length} Partners
                                </span>
                            </div>

                            {universities.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {universities.map((univ, i) => (
                                        <Card key={univ.id || i} className="p-8 flex items-center space-x-6 border-brand-primary/5 hover:border-brand-primary/20 hover:shadow-xl transition-all duration-300">
                                            <div className="min-w-[80px] h-20 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden p-2">
                                                {univ.logo ? (
                                                    <img src={univ.logo} alt={univ.name} className="max-w-full max-h-full object-contain" />
                                                ) : (
                                                    <GraduationCap className="w-10 h-10 text-gray-300" />
                                                )}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-1 leading-tight">{univ.name}</h4>
                                                {univ.ranking && <p className="text-brand-primary font-medium text-sm mb-1">Global Rank: #{univ.ranking}</p>}
                                                <p className="text-gray-500 text-sm flex items-center">
                                                    <MapPin className="w-3 h-3 mr-1" /> {destination.name}
                                                </p>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
                                    <p className="text-gray-500 italic">No university partners listed yet for this destination.</p>
                                </div>
                            )}
                        </section>

                        {/* FAQ Section */}
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

                    {/* Right Column: CTA / Sticky Info */}
                    <div className="lg:col-span-4 lg:relative">
                        <div className="sticky top-28 space-y-8">

                            {/* Main CTA */}
                            <div className="bg-brand-primary p-10 rounded-[2rem] text-white shadow-2xl shadow-brand-primary/20">
                                <h4 className="text-3xl font-bold mb-6">Ready to Start?</h4>
                                <p className="text-brand-secondary/80 text-lg mb-8 leading-relaxed">
                                    Our expert consultants are ready to guide you through every step of your application to {destination.name}.
                                </p>
                                <div className="space-y-4">
                                    <Link to="/contact">
                                        <Button className="w-full h-14 text-lg bg-white text-brand-primary hover:bg-brand-secondary">
                                            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </Link>
                                    <Link to="/contact">
                                        <Button variant="outline" className="w-full h-14 text-lg border-white/30 text-white hover:bg-white/10">
                                            Book Consultation
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Need Help? Box */}
                            <div className="bg-brand-secondary/30 p-8 rounded-[2rem] border border-brand-primary/5">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h4>
                                <p className="text-gray-600 mb-6 font-medium">Have questions about visa or scholarships?</p>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white">
                                        <ExternalLink className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Call us at</p>
                                        <p className="font-bold text-gray-900">+977-1-4XXXXXX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DestinationDetail;

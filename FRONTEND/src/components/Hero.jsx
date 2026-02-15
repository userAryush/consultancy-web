import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Play, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
    return (
        <section className="relative h-screen w-full bg-brand-secondary overflow-hidden">
            {/* Full-screen Background with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
            </div>


            {/* Asymmetrical SVG Wave */}
            <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-0">
                <svg
                    className="relative block w-full h-[60px] md:h-[100px]"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        /* M 0,40: Start slightly down from the top left
                           C 400,150 800,-40 1200,80: 
                           This uses a Cubic Bezier for more "sway" control 
                        */
                        d="M0,40 C400,140 800,-30 1200,90 L1200,120 L0,120 Z"
                        fill="#FFFDF1"
                        className="drop-shadow-[0_-5px_15px_rgba(0,0,0,0.1)]"
                    ></path>
                </svg>
            </div>

            {/* Content Overlay (Centered original content, z-10) */}
            {/* <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-8"
                    >
                        <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                        <span className="text-sm font-medium tracking-wide">TRUSTED BY 5000+ STUDENTS</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                        Your Bridge to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
                            <TypeAnimation
                                sequence={[
                                    'Global Education',
                                    2000,
                                    'World Class Universities',
                                    2000,
                                    'A Brighter Future',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-medium">
                        Expert guidance for international studies. From university selection to visa processing, we handle it all with precision and care.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button size="lg" className="w-full sm:w-auto px-8 py-4">
                            Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                            Explore Destinations
                        </Button>
                    </div>
                </motion.div>
            </div> */}

            {/* Content Overlay (Perfectly Centered) */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center max-w-4xl" // Added items-center here
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-8"
                    >
                        <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                        <span className="text-sm font-medium tracking-wide">TRUSTED BY 5000+ STUDENTS</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                        Your Bridge to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
                            <TypeAnimation
                                sequence={[
                                    'Global Education',
                                    2000,
                                    'World Class Universities',
                                    2000,
                                    'A Brighter Future',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-medium">
                        Expert guidance for international studies. From university selection to visa processing, we handle it all with precision and care.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                        <Button size="lg" className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-primary hover:bg-white transition-colors border-none shadow-md">
                            Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 py-4 shadow-xl">
                            Explore Destinations
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

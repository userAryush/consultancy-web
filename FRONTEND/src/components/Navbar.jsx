import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, GraduationCap, PhoneCall } from 'lucide-react';
import { cn } from '../utils/cn';
import Button from './ui/Button';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center px-6",
                scrolled ? "bg-brand-secondary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
            )}
        >
            {/* Added w-full here to ensure the container stretches to justify-between */}
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between">

                {/* Logo Section */}
                <Link to="/" className="flex items-center space-x-3 shrink-0">
                    <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center border transition-colors",
                        scrolled ? "bg-brand-primary border-brand-primary" : "bg-white/20 backdrop-blur-md border-white/30"
                    )}>
                        <GraduationCap className={cn("w-6 h-6 transition-colors", scrolled ? "text-white" : "text-white")} />
                    </div>
                    <span className={cn(
                        "font-bold text-2xl tracking-tight transition-colors",
                        scrolled ? "text-brand-primary" : "text-white"
                    )}>
                        GlobalStudy
                    </span>
                </Link>

                {/* Desktop Links & Buttons */}
                <div className="hidden md:flex items-center space-x-10">
                    <div className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    'text-sm font-semibold transition-colors relative pb-1',
                                    scrolled ? 'text-gray-700 hover:text-brand-primary' : 'text-white/80 hover:text-white',
                                    location.pathname === link.path && (scrolled ? 'text-brand-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-primary' : 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-accent')
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4 border-l border-white/20 pl-8">
                        {/* Contact Us as a Secondary Button */}
                        <Link to="/contact">
                            <Button
                                variant="outline"
                                size="sm"
                                className={cn(
                                    "transition-colors",
                                    scrolled
                                        ? "text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white"
                                        : "text-white border-white hover:bg-white hover:text-brand-primary"
                                )}
                            >
                                Contact Us
                            </Button>
                        </Link>

                        {/* Book Consultation as a High-Contrast Button */}
                        <Button variant="primary" size="sm" className="text-white hover:bg-brand-primary transition-colors border-none shadow-md">
                            Book Consultation
                        </Button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 rounded-lg transition-colors",
                        scrolled ? "text-brand-primary hover:bg-brand-primary/10" : "text-white hover:bg-white/10"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 w-full h-screen bg-white z-[60] p-6 flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-12">
                            <Link to="/" className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                                    <GraduationCap className="text-white w-6 h-6" />
                                </div>
                                <span className="font-bold text-xl text-brand-primary">GlobalStudy</span>
                            </Link>
                            <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full">
                                <X className="text-gray-900" />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-4">
                            {[...navLinks, { name: 'Contact', path: '/contact' }].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={cn(
                                        'text-2xl font-bold text-gray-800 flex items-center justify-between py-2 border-b border-gray-50',
                                        location.pathname === link.path && 'text-brand-primary'
                                    )}
                                >
                                    {link.name}
                                    <ChevronRight className="w-6 h-6 text-gray-300" />
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto space-y-4 pb-10">
                            <Button className="w-full py-4 text-lg shadow-lg bg-brand-primary text-white">
                                Free Consultation
                            </Button>
                            <div className="flex items-center justify-center space-x-3 text-gray-600">
                                <PhoneCall className="w-5 h-5 text-brand-primary" />
                                <span className="font-semibold">+1 (234) 567-890</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
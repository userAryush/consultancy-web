import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-primary text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand section */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center space-x-2 text-white">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">GlobalStudy</span>
                    </Link>
                    <p className="text-gray-300/80 leading-relaxed">
                        Leading study abroad consultancy helping students achieve their dreams of international education with expert guidance and support.
                    </p>
                    <div className="flex space-x-4">
                        {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all duration-300"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        {['About Us', 'Study Destinations', 'Our Services', 'Success Stories', 'Contact Us'].map((link) => (
                            <li key={link}>
                                <Link to="#" className="hover:text-brand-accent transition-colors duration-200 flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-brand-accent mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Popular Destinations */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Destinations</h4>
                    <ul className="space-y-4">
                        {['Study in USA', 'Study in UK', 'Study in Canada', 'Study in Australia', 'Study in Germany'].map((link) => (
                            <li key={link}>
                                <Link to="#" className="hover:text-brand-accent transition-colors duration-200">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                            <span>123 Education Plaza, City Center, Main Street, NY 10001</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                            <span>+1 (234) 567-890</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                            <span>info@globalstudy.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
                <p>© {currentYear} GlobalStudy Consultancy. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

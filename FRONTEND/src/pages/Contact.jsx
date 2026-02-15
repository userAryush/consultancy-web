import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Send,
    User,
    Globe,
    MessageSquare,
    Clock,
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import toast from 'react-hot-toast';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { formService } from '../services';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }

        try {
            setLoading(true);
            await formService.submitInquiry(formData);
            toast.success('Inquiry submitted successfully!');
            setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to submit inquiry');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="relative h-[45vh] min-h-[400px] flex items-center border-b border-gray-100 overflow-hidden">
                {/* Background Image Overlay Section */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-primary/90" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center text-white pt-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        Contact Our Experts
                    </motion.h1>
                    <p className="text-brand-secondary/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Take the first step towards your international career. We're here to answer all your questions.
                    </p>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <h3 className="text-2xl font-bold text-gray-900">Get in touch</h3>

                        <div className="space-y-6">
                            {[
                                { icon: Phone, title: "Phone", info: "+1 (234) 567-890", sub: "Mon-Fri: 9am - 6pm" },
                                { icon: Mail, title: "Email", info: "info@globalstudy.com", sub: "24/7 Support" },
                                { icon: MapPin, title: "Location", info: "123 Education Plaza", sub: "Main Street, NY 10001" },
                                { icon: Clock, title: "Working Hours", info: "09:00 AM - 05:00 PM", sub: "Monday to Saturday" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-brand-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        <p className="text-gray-800">{item.info}</p>
                                        <p className="text-gray-500 text-sm">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 bg-brand-primary rounded-3xl text-white">
                            <h4 className="font-bold text-xl mb-4 text-brand-accent italic">"The journey of a thousand miles begins with a single step."</h4>
                            <p className="opacity-80">Book your sessions now and get a flat 10% discount on initial processing fees.</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-8">
                        <div className="p-8 md:p-12 rounded-3xl bg-brand-secondary shadow-sm ring-1 ring-brand-primary/5 transition-all hover:shadow-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 flex items-center">
                                            <User className="w-4 h-4 mr-2" /> Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all bg-white"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 flex items-center">
                                            <Mail className="w-4 h-4 mr-2" /> Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all bg-white"
                                            placeholder="email@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 flex items-center">
                                            <Phone className="w-4 h-4 mr-2" /> Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all bg-white"
                                            placeholder="+1 (xxx) xxx-xxxx"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 flex items-center">
                                            <Globe className="w-4 h-4 mr-2" /> Preferred Destination
                                        </label>
                                        <select
                                            name="destination"
                                            value={formData.destination}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all bg-white appearance-none"
                                        >
                                            <option value="">Select Destination</option>
                                            <option value="usa">USA</option>
                                            <option value="uk">UK</option>
                                            <option value="canada">Canada</option>
                                            <option value="australia">Australia</option>
                                            <option value="germany">Germany</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 flex items-center">
                                        <MessageSquare className="w-4 h-4 mr-2" /> Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all bg-white resize-none"
                                        placeholder="Tell us about your education background and dreams..."
                                        required
                                    />
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        isLoading={loading}
                                        className="w-full py-5 text-xl font-bold shadow-lg shadow-brand-primary/20"
                                    >
                                        Submit Inquiry <Send className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Contact;

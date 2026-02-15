import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import Card from './ui/Card';
import Button from './ui/Button';

const ContactSection = () => {
    return (
        <SectionWrapper
            id="contact-preview"
            title="Ready to Start Your Journey?"
            subtitle="Connect With Us"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Have questions? Our experts are here to help you every step of the way. Reach out to us for a free consultation.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                <Phone className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Phone</h4>
                                <p className="text-gray-600">+1 (234) 567-890</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Email</h4>
                                <p className="text-gray-600">info@globalstudy.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Visit Us</h4>
                                <p className="text-gray-600">123 Education Plaza, City Center, NY 10001</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Contact Form */}
                <div className="lg:col-span-2">
                    <div className="p-8 md:p-10 rounded-3xl bg-brand-secondary shadow-sm ring-1 ring-brand-primary/5 transition-all hover:shadow-xl">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all bg-transparent"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all bg-transparent"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-semibold text-gray-700">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all bg-transparent"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <Button className="w-full py-4 text-lg">
                                    Send Message <Send className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ContactSection;

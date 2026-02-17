import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail } from 'lucide-react';
import Button from './ui/Button';
import { teamService } from '../services';
import { toast } from 'react-hot-toast';

const CounsellorEmailModal = ({ counsellor, isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await teamService.sendEmail({
                to_email: counsellor.email,
                from_email: email,
                message: message
            });
            toast.success(`Message sent to ${counsellor.name} successfully!`);
            setEmail('');
            setMessage('');
            onClose();
        } catch (error) {
            toast.error(error.response?.data?.error || 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-brand-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Email Counsellor</h3>
                                        <p className="text-gray-500 text-sm">To: {counsellor.name}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                                >
                                    <X className="w-6 h-6 text-gray-400" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Your Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">How can {counsellor.name} help you?</label>
                                    <textarea
                                        required
                                        rows="4"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="I would like to enquire about..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    isLoading={isSubmitting}
                                    className="w-full py-4 rounded-xl flex items-center justify-center space-x-2"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CounsellorEmailModal;

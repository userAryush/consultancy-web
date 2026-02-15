import apiClient from './apiClient';

export const destinationService = {
    getAll: () => apiClient.get('destinations/'),
    getBySlug: (slug) => apiClient.get(`destinations/${slug}/`),
};

export const universityService = {
    getByDestination: (destinationId) => apiClient.get(`universities/?destination=${destinationId}`),
};

export const testimonialService = {
    getAll: () => apiClient.get('testimonials/'),
};

export const teamService = {
    getAll: () => apiClient.get('team/'),
};

export const classService = {
    getAll: () => apiClient.get('classes/'),
};

export const faqService = {
    getAll: () => apiClient.get('faqs/'),
};

export const contentService = {
    getBlocks: () => apiClient.get('content-blocks/'),
};

export const galleryService = {
    getAll: () => apiClient.get('gallery/'),
};

export const formService = {
    submitBooking: (data) => apiClient.post('bookings/', data),
    submitInquiry: (data) => apiClient.post('inquiries/', data),
};

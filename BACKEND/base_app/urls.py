from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register("destinations", StudyDestinationViewSet)
router.register("universities", UniversityViewSet)
router.register("steps", ApplicationStepViewSet)
router.register("documents", DocumentRequirementViewSet)
router.register("faqs", FAQViewSet)
router.register("testimonials", TestimonialViewSet)
router.register("team", ConsultancyTeamMemberViewSet)
router.register("classes", LanguageClassViewSet)
router.register("bookings", ConsultationBookingViewSet)
router.register("inquiries", ContactInquiryViewSet)
router.register("gallery", GalleryImageViewSet)

urlpatterns = router.urls

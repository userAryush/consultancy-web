
from rest_framework import viewsets
from .models import *
from .serializers import *


class StudyDestinationViewSet(viewsets.ModelViewSet):
    queryset = StudyDestination.objects.all()
    serializer_class = StudyDestinationSerializer
    lookup_field = "slug"


class UniversityViewSet(viewsets.ModelViewSet):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer
    filterset_fields = ["destination"]


class ApplicationStepViewSet(viewsets.ModelViewSet):
    queryset = ApplicationStep.objects.all().order_by("order_number")
    serializer_class = ApplicationStepSerializer
    filterset_fields = ["destination"]


class DocumentRequirementViewSet(viewsets.ModelViewSet):
    queryset = DocumentRequirement.objects.all().order_by("order_number")
    serializer_class = DocumentRequirementSerializer
    filterset_fields = ["destination"]


class FAQViewSet(viewsets.ModelViewSet):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer
    filterset_fields = ["destination", "category"]


class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer


class ConsultancyTeamMemberViewSet(viewsets.ModelViewSet):
    queryset = ConsultancyTeamMember.objects.all().order_by("priority_order")
    serializer_class = ConsultancyTeamMemberSerializer


class LanguageClassViewSet(viewsets.ModelViewSet):
    queryset = LanguageClass.objects.filter(is_active=True)
    serializer_class = LanguageClassSerializer


class ConsultationBookingViewSet(viewsets.ModelViewSet):
    queryset = ConsultationBooking.objects.all()
    serializer_class = ConsultationBookingSerializer


class ContentBlockViewSet(viewsets.ModelViewSet):
    queryset = ContentBlock.objects.all()
    serializer_class = ContentBlockSerializer


class ContactInquiryViewSet(viewsets.ModelViewSet):
    queryset = ContactInquiry.objects.all()
    serializer_class = ContactInquirySerializer


class GalleryImageViewSet(viewsets.ModelViewSet):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer

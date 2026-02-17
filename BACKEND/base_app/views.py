from rest_framework.viewsets import ModelViewSet
from .models import StudyDestination, University, ApplicationStep, DocumentRequirement, FAQ, Testimonial, ConsultancyTeamMember, LanguageClass, ConsultationBooking, ContactInquiry, GalleryImage, StudyDestination

from .serializers import StudyDestinationSerializer, UniversitySerializer, ApplicationStepSerializer, DocumentRequirementSerializer, FAQSerializer, TestimonialSerializer, ConsultancyTeamMemberSerializer, LanguageClassSerializer, ConsultationBookingSerializer, ContactInquirySerializer, GalleryImageSerializer


from rest_framework.decorators import action
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings

class StudyDestinationViewSet(ModelViewSet):
    queryset = StudyDestination.objects.all()
    serializer_class = StudyDestinationSerializer
    lookup_field = "slug"


class UniversityViewSet(ModelViewSet):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer
    filterset_fields = ["destination"]


class ApplicationStepViewSet(ModelViewSet):
    queryset = ApplicationStep.objects.all().order_by("order_number")
    serializer_class = ApplicationStepSerializer
    filterset_fields = ["destination"]


class DocumentRequirementViewSet(ModelViewSet):
    queryset = DocumentRequirement.objects.all().order_by("order_number")
    serializer_class = DocumentRequirementSerializer
    filterset_fields = ["destination"]


class FAQViewSet(ModelViewSet):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer
    filterset_fields = ["destination", "category"]


class TestimonialViewSet(ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer



class ConsultancyTeamMemberViewSet(ModelViewSet):
    queryset = ConsultancyTeamMember.objects.filter(is_active=True).order_by("priority_order")
    serializer_class = ConsultancyTeamMemberSerializer

    @action(detail=False, methods=['get'])
    def grouped(self, request):
        leaders = self.queryset.filter(role_type='leader')
        counsellors = self.queryset.filter(role_type='counsellor')
        staff = self.queryset.filter(role_type='staff')

        return Response({
            "leaders": ConsultancyTeamMemberSerializer(leaders, many=True).data,
            "counsellors": ConsultancyTeamMemberSerializer(counsellors, many=True).data,
            "staff": ConsultancyTeamMemberSerializer(staff, many=True).data,
        })

    @action(detail=False, methods=['post'])
    def send_email(self, request):
        to_email = request.data.get('to_email')
        from_email = request.data.get('from_email')
        message = request.data.get('message')

        if not all([to_email, from_email, message]):
            return Response({"error": "Missing required fields"}, status=400)

        try:
            send_mail(
                subject=f"New Message from {from_email}",
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[to_email],
                fail_silently=False,
            )
            return Response({"message": "Message sent successfully"})
        except Exception as e:
            return Response({"error": str(e)}, status=500)


class LanguageClassViewSet(ModelViewSet):
    queryset = LanguageClass.objects.filter(is_active=True)
    serializer_class = LanguageClassSerializer


class ConsultationBookingViewSet(ModelViewSet):
    queryset = ConsultationBooking.objects.all()
    serializer_class = ConsultationBookingSerializer


class ContactInquiryViewSet(ModelViewSet):
    queryset = ContactInquiry.objects.all()
    serializer_class = ContactInquirySerializer


class GalleryImageViewSet(ModelViewSet):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer

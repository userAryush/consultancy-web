from rest_framework.serializers import ModelSerializer
from .models import University, ApplicationStep, DocumentRequirement, FAQ, Testimonial, ConsultancyTeamMember, LanguageClass, ConsultationBooking, ContactInquiry, GalleryImage, StudyDestination




class UniversitySerializer(ModelSerializer):
    class Meta:
        model = University
        fields = "__all__"


class ApplicationStepSerializer(ModelSerializer):
    class Meta:
        model = ApplicationStep
        fields = "__all__"


class DocumentRequirementSerializer(ModelSerializer):
    class Meta:
        model = DocumentRequirement
        fields = "__all__"


class FAQSerializer(ModelSerializer):
    class Meta:
        model = FAQ
        fields = "__all__"


class TestimonialSerializer(ModelSerializer):
    class Meta:
        model = Testimonial
        fields = "__all__"


class ConsultancyTeamMemberSerializer(ModelSerializer):
    class Meta:
        model = ConsultancyTeamMember
        fields = "__all__"


class LanguageClassSerializer(ModelSerializer):
    class Meta:
        model = LanguageClass
        fields = "__all__"


class ConsultationBookingSerializer(ModelSerializer):
    class Meta:
        model = ConsultationBooking
        fields = "__all__"



class ContactInquirySerializer(ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = "__all__"


class GalleryImageSerializer(ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = "__all__"


class StudyDestinationSerializer(ModelSerializer):
    universities = UniversitySerializer(many=True, read_only=True)
    application_steps = ApplicationStepSerializer(many=True, read_only=True)
    document_requirements = DocumentRequirementSerializer(many=True, read_only=True)
    faqs = FAQSerializer(many=True, read_only=True)

    class Meta:
        model = StudyDestination
        fields = "__all__"
        

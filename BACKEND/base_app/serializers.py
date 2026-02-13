from rest_framework import serializers
from .models import *



class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = "__all__"


class ApplicationStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationStep
        fields = "__all__"


class DocumentRequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentRequirement
        fields = "__all__"


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = "__all__"


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = "__all__"


class ConsultancyTeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConsultancyTeamMember
        fields = "__all__"


class LanguageClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguageClass
        fields = "__all__"


class ConsultationBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConsultationBooking
        fields = "__all__"


class ContentBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentBlock
        fields = "__all__"


class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = "__all__"


class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = "__all__"


class StudyDestinationSerializer(serializers.ModelSerializer):
    universities = UniversitySerializer(many=True, read_only=True)
    application_steps = ApplicationStepSerializer(many=True, read_only=True)
    document_requirements = DocumentRequirementSerializer(many=True, read_only=True)
    faqs = FAQSerializer(many=True, read_only=True)

    class Meta:
        model = StudyDestination
        fields = "__all__"

from django.contrib import admin
from .models import *


@admin.register(StudyDestination)
class StudyDestinationAdmin(admin.ModelAdmin):
    list_display = ("name", "is_featured", "created_at")
    prepopulated_fields = {"slug": ("name",)}
    search_fields = ("name",)


@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = ("name", "destination", "ranking")
    list_filter = ("destination",)


@admin.register(ApplicationStep)
class ApplicationStepAdmin(admin.ModelAdmin):
    list_display = ("title", "destination", "order_number")
    ordering = ("destination", "order_number")


@admin.register(DocumentRequirement)
class DocumentRequirementAdmin(admin.ModelAdmin):
    list_display = ("title", "destination", "order_number")


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ("question", "destination", "category")
    list_filter = ("category",)


@admin.register(ConsultancyTeamMember)
class ConsultancyTeamMemberAdmin(admin.ModelAdmin):
    list_display = ("name", "role_type", "designation")
    ordering = ("priority_order",)


admin.site.register([
    LanguageClass,
    ConsultationBooking,
    Testimonial,
    ContentBlock,
    ContactInquiry,
    GalleryImage,
])

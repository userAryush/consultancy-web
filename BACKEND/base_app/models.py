from django.db import models
from base.models import BaseModel
from django.utils.text import slugify
from django.core.validators import MinValueValidator, MaxValueValidator

class StudyDestination(BaseModel):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)

    short_description = models.TextField()
    full_description = models.TextField()
    why_study = models.TextField()
    banner_image = models.ImageField(blank=True, upload_to='destinations/banners/')
    icon = models.ImageField(blank=True, upload_to='destinations/icons/')
    video_url = models.URLField(blank=True)
    is_featured = models.BooleanField(default=False)
    meta_title = models.CharField(max_length=255, blank=True)
    meta_description = models.TextField(blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class University(BaseModel):
    name = models.CharField(max_length=255)
    destination = models.ForeignKey(StudyDestination, on_delete=models.CASCADE, related_name='universities')
    description = models.TextField(blank=True)
    logo = models.ImageField(blank=True, upload_to='universities/logos/')
    website_url = models.URLField(blank=True)
    ranking = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name


class LanguageClass(BaseModel):
    language_name = models.CharField(max_length=100)
    course_level = models.CharField(max_length=50)
    start_date = models.DateField()
    duration = models.CharField(max_length=50)
    time_slot = models.CharField(max_length=50)
    instructor = models.ForeignKey('ConsultancyTeamMember', on_delete=models.SET_NULL, null=True, blank=True, related_name='classes')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.language_name} - {self.course_level}"


class ApplicationStep(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField()
    order_number = models.IntegerField()
    destination = models.ForeignKey(StudyDestination, on_delete=models.CASCADE, related_name='application_steps')

    def __str__(self):
        return f"{self.destination.name} - Step {self.order_number}: {self.title}"


class DocumentRequirement(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    order_number = models.IntegerField()
    destination = models.ForeignKey(StudyDestination, on_delete=models.CASCADE, related_name='document_requirements')
    file_upload = models.FileField(blank=True, upload_to='documents/requirements/')

    def __str__(self):
        return f"{self.destination.name} - {self.title}"


class ConsultationBooking(BaseModel):
    EDUCATION_LEVEL_CHOICES = [
        ('+2', '+2'),
        ('Diploma', 'Diploma'),
        ('Bachelor', 'Bachelor'),
        ('Master', 'Master'),
    ]
    STATUS_CHOICES = [
        ('New', 'New'),
        ('Follow-up', 'Follow-up'),
        ('Closed', 'Closed'),
    ]

    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    education_level = models.CharField(max_length=20, choices=EDUCATION_LEVEL_CHOICES)
    preferred_destination = models.ForeignKey(StudyDestination, on_delete=models.SET_NULL, null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='New')

    def __str__(self):
        return self.full_name


class Testimonial(BaseModel):
    student_name = models.CharField(max_length=255)
    image = models.ImageField(blank=True, upload_to='testimonials/images/')
    content = models.TextField()
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    visa_country = models.ForeignKey(StudyDestination, on_delete=models.SET_NULL, null=True, blank=True)
    is_video_testimonial = models.BooleanField(default=False)
    video_url = models.URLField(blank=True)

    def __str__(self):
        return self.student_name


class ConsultancyTeamMember(BaseModel):
    ROLE_TYPE_CHOICES = [
        ('leader', 'Leadership'),
        ('counsellor', 'Counsellor'),
        ('staff', 'Staff'),
    ]

    name = models.CharField(max_length=255)
    designation = models.CharField(max_length=100)
    role_type = models.CharField(max_length=20, choices=ROLE_TYPE_CHOICES, default='staff')
    bio = models.TextField(blank=True)  # Full bio for leaders
    short_bio = models.CharField(max_length=255, blank=True)  # One line intro
    image = models.ImageField(blank=True, upload_to='team/images/')
    
    # Counsellor specific fields
    whatsapp_number = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)
    
    priority_order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} ({self.get_role_type_display()})"


class ContentBlock(BaseModel):
    section_identifier = models.SlugField(unique=True)
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255, blank=True)
    description = models.TextField()
    background_image = models.ImageField(blank=True, upload_to='content_blocks/')

    def __str__(self):
        return self.title


class FAQ(BaseModel):
    CATEGORY_CHOICES = [
        ('General', 'General'),
        ('Visa', 'Visa'),
        ('Finance', 'Finance'),
    ]

    question = models.CharField(max_length=255)
    answer = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    destination = models.ForeignKey(StudyDestination, on_delete=models.SET_NULL, null=True, blank=True, related_name='faqs')

    def __str__(self):
        return self.question


class ContactInquiry(BaseModel):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    is_resolved = models.BooleanField(default=False)

    def __str__(self):
        return self.subject

class GalleryImage(BaseModel):
    image = models.ImageField(upload_to="gallery/")
    caption = models.CharField(max_length=255, blank=True)





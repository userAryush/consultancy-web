from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import *

admin.site.register(ContactInquiry)
admin.site.register(ConsultationBooking)
admin.site.register(Testimonial)
admin.site.register(GalleryImage)
admin.site.register(FAQ)
admin.site.register(ClassEvent)

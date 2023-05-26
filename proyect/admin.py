from django.contrib import admin
from .models import person, tutor, employee, class_group, stablishments, schedule, child, tutor_child, announcements, complaint

# Register your models here.
admin.site.register(person)
admin.site.register(tutor)
admin.site.register(employee)
admin.site.register(class_group)
admin.site.register(stablishments)  
admin.site.register(schedule)
admin.site.register(child)
admin.site.register(tutor_child)
admin.site.register(announcements)
admin.site.register(complaint)

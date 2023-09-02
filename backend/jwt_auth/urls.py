from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/user/", include("user.urls")),
    path("", include("faqs.urls")),
    path("", include("events.urls")),
    path("", include("recommendations.urls")),
]

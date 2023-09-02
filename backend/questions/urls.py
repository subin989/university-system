from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r"faqs", views.QuestionViewSet)

urlpatterns = [
    # ... other URL patterns ...
    path("", include(router.urls)),
]

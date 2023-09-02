from django.urls import path
from .views import UniversityRecommendation

urlpatterns = [
    path(
        "api/recommendation/",
        UniversityRecommendation.as_view(),
        name="university_recommendation",
    ),
]

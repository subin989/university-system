from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import QuestionViewSet

# Create a router and register the viewset with it.
router = DefaultRouter()
router.register(r"faqs", QuestionViewSet, basename="question")

# The API URLs are now determined automatically by the router.
urlpatterns = [
    # ... other URL patterns ...
    path("api/", include(router.urls)),
    path(
        "api/faqs/<int:question_pk>/comments/",
        QuestionViewSet.as_view({"get": "get_comments", "post": "create_comment"}),
        name="question-comments",
    ),
    path(
        "api/faqs/<int:question_pk>/comments/<int:comment_pk>/",
        QuestionViewSet.as_view({"put": "update_comment", "delete": "delete_comment"}),
        name="question-comment-detail",
    ),
]

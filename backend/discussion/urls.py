from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DiscussionViewSet, DiscussionSearchViewSet

# Create a router and register the viewset with it.
router = DefaultRouter()
router.register(r"discussions", DiscussionViewSet, basename="discussion")
router.register(
    r"discussions/search", DiscussionSearchViewSet, basename="discussion-search"
)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    # ... other URL patterns ...
    path("api/", include(router.urls)),
    path(
        "api/discussions/<int:discussion_pk>/comments/",
        DiscussionViewSet.as_view({"get": "get_comments", "post": "create_comment"}),
        name="question-comments",
    ),
    path(
        "api/discussions/<int:discussion_pk>/comments/<int:comment_pk>/",
        DiscussionViewSet.as_view(
            {"put": "update_comment", "delete": "delete_comment"}
        ),
        name="question-comment-detail",
    ),
    # path(
    #     "api/discussions/search/<str:searchTerm>/",
    #     DiscussionSearchView.as_view(),
    #     name="search-discussions",
    # ),
    # path(
    #     "api/discussions/<int:discussion_pk>/comments/search/<str:searchTerm>/",
    #     DiscussionCommentSearchView.as_view(),
    #     name="search-comments",
    # ),
]


# router.register(
#     r"discussions/search", DiscussionSearchViewSet, basename="discussion-search"
# )
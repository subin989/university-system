from django.urls import path
from .views import EventListView, EventEditView

urlpatterns = [
    path("api/events/", EventListView.as_view(), name="event-list"),
    path("api/events/<int:pk>/", EventEditView.as_view(), name="event-detail"),
    # Add a new URL pattern for creating events
    path("api/events/create/", EventEditView.as_view(), name="event-create"),
    # ... other URLs ...
]

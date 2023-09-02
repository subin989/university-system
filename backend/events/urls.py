# urls.py
from django.urls import path
from .views import EventList

urlpatterns = [
    path("api/events/", EventList.as_view(), name="event-list"),
    # ... other URLs ...
]

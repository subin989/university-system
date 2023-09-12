# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from .models import Event
# from .serializers import EventSerializer
# from .permissions import IsSuperAdminOrReadOnly


# class EventList(APIView):
#     permission_classes = [IsSuperAdminOrReadOnly]

#     def get(self, request):
#         events = Event.objects.all()
#         serializer = EventSerializer(events, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = EventSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class EventDetail(APIView):
#     permission_classes = [IsSuperAdminOrReadOnly]

#     def get_object(self, pk):
#         try:
#             return Event.objects.get(pk=pk)
#         except Event.DoesNotExist:
#             return None

#     def get(self, request, pk):
#         event = self.get_object(pk)
#         if event is not None:
#             serializer = EventSerializer(event)
#             return Response(serializer.data)
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     def put(self, request, pk):
#         event = self.get_object(pk)
#         if event is not None:
#             serializer = EventSerializer(event, data=request.data)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response(serializer.data)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     def delete(self, request, pk):
#         event = self.get_object(pk)
#         if event is not None:
#             event.delete()
#             return Response(status=status.HTTP_204_NO_CONTENT)
#         return Response(status=status.HTTP_404_NOT_FOUND)


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Event
from .serializers import EventSerializer
from .permissions import IsSuperAdminOrReadOnly


class EventListView(APIView):
    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)


class EventEditView(APIView):
    permission_classes = [IsSuperAdminOrReadOnly]

    def get_object(self, pk):
        try:
            return Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return None

    def get(self, request, pk):
        event = self.get_object(pk)
        if event is not None:
            serializer = EventSerializer(event)
            return Response(serializer.data)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        event = self.get_object(pk)
        if event is not None:
            serializer = EventSerializer(event, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        event = self.get_object(pk)
        if event is not None:
            event.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)

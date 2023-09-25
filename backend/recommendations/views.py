from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import University
from .serializers import UniversitySerializer


class UniversityRecommendation(APIView):
    def get(self, request, format=None):
        fee = float(request.query_params.get("fee", 0))
        min_acceptance_rate = float(request.query_params.get("min_acceptanceRate", 0))
        max_acceptance_rate = float(request.query_params.get("max_acceptanceRate", 100))
        min_scholarship = float(request.query_params.get("min_scholarship", 0))
        max_scholarship = float(request.query_params.get("max_scholarship", 100))
        country = request.query_params.get(
            "country", None
        )  # Get the country from query params
        state = request.query_params.get(
            "state", None
        )  # Get the state from query params

        universities = University.objects.filter(
            fee__lte=fee,
            acceptance_rate__gte=min_acceptance_rate,
            acceptance_rate__lte=max_acceptance_rate,
            scholarship__gte=min_scholarship,
            scholarship__lte=max_scholarship,
        )

        if country:
            universities = universities.filter(country=country)

        if state:
            universities = universities.filter(state=state)

        serializer = UniversitySerializer(universities, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = UniversitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

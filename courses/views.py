from rest_framework import generics
from .models import Course
from .serializers import CourseSerializer

# List all courses or create a new one
class CourseListView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

# Retrieve, update, or delete a single course
class CourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

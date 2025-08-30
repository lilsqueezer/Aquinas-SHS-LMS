from django.db import models
from courses.models import Course

class Assessment(models.Model):
    title = models.CharField(max_length=200)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="assessments")
    max_score = models.IntegerField()

    def __str__(self):
        return self.title

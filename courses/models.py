from django.db import models
from accounts.models import Teacher

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    teacher = models.ForeignKey("accounts.Teacher", on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.title

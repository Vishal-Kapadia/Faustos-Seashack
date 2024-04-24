from django.db import models

# Create your models here.
from django.contrib.auth.models import User


class Note(models.Model):
    title = models.CharField(max_length=100)
    course = models.CharFieled(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    price = models.FloatField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="Foods")

    def __str__(self):
        return self.title
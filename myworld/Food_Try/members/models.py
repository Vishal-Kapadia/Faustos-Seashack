# Create your models here.
from django.db import models

class Member(models.Model):
  Food = models.CharField(max_length=255, default="Nick's GOATed Burger")
  Type = models.CharField(max_length=255, default='Entree')
  Price = models.DecimalField(max_digits= 10, decimal_places=2, default=19.99)

from django.test import TestCase

# Create your tests here.
from . import views

urlpatterns = [
    path("foods/", views.FoodListCreate.as_view(), name="food-list"),
    path("foods/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-food"),
]
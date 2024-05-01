from django.urls import path 
from . import views

urlpatterns = [
    path("Food/food/", views.FoodListCreate.as_view(), name="note-list"),
    path("Food/food/delete/<int:pk>/", views.FoodDelete.as_view(), name="delete-note"),
]
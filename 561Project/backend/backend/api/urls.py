from django.urls import path 
from . import views
from .views import CartItemList
from .views import FoodList

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path('cart/', CartItemList.as_view(), name='cart-list'),
    path('food/', FoodList.as_view(), name='food-list'),
]
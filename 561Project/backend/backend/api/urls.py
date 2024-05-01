from django.urls import path, include
from . import views
from .views import CartItemList
from .views import FoodList
from rest_framework import routers
from .views import FoodItemViewSet

router = routers.DefaultRouter()
router.register(r'fooditems', FoodItemViewSet)

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path('cart/', CartItemList.as_view(), name='cart-list'),
    path('food/', FoodList.as_view(), name='food-list'),
    path('api/', include(router.urls)),
]





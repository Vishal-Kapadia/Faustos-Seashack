from django.urls import path, include
from . import views
from .views import CartItemList, FoodList
from rest_framework import routers
from .views import FoodItemViewSet, DealsItemViewSet, SpecialItemViewSet

router = routers.DefaultRouter()

router.register(r'fooditems', FoodItemViewSet, basename='fooditem')
router.register(r'specialitems', SpecialItemViewSet, basename='specialitem')
router.register(r'dealsitems', DealsItemViewSet, basename='dealsitem')

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path('cart/', CartItemList.as_view(), name='cart-list'),
    path('food/', FoodList.as_view(), name='food-list'),
    path('api/', include(router.urls)),
]

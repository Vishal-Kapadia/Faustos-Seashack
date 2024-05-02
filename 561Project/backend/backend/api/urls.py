from django.urls import path, include
from . import views
from rest_framework import routers
from .views import FoodItemViewSet, DealsItemViewSet, SpecialItemViewSet

#Dislplaying the models
router = routers.DefaultRouter()
router.register(r'fooditems', FoodItemViewSet, basename='fooditem')
router.register(r'specialitems', SpecialItemViewSet, basename='specialitem')
router.register(r'dealsitems', DealsItemViewSet, basename='dealsitem')

#Links to api pages
urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path('api/', include(router.urls)),
]

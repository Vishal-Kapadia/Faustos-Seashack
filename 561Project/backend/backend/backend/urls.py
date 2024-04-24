from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("api-auth/", include("rest_framework.urls")),
    path("entrees/", CreateUserView.as_view(), name="entrees"),
    path("mycart/", CreateUserView.as_view(), name="mycart"),
    path("home/", CreateUserView.as_view(), name="home"),
    path("specialties/", CreateUserView.as_view(), name="specialties"),
    path("about/", CreateUserView.as_view(), name="about"),
    
    path("api/", include("api.urls")),
]
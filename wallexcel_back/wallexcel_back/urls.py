from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from usuarios.views import UserViewSet

router = routers.DefaultRouter()
router.register('usuarios', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]

from django.shortcuts import render
from .serializers import CuentaSerializer
from .models import Cuenta

from rest_framework import viewsets

# Create your views here.

class CuentaViewSet(viewsets.ModelViewSet):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer
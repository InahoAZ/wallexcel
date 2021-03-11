from django.shortcuts import render
from .serializers import CategoriaSerializer
from .models import Categoria

from rest_framework import viewsets

# Create your views here.


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

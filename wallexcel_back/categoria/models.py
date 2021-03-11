from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Categoria (models.Model):
    id_categoría = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=250)
    descripcion = models.TextField()
    user = models.ForeignKey(User, on_delete=models.PROTECT)
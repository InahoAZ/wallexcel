from django.db import models

# Create your models here.

class User(models.Model):
    nombre = models.CharField(max_length=200)
    edad = models.IntegerField()


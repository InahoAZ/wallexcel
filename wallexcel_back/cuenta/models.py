from django.db import models

# Create your models here.
class Cuenta(models.Model):
    id_cuenta = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=255)
    saldo = models.DecimalField(decimal_places=2, max_digits=7)
    


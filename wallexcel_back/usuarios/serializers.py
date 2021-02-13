from rest_framework import serializers
from usuarios.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['nombre', 'edad']
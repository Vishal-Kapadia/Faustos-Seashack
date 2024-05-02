from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note
from .models import FoodItem
from .models import SpecialItem
from .models import DealsItem

#athentication
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user

#From tutorial. Unused
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}

#Create Entree Item
class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem
        fields = ['id', 'name', 'description', 'price'] #, 'image']

#Create Special Item
class SpecialItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecialItem
        fields = ['id', 'name', 'description', 'price']

#Create Deals Item
class DealsItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = DealsItem
        fields = ['id', 'name', 'description', 'price']
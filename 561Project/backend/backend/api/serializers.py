from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note
from .models import CartItem

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['id', 'user', 'food', 'quantity']

from .models import Food

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['id', 'title', 'course', 'price'] 


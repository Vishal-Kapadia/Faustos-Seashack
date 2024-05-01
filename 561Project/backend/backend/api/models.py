from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title

class Food(models.Model):
    title = models.CharField(max_length=100)
    course = models.CharField(max_length=100)
#    created_at = models.DateTimeField(auto_now_add=True)
    price = models.FloatField()
#    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="Foods")

    def __str__(self):
        return self.title

class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    food = models.ForeignKey(Food, on_delete=models.CASCADE)  
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} x {self.food.title} in cart"
    

class FoodItem(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField()

    def __str__(self):
        return self.name

class SpecialItem(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class DealsItem(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
    
    
'''
# Preset food models
food1 = Food.objects.create(title="Vishals Special Spaghetti", course="Main Course", price=15.99)
food2 = Food.objects.create(title="Large Salad", course="Appetizer", price=9.99)
food3 = Food.objects.create(title="Fausto's Yummy Pizza", course="Main Course", price=12.99)
food4 = Food.objects.create(title="Sea Burritto", course="Main Course", price=11.99)
food5 = Food.objects.create(title="Nick's GOATed Burger", course="Main Course", price=13.99)
food6 = Food.objects.create(title="THE Burritto", course="Main Course", price=11.99)
food7 = Food.objects.create(title="Fire Wings", course="Appetizer", price=10.99)
food8 = Food.objects.create(title="Chef's Mess", course="Main Course", price=14.99)
'''
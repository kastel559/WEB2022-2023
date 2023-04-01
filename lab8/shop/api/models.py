from django.db import models
from django.utils import timezone
class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        products = Product.objects.filter(category=self)
        product_list = [p.to_json for p in products]
        return {
            'name': self.name,
            'products': product_list
        }
# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)

    def to_json(self):
        return {
            'name': self.name,
            'price': self.price,
            'count': self.count,
            'category': self.category.name
        }



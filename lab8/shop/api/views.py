from django.shortcuts import render
from .models import Product, Category
from django.http.response import JsonResponse, HttpResponse
from django.core import serializers
# Create your views here.
def product_list(request):
    products = Product.objects.all()
    products_json = serializers.serialize('json', products)
    return JsonResponse(products_json, content_type='application/json')


def product_detail(request, product_id):
    products = product_list()
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)

    return JsonResponse({'error': 'Product not found'})

def categories(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

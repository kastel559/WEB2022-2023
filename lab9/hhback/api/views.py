from django.shortcuts import render
from .models import Company, Vacancy
from django.http.response import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as dne:
        return JsonResponse({'error': 'error'}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())

def vacancy_list_by_company(request, company_id):
    try:
        vacancies = Vacancy.objects.all().filter(company_id=company_id)
        vacancies_json = [v.to_json() for v in vacancies]
    except Company.DoesNotExist as dne:
        return JsonResponse({'error': 'error'}, status=400)

    return JsonResponse(vacancies_json, safe=False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancies = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as dne:
        return JsonResponse({'error: error'}, status=400)
    vacancies_json = [v.json() for v in vacancies]
    return JsonResponse(vacancies)

def vacancy_top(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

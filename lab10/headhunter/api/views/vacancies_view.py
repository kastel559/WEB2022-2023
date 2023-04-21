import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from ..models import Vacancy
from ..serializers import VacancySerializer

@api_view(['GET', 'POST'])
def vacancies_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii': False, 'indent': 2})
    if request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

def get_vacancy(vacancy_id):
    try:
        return Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as dne:
        return Response(str(dne), status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, vacancy_id):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies)
        return Response(serializer.data)

    if request.method == 'PUT':
        vacancy = get_vacancy(vacancy_id)
        serializer = VacancySerializer(vacancy, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    if request.method == 'DELETE':
        vacancy = get_vacancy(vacancy_id)
        vacancy.delete()
        return Response({'deleted': True})
def vacancy_top(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
'''
May be there will be errors
'''
def vacancy_list_by_company(request, company_id):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().filter(company_id=company_id)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)




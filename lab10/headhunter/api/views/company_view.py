import json
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from ..models import Company, Vacancy
from  ..serializers import CompanySerializer, VacancySerializer
from django.shortcuts import Http404
from rest_framework.response import Response

from rest_framework import status
class CompanyAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii': False, 'indent': 2},
                            status=200)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        serializer.is_valid()
        serializer.save(raise_exception=True)
        return JsonResponse(serializer.data)

    def get_company(company_id):
        try:
            return Company.objects.get(id=company_id)
        except Company.DoesNotExist as dne:
            return Response(str(dne), status=status.HTTP_400_BAD_REQUEST)

class CompanyDetailAPIView(APIView):
    def get(self, request, company_id):
        company = self.get_company(company_id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, company_id):
        company = self.get_company(company_id)
        serializer = CompanySerializer(company=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, company_id):
        company = self.get_company(company_id)
        company.delete()
        return Response({'deleted': True})
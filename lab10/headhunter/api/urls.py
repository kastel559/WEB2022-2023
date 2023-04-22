from django.urls import path, re_path
from .views import *

urlpatterns = [
    path('companies/', company_view.CompanyAPIView.as_view()),
    path('companies/<int:company_id>/', company_view.CompanyDetailAPIView.as_view()),
    path('companies/<int:company_id>/vacancies', vacancies_view.vacancy_list_by_company),
    path('vacancies/', vacancies_view.vacancies_list),
    path('vacancies/<int:vacancy_id>/', vacancies_view.vacancy_detail),
    path('vacancies/top_ten', vacancies_view.vacancy_top)

]
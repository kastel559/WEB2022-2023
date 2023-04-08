from django.urls import path, re_path
from . import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:company_id>', views.company_detail),
    path('companies/<int:company_id>/vacancies', views.vacancy_list_by_company),
    path('vacancies', views.vacancy_list),
    path('vacancies/top_ten', views.vacancy_top)
]
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CompanyListService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(
      `${this.BASE_URL}/api/companies/`
    )
  }

  createCompany(companyName: string, companyDescr: string, companyCity: string, companyAddress: string): Observable<Company> {
    return this.client.post<Company>(
      `${this.BASE_URL}/api/companies/`,
      {
        name: companyName,
        description: companyDescr,
        city: companyCity,
        address: companyAddress,
      }
    )
  }

  deleteCompany(company_id: number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/companies/${company_id}/`
    )
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancies/`
    )
  }
  createVacancy(vacancyName: string, vacancyDescr: string, vacancySalary: number, vacancyCompany: string): Observable<Vacancy> {
    return this.client.post<Vacancy>(
      `${this.BASE_URL}/api/vacancies/`,
      {
        name: vacancyName,
        description: vacancyDescr,
        salary: vacancySalary,
        company: vacancyCompany
      }
    )
  }
  deleteVacancy(vacancy_id: number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/vacancies/${vacancy_id}/`
    )
  }
}

import { Component } from '@angular/core';
import {Company, Vacancy} from "../models";
import {CompanyListService} from "../company-list.service";

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent {
  title = 'demo-front';

  vacancies: Vacancy[] = [];
  newName: string = '';
  newDescr: string = '';
  newSalary: number = 0;
  newCompany: string = '';

  constructor(private companyService: CompanyListService) {
  }

  ngOnInit() {
    this.companyService.getVacancies().subscribe((data: Vacancy[]) => {
      this.vacancies = data;
    });
  }

  addVacancy() {
    this.companyService.createVacancy(this.newName, this.newDescr, this.newSalary, this.newCompany).subscribe((vacancy: Vacancy) => {
      this.vacancies.push(vacancy);
      this.newName = '';
      this.newDescr = '';
      this.newSalary = 0;
      this.newCompany = '';
    });
  }

  deleteVacancy(vacancy_id: number) {
    this.companyService.deleteVacancy(vacancy_id).subscribe((data) => {
      this.vacancies = this.vacancies.filter((vacancy) => vacancy.id !== vacancy_id);
    });
  }

}

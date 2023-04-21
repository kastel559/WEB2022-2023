import {Component, OnInit} from '@angular/core';
import {Company} from '../models'
import {CompanyListService} from "../company-list.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  title = 'demo-front';

  companies: Company[] = [];
  newCompany: string = '';

  constructor(private companyService: CompanyListService) {
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }

  addCompany() {
    this.companyService.createCompany(this.newCompany).subscribe((company) => {
      this.companies.push(company);
      this.newCompany = '';
    });
  }

  deleteCompany(company_id: number) {
    this.companyService.deleteCompany(company_id).subscribe((data) => {
      this.companies = this.companies.filter((company) => company.id !== company_id);
    });
  }

}

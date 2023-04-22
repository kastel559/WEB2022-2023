import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailComponent,
    CompanyListComponent,
    VacancyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'companies', component: CompanyListComponent},
      { path: 'vacancies', component: VacancyListComponent},
      { path: '', redirectTo:"companies", pathMatch: 'full'},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

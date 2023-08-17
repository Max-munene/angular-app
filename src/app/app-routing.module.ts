import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './components/bio/bio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CareerComponent } from './components/career/career.component';
import { LoginComponent } from './components/login/login.component';
import { PracticeComponent } from './components/practice/practice.component';
import { HomelocationsComponent } from './homelocations/homelocations.component';

const routes: Routes = [
  { path: '', component: CareerComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'homelocations', component: HomelocationsComponent },
  { path: 'career', component: CareerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'practice', component: PracticeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  CareerComponent,
  ChartsComponent,
  PageNotFoundComponent,
  LoginComponent,
  PracticeComponent,
];

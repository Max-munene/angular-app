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
import { CareerProfileComponent } from './components/career-profile/career-profile.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { UsersComponent } from './components/users/users.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MapComponent } from './components/map/map.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePhotoComponent,
    children: [
      { path: '', redirectTo: 'charts', pathMatch: 'full' },
      { path: 'charts', component: ChartsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'maps', component: MapComponent },
      { path: 'career', component: CareerComponent },
      // { path: 'profile', component: ProfilePhotoComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'practice', component: PracticeComponent },
    ],
  },
  { path: 'homelocation', component: HomelocationsComponent },

  { path: 'login', component: LoginFormComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  CareerComponent,
  CareerProfileComponent,
  ChartsComponent,
  PageNotFoundComponent,
  LoginComponent,
  PracticeComponent,
];

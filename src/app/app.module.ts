import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HostListener } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';

// My Components
import { HomeComponent } from './home/home.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { CareerProfileComponent } from './components/career-profile/career-profile.component';
import { CareerComponent } from './components/career/career.component';
import { BioComponent } from './components/bio/bio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PracticeComponent } from './components/practice/practice.component';
import { ChartModule } from 'angular-highcharts';

// import { ModuleModule } from './module/module.module';
// Other Imports
import { FormsModule } from '@angular/forms';

// Mat-Imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { LoginComponent } from './components/login/login.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

// ====================================Other Imports==============
import { ChartsComponent } from './components/charts/charts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardOneComponent } from './components/card-one/card-one.component';
import { CardTwoComponent } from './components/card-two/card-two.component';
import { CardThreeComponent } from './components/card-three/card-three.component';
import { CardFourComponent } from './components/card-four/card-four.component';
import { NgChartsModule } from 'ng2-charts';
import { UsersComponent } from './components/users/users.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

// import { MatDrawerModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePhotoComponent,
    CareerProfileComponent,
    CareerComponent,
    BioComponent,
    NavbarComponent,
    SidenavComponent,
    PracticeComponent,
    LoginComponent,
    ChartsComponent,
    PageNotFoundComponent,
    routingComponents,
    HostListenerComponent,
    CardsComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    CardFourComponent,
    UsersComponent,
    LoginFormComponent,

    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,

    ChartModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule,
    UsersTableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

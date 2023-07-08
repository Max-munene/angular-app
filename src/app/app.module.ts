import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { CareerProfileComponent } from './components/career-profile/career-profile.component';
import { CareerComponent } from './components/career/career.component';
import { BioComponent } from './components/bio/bio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ModuleModule } from './module/module.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PracticeComponent } from './components/practice/practice.component';
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

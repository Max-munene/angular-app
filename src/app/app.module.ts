import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { CareerProfileComponent } from './components/career-profile/career-profile.component';
import { CareerComponent } from './components/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePhotoComponent,
    CareerProfileComponent,
    CareerComponent,
    
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

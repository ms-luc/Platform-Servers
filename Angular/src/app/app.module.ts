import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HourlyComponent } from './components/hourly/hourly.component';


import { WeatherService } from './services/weather.service';

const appRoutes : Routes = [
  {path:'hourly', component:HourlyComponent}, // home page
];

@NgModule({
  declarations: [
    AppComponent,
    HourlyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

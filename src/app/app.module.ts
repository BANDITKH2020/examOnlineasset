import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppNavbarComponent } from './component/app-navbar/app-navbar.component';
import { AppBodyflexComponent } from './component/app-bodyflex/app-bodyflex.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppBodyflexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

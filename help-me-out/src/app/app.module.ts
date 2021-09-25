import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './allComponents/header/header.component';
import { FooterComponent } from './allComponents/footer/footer.component';
import { MainComponent } from './allComponents/main/main.component';
import { NavComponent } from './allComponents/header/nav/nav.component';
import { RegLoginPageComponent } from './allComponents/main/reg-login-page/reg-login-page.component';
import { LandingComponent } from './allComponents/main/landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductsComponent } from './allComponents/main/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    RegLoginPageComponent,
    LandingComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AdminSetupComponent } from './admin-setup/admin-setup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminDashboardComponent,
    CustomerComponent,
    HeaderComponent,
    AdminSetupComponent,
    AdminLoginComponent,
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

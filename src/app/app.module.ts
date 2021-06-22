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
import { ChangeInterestComponent } from './change-interest/change-interest.component';
import {FormsModule} from '@angular/forms';
import { ViewPendingLoanRequestComponent } from './view-pending-loan-request/view-pending-loan-request.component';
import { ViewAllApprovedLoansComponent } from './view-all-approved-loans/view-all-approved-loans.component';
import { ViewAccountComponent } from './view-account/view-account.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminDashboardComponent,
    CustomerComponent,
    HeaderComponent,
    AdminSetupComponent,
    AdminLoginComponent,
    ChangeInterestComponent,
    ViewPendingLoanRequestComponent,
    ViewAllApprovedLoansComponent,
    ViewAccountComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

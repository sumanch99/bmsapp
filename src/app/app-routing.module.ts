import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeInterestComponent } from './change-interest/change-interest.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { ViewAllApprovedLoansComponent } from './view-all-approved-loans/view-all-approved-loans.component';
import { ViewPendingLoanRequestComponent } from './view-pending-loan-request/view-pending-loan-request.component';

const routes: Routes = [
  { path: 'view-pending-loan-request', component: ViewPendingLoanRequestComponent },
  { path: 'change-interest', component: ChangeInterestComponent },
  { path: 'view-account/:accountNo', component: ViewAccountComponent },
  { path: 'view-all-approved-loans', component: ViewAllApprovedLoansComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

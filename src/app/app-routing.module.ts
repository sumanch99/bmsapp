import { DepositToBranchFundsComponent } from './deposit-to-branch-funds/deposit-to-branch-funds.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBranchesComponent } from './list-branches/list-branches.component';
import { BranchComponent } from './branch/branch.component';
import { ViewPendingLoanRequestComponent } from './view-pending-loan-request/view-pending-loan-request.component';
import { ChangeInterestComponent } from './change-interest/change-interest.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { ViewAllApprovedLoansComponent } from './view-all-approved-loans/view-all-approved-loans.component';

const routes: Routes = [
  {
    path:'',component:AdminDashboardComponent
  },
  {
    path:'viewCustomer',component:CustomerComponent
  },
  {
    path:'listBranches',component:ListBranchesComponent
  },
  {
    path:'allTransactions',component:TransactionComponent
  },
  {
    path:'branchManipulations',component:BranchComponent
  },
  { 
    path: 'change-interest', component: ChangeInterestComponent 
  },
  {
    path:'depositToBranchFunds/:ifscCode',component:DepositToBranchFundsComponent
  },
  { 
    path: 'view-pending-loan-request', component: ViewPendingLoanRequestComponent
  },
  { 
    path: 'view-account/:accountNo', component: ViewAccountComponent
  },
  { 
    path: 'view-all-approved-loans', component: ViewAllApprovedLoansComponent 
  },
  {
    path:'**',component:ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

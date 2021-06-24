import { ViewInterestPlansComponent } from './view-interest-plans/view-interest-plans.component';
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
    //Default page
    path:'',component:AdminDashboardComponent
  },
  {
    // To get the list of all the customers.
    path:'viewCustomer',component:CustomerComponent
  },
  {
    //To get the list of all the branches of this bank.
    path:'listBranches',component:ListBranchesComponent
  },
  {
    //To get the list of all the transactions that have occurred
    path:'allTransactions',component:TransactionComponent
  },
  {
    //To add a new branch
    path:'branchManipulations',component:BranchComponent
  },
  { 
    //To change the interest rate
    path: 'change-interest', component: ChangeInterestComponent 
  },
  {
    //To add to branch funds
    path:'depositToBranchFunds/:ifscCode',component:DepositToBranchFundsComponent
  },
  { 
    // To view all the loan requests that are yet to be approved
    path: 'view-pending-loan-request', component: ViewPendingLoanRequestComponent
  },
  { 
    path: 'view-account/:accountNo', component: ViewAccountComponent
  },
  { 
    //To view the list of approved loans
    path: 'view-all-approved-loans', component: ViewAllApprovedLoansComponent 
  },
  {
    path:'view-interest-plans',component:ViewInterestPlansComponent
  },
  {
    //Page to occur in case of an invalid url
    path:'**',component:ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

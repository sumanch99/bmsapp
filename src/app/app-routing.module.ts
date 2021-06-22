import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPendingLoanRequestComponent } from './view-pending-loan-request/view-pending-loan-request.component';

const routes: Routes = [
  {path:'view-pending-loan-request',component:ViewPendingLoanRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

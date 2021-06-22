import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from 'src/app/customer/customer.component';
import { InterestPlans } from 'src/app/model/interest-plans.model';
import { Loan } from 'src/app/model/loan.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  baseURL: String = "http://bmsapi.herokuapp.com/admin/";
  constructor(private http: HttpClient) { }
  getCustomerList() {
    return this.http.get<any>(this.baseURL + 'customer-list');
  }
  getInterestRateList() {
    return this.http.get<any>(this.baseURL + 'view-interest-plans');
  }
  getPendingLoanRequests() {
    return this.http.get<any>(this.baseURL + 'pending-loans');
  }
  getApprovedLoanRequests() {
    return this.http.get<any>(this.baseURL + 'all-approved-loans');
  }
  getAccountDetails(accountNo:number){
    return this.http.get<any>(this.baseURL + 'view-account/' + accountNo);
  }
  postChangedInterestRate(interestPlans: InterestPlans) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(interestPlans);
    console.log(body);
    return this.http.post(this.baseURL + 'change-interest-rate', body, { 'headers': headers });
  }
  deleteRejectedLoan(loanId:number){
    
    return this.http.delete(this.baseURL + 'reject-loan/'+loanId);

  }
  patchGrantLoan(loan:Loan){
    const body=JSON.stringify(loan);
    return this.http.patch(this.baseURL+'grant-loan',body);
  }
}

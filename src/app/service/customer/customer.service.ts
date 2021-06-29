import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/cutomer.model';
import { FixedDeposit } from 'src/app/model/fixed-deposit.model';
import { Loan } from 'src/app/model/loan.model';
import { RecurringDeposit } from 'src/app/model/recurring-deposit.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  // private baseUrl: string = 'http://bmsapi.herokuapp.com/customer/';
  private baseUrl: string = 'http://localhost:8080/customer/';
  customerSignUp(customer:Customer){
    return this.http.post(this.baseUrl+'signup',customer);
  }
  getInterestRateList() {
    return this.http.get<any>(this.baseUrl + 'view-interest-plans');
  }
  customerApplyLoan(loan:Loan){
    return this.http.post(this.baseUrl+'apply-loan',loan);
  }
  customerGetAllAccounts(userId:any){
    return this.http.get(this.baseUrl+'get-all-accounts/'+userId);
  }
  customerApplyForFd(fixedDeposit:FixedDeposit){
    return this.http.post(this.baseUrl+'apply-fd',fixedDeposit);
  }
  customerApplyForRd(recurringDeposit:RecurringDeposit){
    return this.http.post(this.baseUrl+'apply-rd',recurringDeposit);
  }
  customerMyLoans(userId:any):Observable<any>{
    return this.http.get(this.baseUrl+'view-my-loans/'+userId);
  }
}
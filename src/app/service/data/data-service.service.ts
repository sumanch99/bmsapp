import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from 'src/app/model/account.model';
import { Branch } from 'src/app/model/branch.model';
import { InterestPlans } from 'src/app/model/interest-plans.model';
import { Loan } from 'src/app/model/loan.model';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  // private baseUrl:string='http://bmsapi.herokuapp.com/admin/';
  private baseUrl:string='http://localhost:8080/admin/';
  constructor(private http:HttpClient) { }
  getCustomerList()
  {
    return this.http.get<any>(this.baseUrl+'customer-list');
  }
  viewAllBranches()
  {
    return this.http.get<any>(this.baseUrl+'view-all-branches');
  }
  getAllTransactions()
  {
    return this.http.get<any>(this.baseUrl+'all-transactions');
  }
  addNewBranch(newBranch:Branch)
  {
    console.log(newBranch);
    return this.http.post(this.baseUrl+'add-new-branch',newBranch);
  }
  depositToBranch(ifscCode:string,amount:number)
  {
    return this.http.patch(this.baseUrl+`deposit-to-branch/${ifscCode}`,amount);
  }
  getInterestRateList() {
    return this.http.get<any>(this.baseUrl + 'view-interest-plans');
  }
  getPendingLoanRequests() {
    return this.http.get<any>(this.baseUrl + 'pending-loans');
  }
  getApprovedLoanRequests() {
    return this.http.get<any>(this.baseUrl + 'all-approved-loans');
  }
  getAccountDetails(accountNo:number){
    return this.http.get<any>(this.baseUrl + 'view-account/' + accountNo);
  }
  postChangedInterestRate(interestPlans: InterestPlans) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(interestPlans);
    console.log(body);
    return this.http.post(this.baseUrl + 'change-interest-rate', body, { 'headers': headers });
  }
  deleteRejectedLoan(loanId:number){
    
    return this.http.delete(this.baseUrl + 'reject-loan/'+loanId);
  }
  patchGrantLoan(loan:Loan){
    const body=JSON.stringify(loan);
    return this.http.patch(this.baseUrl+'grant-loan',body);
  }
  createAccount(account:Account)
  {
    return this.http.post(this.baseUrl+'create-account',account);
  }
  getPendingATMRequests(){
    return this.http.get<any>(this.baseUrl+'view-all-pending-debit-cards');
  }
  deleteRejectedDebitCardRequest(cardNo:number){
    
    return this.http.delete(this.baseUrl + 'reject-debit-card/'+cardNo);
  }
}


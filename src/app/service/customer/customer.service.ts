import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/model/cutomer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  private baseUrl: string = 'http://localhost:8080/customer/';

  customerSignUp(customer:Customer){
    return this.http.post(this.baseUrl+'signup',customer);
  }
  getAllAccounts()
  {
    let user = sessionStorage.getItem('customerUserId')
    return this.http.get(this.baseUrl+'get-all-accounts/'+user);
  }
  deposit(accNo:number,amount:number)
  {
    return this.http.post(this.baseUrl+'deposit/'+accNo,amount);
  }
  withdraw(accNo:number,amount:number)
  {
    return this.http.post(this.baseUrl+'withdraw/'+accNo,amount);
  }
  transfer(fromAccNo:number,toAccNo:number,amount:number)
  {
    return this.http.post(this.baseUrl+`account-transfer/${fromAccNo}/${toAccNo}`,amount)
  }
  getBalance(accNo:number)
  {
    return this.http.get(this.baseUrl+'get-balance/'+accNo);
  }
  viewStatement(accNo:number)
  {
    return this.http.get(this.baseUrl+'view-statement/'+accNo);
  }
}
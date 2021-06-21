import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/customer/customer.component';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }
  getCustomerList()
  {
    return this.http.get<any>('http://localhost:8080/admin/customer-list');
  }
}


import { DataServiceService } from './../service/data/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/cutomer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 public customers:Customer[]=[]
  constructor(private dataService:DataServiceService) { }
  ngOnInit(): void {
    this.dataService.getCustomerList().subscribe(
      response=>{
       this.customers = response.data;
      }
    )
  }

}

import { DataServiceService } from './../service/data/data-service.service';
import { Component, OnInit } from '@angular/core';
export class Customer{
  userId:string=''
  firstName:string=''
  lastName:string=''
  constructor()
  {

  }
}
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer:Customer= new Customer();
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getCustomerList().subscribe(
      response=>{
        console.log(response.data);
        
        this.customer.userId = response.data[0].userId;
        this.customer.firstName = response.data[0].firstName;
        this.customer.lastName =response.data[0].lastName;
        
       
      }
    )
  }

}

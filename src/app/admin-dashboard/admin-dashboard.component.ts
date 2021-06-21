import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  viewCustomer:boolean =false;
  constructor() { }

  ngOnInit(): void {
  }
  viewCustomerList()
  {
    this.viewCustomer = true;
    console.log('Customer viewed');
  }

}

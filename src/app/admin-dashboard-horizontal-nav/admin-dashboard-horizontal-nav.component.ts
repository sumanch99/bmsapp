import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-horizontal-nav',
  templateUrl: './admin-dashboard-horizontal-nav.component.html',
  styleUrls: ['./admin-dashboard-horizontal-nav.component.css']
})
export class AdminDashboardHorizontalNavComponent implements OnInit {

  viewCustomer:boolean =false;
  viewBranch:boolean=false;
  viewTransactions:boolean =false;

  constructor() { }

  ngOnInit(): void {
  }
  viewCustomerList()
  {
    this.viewCustomer = true;
    this.viewBranch = false;
    this.viewTransactions=false;
    console.log('Customer viewed');
  }
  viewAllBranch()
  {
    this.viewBranch = true;
    this.viewCustomer = false;
    this.viewTransactions=false;
  }
  viewAllTransactions()
  {
    this.viewTransactions=true;
    this.viewCustomer = false;
    this.viewBranch = false;
    console.log('In view All Transactions');
  }
}




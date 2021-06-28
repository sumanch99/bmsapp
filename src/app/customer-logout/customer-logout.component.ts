import { Component, OnInit } from '@angular/core';
import { CustomerAuthenticationService } from '../service/customer/customer-authentication.service';

@Component({
  selector: 'app-customer-logout',
  templateUrl: './customer-logout.component.html',
  styleUrls: ['./customer-logout.component.css']
})
export class CustomerLogoutComponent implements OnInit {
  constructor(private aut:CustomerAuthenticationService) { }

  ngOnInit(): void {
    this.aut.logout();
  }

}

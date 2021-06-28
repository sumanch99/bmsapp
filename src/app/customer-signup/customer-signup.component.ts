import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Customer } from '../model/cutomer.model';
import { CustomerService } from '../service/customer/customer.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customer: Customer = new Customer();
  ngOnInit(): void {
  }

  onSubmit() {
    this.customerService.customerSignUp(this.customer).subscribe(
      response => {
        console.log(response);
        swal("Congratulations!", "Online User Account Created!!", "success");
      },
      error=>{
        console.log(error);
        swal("Failed!!", "Make sure you have an Account with our bank!!", "error");
      }
    );
  }

}
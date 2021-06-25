import { DataServiceService } from './../service/data/data-service.service';
import { Account } from './../model/account.model';
import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent implements OnInit {
  newAccount:Account=new Account();
  
	accountType: string='';
	
	nomineeAdhaarNo: string='';
  accountTypes:string[]=['SAVINGS','CURRENT'];
  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(createAccount:any)
  {
    console.log(createAccount.value);
    this.newAccount.accNo = createAccount.value.accountNumber;
    this.newAccount.accType = createAccount.value.accType;
    this.newAccount.active =true;
    this.newAccount.adhaarNumber= createAccount.value.aadharNo;
    this.newAccount.balance=0;
    this.newAccount.ifscCode=createAccount.value.ifsc;
    this.newAccount.introducerAccountNo = createAccount.value.introducerAccno;
    this.newAccount.nomineeAdhaarNo = createAccount.value.nomineeAadharNo;
    this.newAccount.phoneNumber = createAccount.value.phoneNumber;
    console.log(this.newAccount);
    this.service.createAccount(this.newAccount).subscribe(
      data=>console.log(data)
    )
  }
}

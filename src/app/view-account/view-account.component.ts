import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account.model';
import { DataServiceService } from '../service/data/data-service.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {
  account: Account = new Account();
  accountNo!:number;
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getAccountDetails(this.accountNo).subscribe(
      response => {
        console.log(response.data);


        this.account = response.data;
      }
      )
    }

}

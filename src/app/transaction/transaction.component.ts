import { DataServiceService } from './../service/data/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

 transactions:Transaction[]=[];
  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
    this.service.getAllTransactions().subscribe(
      response=>{
        this.transactions = response.data;
        console.log(response);
        console.log(this.transactions);
      }
    )
  }

}

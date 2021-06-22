import { Component, OnInit } from '@angular/core';
import { Loan } from '../model/loan.model';
import { DataServiceService } from '../service/data/data-service.service';

@Component({
  selector: 'app-view-pending-loan-request',
  templateUrl: './view-pending-loan-request.component.html',
  styleUrls: ['./view-pending-loan-request.component.css']
})
export class ViewPendingLoanRequestComponent implements OnInit {
  pendingLoans: Loan[] = [];
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getPendingLoanRequests().subscribe(
      response => {
        console.log(response.data);
        this.pendingLoans = response.data;
      }
    )
  }

  onClickGrantLoan(loan: Loan) {
    this.dataService.patchGrantLoan(loan).subscribe(data => {
      console.log(data);
    });
  }
  onClickReject(loanId: number) {
    console.log("deleting " + loanId);
    this.dataService.deleteRejectedLoan(loanId).subscribe();
    // window.location.reload();
  }
}

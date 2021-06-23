import { DataServiceService } from './../service/data/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Branch } from '../model/branch.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-branches',
  templateUrl: './list-branches.component.html',
  styleUrls: ['./list-branches.component.css']
})
export class ListBranchesComponent implements OnInit {

  message:any;
  branches:Branch[]=[];
  addBranch:boolean=false;
  constructor(private service:DataServiceService, private router:Router) { }

  ngOnInit(): void {
    this.viewAllBranches();
  }
  viewAllBranches()
  {
    this.service.viewAllBranches().subscribe(
      response=>{console.log(response);
        if(response.status !== 200)
        {
          this.message=response.message;
        }
        this.branches = response.data;
        console.log(this.branches);
        
      }
    )
  }
  addNewBranch()
  {
    this.router.navigate(['branchManipulations']);    
  }
  depositToBranch(ifscCode:string)
  {
    this.router.navigate(['depositToBranchFunds',ifscCode]);
  }
  
}

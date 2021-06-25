import { Router } from '@angular/router';
import { AdminAuthenticationService } from './../service/admin-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin:string='';
  password:string='';
  errorMessage:boolean=false;
  constructor(public auth:AdminAuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(adminLogin:any)
  {
    this.admin = adminLogin.value.uid;
    this.password = adminLogin.value.pwd;
    console.log(this.admin);
    console.log(this.password);
    if(this.auth.adminAuthenticate(this.admin,this.password))
    {
      this.errorMessage=false;
      this.router.navigate(['admin-dashboard']);
    }
    this.errorMessage=true;
  }

}

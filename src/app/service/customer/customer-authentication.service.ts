import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthenticationService {

  static user:string='';
  static pwd:string='';
  provideHeaderString()
  {
    let headerString = 'Basic '+btoa(CustomerAuthenticationService.user+':'+CustomerAuthenticationService.pwd);
    return headerString;
  }
  constructor(private http:HttpClient) { }
  customerAuthenticate(admin:string,password:string){
    CustomerAuthenticationService.user=admin;
    CustomerAuthenticationService.pwd =password;
    let basicAuthenticationString ='Basic '+btoa(admin+':'+password)
    let headers = new HttpHeaders(
    {
      Authorization:basicAuthenticationString
    }); 
    console.log(headers);
    return this.http.get<any>('http://localhost:8080/customer/log-in',{headers}).pipe(
      map((data)=>{
        sessionStorage.setItem('customerUserId',admin)
      })
    );
  }
  logged()
  {
    if(sessionStorage.getItem('customerUserId') === CustomerAuthenticationService.user)
    return true;
    return false;
  }
  logout()
  {
    sessionStorage.removeItem('customerUserId');
  }
}


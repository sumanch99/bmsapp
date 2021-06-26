import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationService {

  constructor(private http:HttpClient) { }
  adminAuthenticate(admin:string,password:string){
    let basicAuthenticationString ='Basic '+btoa(admin+':'+password)
    let headers = new HttpHeaders(
    {
      Authorzation:basicAuthenticationString
    })
    
    return this.http.get<any>('http://localhost:8080/admin/log-in',{headers})
  }
  logged()
  {
    if(sessionStorage.getItem('adminUserId') === 'BankAdmin')
    return true;
    return false;
  }
  logout()
  {
    sessionStorage.removeItem('adminUserId');
  }
}

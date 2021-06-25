import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationService {

  constructor() { }
  adminAuthenticate(admin:string,password:string):boolean{
  
    if(admin==='BankAdmin' && password === 'abcd')
    {
      sessionStorage.setItem('adminUserId','BankAdmin');
      return true;
    }
      return false;
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

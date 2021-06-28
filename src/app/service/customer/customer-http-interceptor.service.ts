import { Observable } from 'rxjs';
import { CustomerAuthenticationService } from './customer-authentication.service';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpInterceptorService implements HttpInterceptor{
  constructor(private aut: CustomerAuthenticationService) { }

  headerString:string=this.aut.provideHeaderString();
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.aut.logged() && req.url.indexOf('basicauth') === -1) {
          const authReq = req.clone({
              headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                  'Authorization': this.headerString
              })
          });
          return next.handle(authReq);
      } else {
          return next.handle(req);
      }
  }
} 

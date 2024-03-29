import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  authToken:any;
  user:any;
  constructor(private http:HttpClient, public httpHeaders:HttpHeaders) { }

  registerUser(user){

    let headers=new HttpHeaders({'content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/users/register', user, {
      headers: headers,
      observe: 'response'
    }).pipe(map((res:HttpResponse<JSON>)=> res));

  }






}

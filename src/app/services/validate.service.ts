import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user){

    if(user.name==null || user.name==undefined || user.name=="" 
      || user.email==null || user.email==undefined || user.email=="" ||
      user.username==null || user.username==undefined || user.username=="" ||
      user.password==null || user.password==undefined || user.password==""){
        return false;
    }
    else{
      return true;
    }
  
  }

validateEmail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

}

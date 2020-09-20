import { AuthService } from './../../services/auth.service';
import { ValidateService } from './../../services/validate.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  username:String;
  email:String;
  password:String;

  constructor(private validateService:ValidateService,
    private authService:AuthService,
   private router:Router) { }

  
  ngOnInit(): void {
  }

  onRegisterSubmit(){

    const user={
      name:this.name,
      username:this.username,
      email:this.email,
      password:this.password
    };

    if(!this.validateService.validateRegister(user)){
      alert("Please fill in all the fields");
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
     alert("Email badly formatted!!");
      return false;
    }


    this.authService.registerUser(user).subscribe(data=>{
      if(data.body["success"]){
        alert("You are registered. You can login now!!");
        this.router.navigate(["/login"]);

      }else{
        alert("Something went wrong!!");
        this.router.navigate(["/register"]); 

      }
    });


  }





}

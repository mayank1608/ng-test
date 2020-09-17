import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router) { }
  uname: string = 'demo';
  pswd: string = 'demo@123';
  isLoggedIn:boolean;
  ngOnInit(): void {
    
  }
  onSubmit(loginForm:any) {
    // console.log(loginForm);
    if(loginForm.username == this.uname && loginForm.password == this.pswd){
      // console.log(loginForm);   
      this.isLoggedIn = true;   
      this.router.navigate(['notes']);
    }
    else{
      alert('Enter Correct user name and password');
    }
  }
  

}

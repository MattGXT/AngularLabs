import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { 
  }

  email = ''
  pwd = ''

  ngOnInit() {
  }

  itemclicked(){
    var users = [{'email':'1@gmail.com','pwd':'123','username':'Matt','birthdate':'1995','age':'24'},{'email':'2@gmail.com','pwd':'123','username':'Matt2','birthdate':'1995','age':'24'},{'email':'3@gmail.com','pwd':'123','username':'Matt3','birthdate':'1995','age':'24'}];
    var key = 0;
    for(let i = 0; i<users.length;i++){
      if(this.email == users[i].email && this.pwd == users[i].pwd){
        key = 1;
        sessionStorage.setItem('user', JSON.stringify(users[i]));
      }
    }
    if (key == 1){
      this.router.navigate(['/account'])
    }
    else{
      alert("Please try again");
    }
  }
}

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
    var users = [{'email':'1@gmail.com','pwd':'123'},{'email':'2@gmail.com','pwd':'123'},{'email':'3@gmail.com','pwd':'123'}];
    var key = 0;
    for(let i = 0; i<users.length;i++){
      if(this.email == users[i].email && this.pwd == users[i].pwd){
        key = 1;
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

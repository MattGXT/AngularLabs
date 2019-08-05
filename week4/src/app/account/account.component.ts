import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) {
    let x = sessionStorage.getItem('user');
    if(x == null){
      this.router.navigate(['/login']);
    }
  }

  username = ''
  birthdate = ''
  age = ''
  email = ''


  ngOnInit() {
    let x = sessionStorage.getItem('user');
    var obj = JSON.parse(x);
    this.username = obj.username;
    this.birthdate = obj.birthdate;
    this.age = obj.age;
    this.email = obj.email;



  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) {
    let x = sessionStorage.getItem('user');
    if(x == null){
      this.router.navigate(['/login']);
    }
   }

  username = ''
  birthdate = ''
  age = ''

  ngOnInit() {
    let x = sessionStorage.getItem('user');
    var obj = JSON.parse(x);
    this.username = obj.username;
    this.birthdate = obj.birthdate;
    this.age = obj.age;
  }

  clicked(){
    let x = sessionStorage.getItem('user');
    var obj = JSON.parse(x);
    obj.username = this.username;
    obj.birthdate = this.birthdate;
    obj.age = this.age;
    var json = JSON.stringify(obj);
    sessionStorage.setItem('user',json);
  }

}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import{ finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private AuthService:AuthService,
    private Router: Router,
    private storage:AngularFireStorage
  ) { }

  public email: string = '';
  public password: string = '';

  ngOnInit(): void {
  }

  onAddUser(){
    console.log('here');
    this.AuthService.registerUser(this.email,this.password)
    .then( (res) => {
      this.AuthService.isAuth().subscribe(user => {
        if(user){
          console.log('CurrentlyUser:',user);
        }
      });
      //this.Router.navigate(['item/itemList']);
    }).catch( (err) => console.log('Error register/onAddUser:',err.message));
  }
}

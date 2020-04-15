import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import{ finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { GlobalConstants } from '../../../globalConstants';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(
    private AuthService:AuthService,
    private Router: Router,
    private storage:AngularFireStorage,
    private globalConstants: GlobalConstants
  ) { }

  public email: string = '';
  public password: string = '';
  
  ngOnInit(): void {
    
  }

  onKey($event){
    console.log($event.target.value);
  }

  onAddUser(){
    this.AuthService.registerUser(this.email,this.password)
    .then( (res) => {
      console.log('AUTH_RES:', res)
      this.AuthService.isAuth().subscribe(user => {
        if(user){
          console.log('CurrentlyUser:',user);
        }
      });
      //this.Router.navigate(['item/itemList']);
    }).catch( (err) => console.log('Error register/onAddUser:',err.message));
  }
}

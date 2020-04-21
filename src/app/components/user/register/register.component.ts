import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import{ finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { GlobalConstants } from '../../../globalConstants';
import LABELS from './../../../../assets/labels.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(
    private AuthService:AuthService,
    private router: Router,
    private storage:AngularFireStorage,
    private globalConstants: GlobalConstants
  ) { }

  public email: string = '';
  public password: string = '';
  public login : any = {};
  public user: any;
  public successMessage: string = '';
  
  ngOnInit(): void {
    
  }

  onKey($event){
    console.log($event.target.value);
  }

  async onAddUser(){
    await this.AuthService.registerUser(this.email,this.password)
    .then( (res) => {
      if (res.data){
        this.login = res.data
      }
      console.log('login after save data', res.data)
      if(res.data && res.data.code === 200 && res.data.data && res.data.data.user){    
        this.successMessage = LABELS.routes_messages.register.success_register;    
        // this.user = res.data.data.user;
        // console.log('CurrentlyUser:',this.login);
        // this.router.navigate(['login']);
      }
      //this.Router.navigate(['item/itemList']);
    }).catch( (err) => {
      console.log('Error register/onAddUser:',err.data)
      this.login = err;
    });
  }
}

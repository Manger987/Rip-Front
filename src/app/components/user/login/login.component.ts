import { Component, OnInit, Input, Host, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { AppComponent } from './../../../app.component';
import { StorageService } from '../../../services/storage.service';
import { GlobalConstants } from './../../../globalConstants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AppComponent ]
})
export class LoginComponent{ // implements OnInit {
  @Output() emitEventDataUser = new EventEmitter<any>();

  constructor(
    private router: Router,
    private AuthService:AuthService,
    private storageService: StorageService,
    private _globalConstants: GlobalConstants,
    @Host() public _app: AppComponent
  ) {
    
   }

  public email:string = '';
  public password:string = '';
  public login : any = {};
  public errorLogin: any = {}
  public LABELS: any;

  async ngOnInit() {
    this.LABELS = await this._globalConstants.getLabels();
  }

  onLogin():void {
    this.AuthService.loginEmailUser(this.email,this.password)
    .then(async (res) => {
      this.login = res.data;
      console.log('LOGIN',this.login)
      if (this.login.code === 200){
        await this.storageService.setStorage('currentUser', this.login.data.user)
        // this._app.apiKey = this.login.data.user.apiKey;
        // this._app.USER = this.login.data.user;
        // this._app.OnInit();
        this.onLoginRedirect(this.login);
      }
    })
    .catch(error => {
      console.log('ERROR: Login/onLogin:', error);
      this.login = error
      this.login.message = this.LABELS.Error.Network_Error;
    });
  }

  onLogOut(){
    this.AuthService.logOutUser();
  }
  
  onLoginRedirect(user: any) : void { 
    this.emitEventDataUser.emit(this.login.data.user);
    this.router.navigate(['products']);
  }
}

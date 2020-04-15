import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { LoginComponent } from './Components/user/login/login.component';
import { Observable } from 'rxjs';
import { UserInterface } from './models/user';
import { GlobalConstants } from './globalConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rip-Front';
  userLogged: Boolean = false;
  apiKey = '';//sessionStorage.getItem('userApiKey');
  USER: UserInterface;
  LABELS: any;
  
  // @ViewChild('UerData') USER:LoginComponent;

  constructor(
    private router: Router,
    private authService: AuthService,
    public storageService: StorageService,
    private _globalConstants: GlobalConstants
  ){}

  async ngOnInit(){
    this.USER = this.storageService.getStorage('currentUser');
    this.LABELS = await this._globalConstants.getLabels();
  }

  onActivate (componentReference) { 
    if (componentReference && componentReference.emitEventDataUser) {
      componentReference.emitEventDataUser.subscribe ((data) => { 
        this.USER = data;
      }) 
    }
 }

  Login(){
    this.router.navigate(['user/login']);
  }

  LogOut(){
    if (this.authService.logOutUser()) {
      this.storageService.removeStorage('currentUser');
      delete this.USER;
    }
  }
}

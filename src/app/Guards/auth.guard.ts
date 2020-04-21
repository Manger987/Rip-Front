import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service'
import { StorageService } from './../services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService, 
    private router: Router,
    private storageService: StorageService,
  ) {}
  canActivate() {
    if(this.storageService.getStorage('currentUser')) {
      return true
    } else {
      this.router.navigate(['/user/login'])
      return false
    }
  }
}

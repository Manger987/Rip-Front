import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  // templateUrl: './logout.component.html',
  template: `<button (click)="onLogOut()">LogOut</button>`,
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private AuthService:AuthService,
    private Router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogOut(){
    if (this.AuthService.logOutUser()) {
      this.Router.navigate(['user/login']);
    }
  }
}

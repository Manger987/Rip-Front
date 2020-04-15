import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user';

@Injectable()
export class StorageService {

  public isUserLoggedIn;
  public userLogged:any;

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setStorage(key: string, user:any) {
    this.isUserLoggedIn = true;
    this.userLogged = user;
    return localStorage.setItem(key, JSON.stringify(user));
  }

  getStorage(key: string) {
  	return JSON.parse(localStorage.getItem(key));
  }

  removeStorage(key: string) {
      return localStorage.removeItem(key);
  }

}
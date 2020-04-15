import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from 'src/app/Models/user';
import { DataReturn } from './../models/dataReturn';
import axios from 'axios';
import { from } from 'rxjs';
import LABELS from './../../assets/labels.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afsAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
    ) { }
  
  isAuth(){
    //Metodo Comprueba si el usuario esta logueado.
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  async logOutUser(){
    // this.afsAuth.auth.signOut();
    return await axios.get('http://localhost:4600/auth/logOut').then(resp => {
      if(resp) {
        this.router.navigate(['user/login']);
      }
    });
  }

  async registerUser(email:string, password:string) {
    return await axios.post('http://localhost:4600/auth/createAuth',
    {
      email: email,
      password: password
    }).then(resp => {
      console.log('Auth.service OK:',resp)
      return resp;
    }).catch((error: any) => {
      const data : DataReturn = {
        code: 503,
        message: LABELS.Error.Network_Error,
        data: error
      }
      console.log('Auth service don\'t conection with backend service', data)
      throw data;
    });
  }
  
  async loginEmailUser(email:string,password:string) {
    return await axios.post('http://localhost:4600/auth/login',
    {
      email: email,
      password: password
    }).then(resp => {
      return resp;
    }).catch((error: any) => {
      const data : DataReturn = {
        code: 503,
        message: LABELS.Error.Network_Error,
        data: error
      }
      console.log('Auth service don\'t conection with backend service', data)
      throw data;
    });
  }
}

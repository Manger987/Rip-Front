
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsComponent } from './components/products/products.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './Components/user/login/login.component';
import { RegisterComponent } from './Components/user/register/register.component';
import { LogoutComponent } from './Components/user/logout/logout.component';
import { ProductsModule } from './Components/products/products.module';
import { StorageService } from './services/storage.service';
import { HttpClientModule } from '@angular/common/http';
import { GlobalConstants } from './globalConstants';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    Page404Component,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ProductsModule,
    HttpClientModule
  ],
  providers: [
    AngularFireAuth,
    AngularFirestore,
    StorageService,
    GlobalConstants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

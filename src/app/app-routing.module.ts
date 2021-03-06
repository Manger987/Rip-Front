import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/user/login/login.component';
import { LogoutComponent } from './Components/user/logout/logout.component';
import { RegisterComponent } from './Components/user/register/register.component';
import { ProductsComponent } from './Components/products/products.component'
import { Page404Component } from './Components/page404/page404.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  { path: 'user/login', component: LoginComponent },
  { path: 'user/logout', component: LogoutComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

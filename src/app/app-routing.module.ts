import { ProfilComponent } from './components/profil/profil.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['']);
const routes: Routes = [{ path: "login", component: LoginComponent, ...canActivate(redirectToHome), },
{ path: "", component: HomeComponent, ...canActivate(redirectToLogin), },
{ path: "profil", component: ProfilComponent, ...canActivate(redirectToLogin), },
{ path: "signup", component: SignupComponent, ...canActivate(redirectToHome), },
{ path: "uploadlist", component: UploadListComponent, ...canActivate(redirectToHome), },
{ path: "uploadlist", component: UploadDetailsComponent, ...canActivate(redirectToHome), },
{ path: "uploadlist", component: UploadFormComponent, ...canActivate(redirectToHome), }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

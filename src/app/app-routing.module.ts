import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddBookComponent } from './add-book/add-book.component';
import { CalcFineComponent } from './calc-fine/calc-fine.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IssuesAdminComponent } from './issues-admin/issues-admin.component';
import { IssuesUserComponent } from './issues-user/issues-user.component';
import { RequestsAdminComponent } from './requests-admin/requests-admin.component';
import { RequestsUserComponent } from './requests-user/requests-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewBooksAdminComponent } from './view-books-admin/view-books-admin.component';
import { ViewBooksUserComponent } from './view-books-user/view-books-user.component';

const routes: Routes = [{path:"",component:HomePageComponent},{path:"signIn",component:SignInComponent},{path:"signUp",component:SignUpComponent},{path:"view-books-admin",component:ViewBooksAdminComponent},{path:"view-books-user",component:ViewBooksUserComponent},{path:"add-book",component:AddBookComponent},{path:"add-admin",component:AddAdminComponent},{path:"calc-fine",component:CalcFineComponent},{path:"requests-admin",component:RequestsAdminComponent},{path:"requests-user",component:RequestsUserComponent},{path:"issues-user",component:IssuesUserComponent},{path:"issues-admin",component:IssuesAdminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

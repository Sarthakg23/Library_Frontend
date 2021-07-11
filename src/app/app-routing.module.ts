import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewBooksAdminComponent } from './view-books-admin/view-books-admin.component';
import { ViewBooksUserComponent } from './view-books-user/view-books-user.component';

const routes: Routes = [{path:"",component:HomePageComponent},{path:"signIn",component:SignInComponent},{path:"signUp",component:SignUpComponent},{path:"view-books-admin",component:ViewBooksAdminComponent},{path:"view-books-user",component:ViewBooksUserComponent},{path:"add-book",component:AddBookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

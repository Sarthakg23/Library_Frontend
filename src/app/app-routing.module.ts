import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BookUserComponent } from './book-user/book-user.component';
import { BookAdminComponent } from './book-admin/book-admin.component';

const routes:Routes=[
  {path:"",component:HomePageComponent},
  {path:"signIn",component:SignInComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"bookUser",component:BookUserComponent},
  {path:"bookAdmin",component:BookAdminComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BooksComponent } from './books/books.component';
import { BookAdminComponent } from './book-admin/book-admin.component';
import { BookUserComponent } from './book-user/book-user.component';
import { RequestsComponent } from './requests/requests.component';

const routes:Routes=[
  {path:"",component:HomeComponent},
  {path:"signIn",component:SignInComponent},
  {path:"books",component:BooksComponent},
  {path:"book-admin",component:BookAdminComponent},
  {path:"book-user",component:BookUserComponent},
  {path:'allrequest',component:RequestsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ]
})
export class AppRoutingModule { }

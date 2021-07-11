import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavBarUserComponent } from './nav-bar-user/nav-bar-user.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { ViewBooksAdminComponent } from './view-books-admin/view-books-admin.component';
import { ViewBooksUserComponent } from './view-books-user/view-books-user.component';
import { AddBookComponent } from './add-book/add-book.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    SignInComponent,
    NavBarUserComponent,
    NavBarAdminComponent,
    ViewBooksAdminComponent,
    ViewBooksUserComponent,
    AddBookComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarUserComponent } from './nav-bar-user/nav-bar-user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ApiproviderService } from './apiprovider.service';
import { FormsModule } from '@angular/forms';
import { BooklistComponent } from './booklist/booklist.component';
import {HttpClientModule} from '@angular/common/http';
import { RequestsComponent } from './requests/requests.component';
import { IssuesComponent } from './issues/issues.component';
import { AddBookComponent } from './add-book/add-book.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarUserComponent,
    SignUpComponent,
    SignInComponent,
    HomepageComponent,
    BooklistComponent,
    RequestsComponent,
    IssuesComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

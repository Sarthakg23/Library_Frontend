import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BooksComponent } from './books/books.component';
import { FilterPipe } from './filter.pipe';
import { BookUserComponent } from './book-user/book-user.component';
import { BookAdminComponent } from './book-admin/book-admin.component';
import { FilterComponent } from './filter/filter.component';
import { RequestsComponent } from './requests/requests.component';
import { IssuesComponent } from './issues/issues.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NavBarAdminComponent,
    SignInComponent,
    BooksComponent,
    FilterPipe,
    BookUserComponent,
    BookAdminComponent,
    FilterComponent,
    RequestsComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

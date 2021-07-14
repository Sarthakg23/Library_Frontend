import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BooklistComponent } from './booklist/booklist.component';

import { HomepageComponent } from './homepage/homepage.component';
import { IssuesUserComponent } from './issues-user/issues-user.component';
import { IssuesComponent } from './issues/issues.component';
import { RequestUserComponent } from './request-user/request-user.component';
import { RequestsComponent } from './requests/requests.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'home',component:HomepageComponent},
  {path:'signIn',component:SignInComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'userBook',component:BooklistComponent},
  {
    path:'allrequest',component:RequestsComponent
  },
  {
    path:'addbook',component:AddBookComponent
  },
  {
    path:'userRequests',component:RequestUserComponent
  },
  {
    path:'userIssues',component:IssuesUserComponent
  },
  {
    path:'adminIssues',component:IssuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private libraryService:LibraryService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:any)
  {
    const obj={"user_name":form.username,"user_email":form.useremail,"user_password":form.password,"user_gender":form.usergender,"user_type":"user","user_age":form.userage,"user_DOB":form.userDOB,"user_address":form.useradress,"user_contact":form.usercontact};
    this.libraryService.signUp(obj).subscribe(data=>
      {
        const mail={"to":form.useremail,"subject":"SignUp SuccessFull","message":"Welcome"+form.username+"\nYou are successfully registered on Library Management System.\n Now you can issue books and download e-books."}
        this.libraryService.mail(mail).subscribe(data=>{alert("Signup Mail Sent")});
        this.router.navigate(['/signIn']);
      })
  }

}

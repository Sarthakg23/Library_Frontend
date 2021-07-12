import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private libService:LibraryService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:any)
  {
    console.log(form);
    const user={"user_email":form.useremail,"user_password":form.password};
    this.libService.signIn(user).subscribe((data:any)=>
      {
        const decodedToken:any=jwt_decode(data);
        console.log(decodedToken);
        console.log(decodedToken.role);
        console.log(decodedToken.certserialnumber);
      if(decodedToken.role==='admin')
      {
        this.router.navigate(['/book-admin']);
      }
      else if(decodedToken.role==='user')
      {
        this.router.navigate(['/book-user']);
      }
      })
  }
}



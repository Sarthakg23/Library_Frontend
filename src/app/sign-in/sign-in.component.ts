import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private libService:LibraryService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log((form));
    const user1={"user_email":form.value.useremail,"user_password":form.value.password};
    this.libService.signIn(user1).subscribe((data:any)=>{
      const decodedToken:any=jwt_decode(data);
      console.log(decodedToken);
      this.route.navigate(["/bookUser"]);
    })
  }
}

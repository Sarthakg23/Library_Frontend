import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private libService:LibraryService,private route:Router) { }

  ngOnInit(): void {
  }

  onSignUp(user:any){
    const user1={"user_name":user.value.username, "user_email":user.value.useremail,"user_password":user.value.password,"user_gender":user.value.usergender,"user_age":user.value.userage,"user_DOB":user.value.userDOB,"user_address":user.value.useradress,"user_contact":user.value.usercontact};
    this.libService.signUp(user1).subscribe((data)=>{
      alert(data);
      this.route.navigate(['/signIn'])
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  show:boolean=false;
  emailshow:boolean=true;
  emailvalue:any=null;
  constructor(private libraryService:LibraryService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:any)
  {
    if(form.status=="INVALID")
    alert("Enter a valid Email");
    else
    {
    const email={"user_email":form.value.email};
    this.emailvalue=form.value.email;
    this.libraryService.findemail(email).subscribe(data=>{
      this.show=true;
      this.emailshow=false;
    },
    error=>{
      alert("Invalid Email");
    })
    
  }
}

updatepass(form:any)
{
  if(form.status=="INVALID")
  alert("Enter a Valid DOB and Password")
  else
  {
    const data={"user_email":this.emailvalue,"user_DOB":form.value.dob,"user_password":form.value.password};
    this.libraryService.forgotpass(data).subscribe(
      data=>{
        alert("Password Updated")
        const mail={"to":this.emailvalue,"subject":"Password Changed","message":"Hi ,\n\n Your Password has changed Successfully. Please feel free to contact for further information."};
        this.libraryService.mail(mail).subscribe(data=>{alert("Psssword Change Mail Sent")});
        location.reload();
      },
      error=>{
        alert("Password Updation Unsuccesfull")
      }
    )
  }
}

}

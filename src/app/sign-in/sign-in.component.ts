import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private libService:LibraryService, private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit(form:any)
  {
    console.log(form);
    const user={"user_email":form.useremail,"user_password":form.password};
    this.libService.signIn(user).subscribe((data:any)=>
      {
        localStorage.setItem("token",data);
        const decodedToken:any=jwtDecode(data);
        console.log(decodedToken);
        console.log(decodedToken.role);
        console.log(decodedToken.certserialnumber);
      if(decodedToken.role==='admin')
      {
        this.router.navigate(['/view-books-admin']);
      }
      else if(decodedToken.role==='user')
      {
        this.router.navigate(['/view-books-user']);
      }
      })
  }

  forgot()
  {
    const config=new MatDialogConfig();
    config.autoFocus=true;
    config.width="30%";
    config.height="50%";
    this.dialog.open(ForgotPasswordComponent,config)
  }

}

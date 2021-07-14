import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent implements OnInit {

  isloggedin:boolean=false;
  constructor(private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token"))
    {
        const decodedToken:any=jwtDecode(localStorage.getItem("token")||"");
        if( Date.now() > decodedToken.exp*1000)
        {
        alert("Session Expired!")
        this.router.navigate(['/signIn'])
        }
        else
        {
          this.isloggedin=true;
           if(decodedToken.role==='admin'&&this.router.url=="/add-book")
           {
             this.router.navigate(['/add-book'])
           }
           else if(decodedToken.role==='admin'&&this.router.url=="/calc-fine")
           {
             this.router.navigate(['/calc-fine'])
           }
           else if(decodedToken.role==='admin'&&this.router.url=="/add-admin")
           {
             this.router.navigate(['/add-admin'])
           }
            else if(decodedToken.role==='user')
            {
              this.router.navigate(['/view-books-user']);
            }
            
            else if(decodedToken.role==='admin'&&this.router.url=='/requests-admin')
            {
              this.router.navigate(['/requests-admin'])
            }
            else if(decodedToken.role==='admin')
            {
              this.router.navigate(['/view-books-admin'])
            }
          }
    }
    else
    this.router.navigate(['/signIn'])
  }

  logout()
  {
    localStorage.clear();
    this.isloggedin=false;
    this.router.navigate(['/signIn'])
  }

  profile()
  {
    const config=new MatDialogConfig();
    config.autoFocus=true;
    config.width="50%";
    config.height="75%";
    this.dialog.open(ProfileComponent,config)
  }

 
}

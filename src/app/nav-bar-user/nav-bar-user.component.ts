import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-nav-bar-user',
  templateUrl: './nav-bar-user.component.html',
  styleUrls: ['./nav-bar-user.component.css']
})
export class NavBarUserComponent implements OnInit {

  isloggedin:boolean=false;
  constructor(private router:Router) { }

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
           if(decodedToken.role==='admin')
           {
             this.router.navigate(['/view-books-admin'])
           }
            else if(decodedToken.role==='user')
            {
              this.router.navigate(['/view-books-user']);
            }
          }
    }
    else
    {
      if(this.router.url=="/signIn")
      this.router.navigate(['/signIn'])
      else if(this.router.url=="/signUp")
      this.router.navigate(['/signUp'])
      else
      this.router.navigate([''])

    }
  }

  logout()
  {
    localStorage.clear();
    this.isloggedin=false;
    this.router.navigate(['/signIn'])
  }

}

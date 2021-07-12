import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  show:boolean=false;
  constructor(private libraryService:LibraryService) { }

  ngOnInit(): void {
    const token=localStorage.getItem("token")||"";
    const decodedToken:any=jwtDecode(token);
    this.libraryService.getUser(decodedToken.certserialnumber).subscribe(data=>{
      this.user=data;
    })
  }

  update()
  {
    if(this.show==false)
    this.show=true;
    else
    this.show=false;
  }

  submit(password:any)
  {
    if(password.status=="INVALID")
    alert("Enter a password of Min Length 6");
    else
    {
      const data={"user_id":this.user.user_id,"user_password":password.value.password};
      this.libraryService.updatePass(data).subscribe(data=>{
        alert("Password Updated!");
        this.show=false;
      })
    }
  }
}

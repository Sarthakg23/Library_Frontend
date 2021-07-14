import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-requests-user',
  templateUrl: './requests-user.component.html',
  styleUrls: ['./requests-user.component.css']
})
export class RequestsUserComponent implements OnInit {

  list:any;

  constructor(private ls:LibraryService) { }

  ngOnInit(): void {
    let token=localStorage.getItem('token')!;
    let decode:any=jwtDecode(token);
    let user_id=parseInt(decode.certserialnumber);
    this.ls.requestsbyUser(user_id).subscribe(data=>{
      this.list=data;
    })
  }

  cancelrequest(id:any)
  {
this.ls.deletereq(id).subscribe(data=>{
  alert("Request Cancelled")
  window.location.reload();
})
  }
}

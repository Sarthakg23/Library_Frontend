import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ApiproviderService } from '../apiprovider.service';

@Component({
  selector: 'app-request-user',
  templateUrl: './request-user.component.html',
  styleUrls: ['./request-user.component.css']
})
export class RequestUserComponent implements OnInit {

  constructor(private api:ApiproviderService) { }
  list:any=[];
  pending="pending";

  ngOnInit(): void {
    let token=localStorage.getItem('userToken')!;
    let decode:any=jwtDecode(token);
    console.log(decode);
    let user_id=parseInt(decode.certserialnumber);
    console.log(user_id);
    this.api.requestUser(user_id).subscribe(d=>{
      this.list=d;
    })
    console.log(this.list);
  }

  cancelrequest(id:number){
    this.api.requestcancelByuser(id).subscribe(d=>{
      console.log(d);
      window.location.reload();
    })
  }

}

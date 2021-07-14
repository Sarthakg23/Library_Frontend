import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ApiproviderService } from '../apiprovider.service';

@Component({
  selector: 'app-issues-user',
  templateUrl: './issues-user.component.html',
  styleUrls: ['./issues-user.component.css']
})
export class IssuesUserComponent implements OnInit {

  constructor(private api:ApiproviderService) { }
  list:any=[];
  pending="pending";

  ngOnInit(): void {
    let token=localStorage.getItem('userToken')!;
    let decode:any=jwtDecode(token);
    console.log(decode);
    let user_id=parseInt(decode.certserialnumber);
    this.api.issueByUserId(user_id).subscribe(d=>{
      this.list=d;
      console.log(d);
    })
  }

  returnBook(id:number,requestId:number){
    this.api.returnBook(id).subscribe(d=>{
      alert(d);
      console.log(d);
      if(d=="Book is returned"){
        this.api.requestcancelByuser(requestId).subscribe(data=>{
          console.log(data);
        })
      }
      window.location.reload();
    })

  }
  calculateFine(dateSent:any){
    let currentDate = new Date();
   dateSent = new Date(dateSent);

    let diff= Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ));
    if(diff<=0){
      return 0;
    }
    return diff*15;
  }


}

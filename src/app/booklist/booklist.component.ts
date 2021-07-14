import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ApiproviderService } from '../apiprovider.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  lists:any=[];
  // isrequested:boolean=false;
  // isapprove:boolean=false;

  constructor(private api:ApiproviderService) { }

  ngOnInit(): void {
    this.api.getallbooks().subscribe(d =>{
      console.log(d);
      this.lists=d;
    })
  }
  requestBook(ID:number){
    console.log(ID);
    let token=localStorage.getItem('userToken')!;
    let decode:any=jwtDecode(token);
    console.log(decode);
    let user_id=parseInt(decode.certserialnumber);
    console.log(user_id);
    let book_id=ID;

    let islist={
      "book_id":book_id,
      "user_id":user_id
    }
    this.api.isrequested(islist).subscribe(d =>{
      if(d=="allready requested"){
         alert(d+" for this book");
      }
      else{
        let request_status="pending";
        let reIssue_id=null;
        let request_date=Date.now();
        let request_approve_date=Date.now();
        let request={
          "user_id":user_id,
          "book_id":book_id,
          "request_status":request_status,
          "reIssue_id":reIssue_id,
          "request_date":"2021-07-09",
          "request_approve_date":"2021-07-09"
        }
        console.log(request);
        this.api.requestBook(request).subscribe(d=>{
          console.log(d);
          if(d){
            alert("you request successfully, these are details of all requests"+d);
          }
        })

          }
        })
        this.api.isapproved(islist).subscribe(d=>{
          console.log(d);
        })
  }
  

}

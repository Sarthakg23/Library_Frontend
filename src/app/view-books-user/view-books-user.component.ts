import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-view-books-user',
  templateUrl: './view-books-user.component.html',
  styleUrls: ['./view-books-user.component.css']
})
export class ViewBooksUserComponent implements OnInit {

  showTitle=false;
  showLang=false;
  showGenre=false;
  Title='';
  Language='';
  Genre='';  
  lists:any=[];

  constructor(private libService:LibraryService,private route:Router) { }

  ngOnInit(): void {
    this.libService.getAllBooks().subscribe((data:any)=>{
      console.log(data);     
      this.lists=data;
    })
  }
  clickTitle(){
    if(this.showTitle==true)
    {
    this.Title='';
    this.showTitle=false;
    }
    else
    this.showTitle=true;
    }
    clickLang(){
      if(this.showLang==true)
      {
        this.Language='';
        this.showLang=false;
      }
      else
      this.showLang=true;
    }
    clickGenre(){
      if(this.showGenre==true)
      {
        this.Genre='';
      this.showGenre=false;
      }
      else
      this.showGenre=true;
    }

    request(ID:number){
      let token=localStorage.getItem('token')!;
      let decode:any=jwtDecode(token);
      let user_id=parseInt(decode.certserialnumber);
      let book_id=ID;
      let islist={
        "book_id":book_id,
        "user_id":user_id
      }
      this.libService.isrequested(islist).subscribe(d =>{
        if(d=="allready requested"){
           alert(d+" for this book");
        }
        else{
          let request_status="Pending";
          let reIssue_id=null;
          let request_date=new Date();
          let request_approve_date=null;
          let request={
            "user_id":user_id,
            "book_id":book_id,
            "request_status":request_status,
            "reIssue_id":reIssue_id,
            "request_date":request_date,
            "request_approve_date":request_approve_date
          }
          console.log(request);
          this.libService.requestbook(request).subscribe(d=>{
            console.log(d);
            if(d){
              alert("you request successfully, these are details of all requests"+d);
            }
          })
  
            }
          })
        }
  
  }

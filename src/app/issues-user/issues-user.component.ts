import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-issues-user',
  templateUrl: './issues-user.component.html',
  styleUrls: ['./issues-user.component.css']
})
export class IssuesUserComponent implements OnInit {

  list:any;

  constructor(private ls:LibraryService) { }

  ngOnInit(): void {
    let token=localStorage.getItem('token')!;
    let decode:any=jwtDecode(token);
    let user_id=parseInt(decode.certserialnumber);
    this.ls.issuesByUser(user_id).subscribe(data=>{
     this.list=data;
    })
  }

  returnBook(id:any)
  {
    this.ls.returnBook(id).subscribe(data=>{
      alert("Book Returned");
      window.location.reload();
    },error=>{
      alert("Cant Return Contact Admin")
    })
  }

  reIssue(id:any)
  {
    this.ls.reIssue(id).subscribe(data=>
      {
        alert("Reissued");
        window.location.reload();
      },
      error=>{
        alert("Cannot Reissue!");
      })
  }

}

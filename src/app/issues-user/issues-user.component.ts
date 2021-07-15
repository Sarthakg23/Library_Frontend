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
      if(data=="Return Successfull")
      {
      alert("Book Returned");
      let token=localStorage.getItem('token')!;
      let decode:any=jwtDecode(token);
      let user_id=parseInt(decode.certserialnumber);
      this.ls.getUser(user_id).subscribe((user:any)=>{
        const mail={"to":user.user_email,"subject":"Book Returned","message":"Hi "+user.user_name+",\n\nYou have successfully returned the book issued on ISSUE ID: "+id+".\n We hope your visit again. Please feel free to contact for further information."};
        this.ls.mail(mail).subscribe(data=>{alert("Return Mail Sent")});
      window.location.reload();
    },error=>{
      alert("Cant Return Contact Admin")
    })
  } else if(data=="Can't Return Contact Admin!")
  {
    alert("Cant Return Contact Admin")
  }
})
}

  reIssue(id:any)
  {
    this.ls.reIssue(id).subscribe(data=>
      {
        if(data=="Reissued")
      {
        alert("Reissued");
        let token=localStorage.getItem('token')!;
        let decode:any=jwtDecode(token);
        let user_id=parseInt(decode.certserialnumber);
        this.ls.getUser(user_id).subscribe((user:any)=>{
          const mail={"to":user.user_email,"subject":"Book ReIssued","message":"Hi "+user.user_name+",\n\nBook ReIssue Successfull for the book issued on ISSUE ID: "+id+".\n We hope your visit again. Please feel free to contact for further information."};
          this.ls.mail(mail).subscribe(data=>{alert("ReIssue Mail Sent")});
       window.location.reload();
      },
      error=>{
        alert("Cannot Reissue!");
      })
  }
  else if(data=="Cannot Reissue")
  {
    alert("Cannot Reissue!");
  }
})
  }

}

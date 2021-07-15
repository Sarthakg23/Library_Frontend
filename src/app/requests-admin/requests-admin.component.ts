import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-requests-admin',
  templateUrl: './requests-admin.component.html',
  styleUrls: ['./requests-admin.component.css']
})
export class RequestsAdminComponent implements OnInit {

  list:any;
  constructor(private libraryService:LibraryService) { }

  ngOnInit(): void {
    this.libraryService.allrequest().subscribe(d=>{
      console.log(d);
      this.list=d;
      
    })
  }
  cancel(id:number,userid:number,bookid:number){
    this.libraryService.cancelrequest(id).subscribe(d=>{
      console.log(d);
     this.libraryService.getUser(userid).subscribe((user:any)=>{
      const mail={"to":user.user_email,"subject":"Book Request Cancelled","message":"Hi "+user.user_name+",\n\nWe have cancelled your request made from your account "+user.user_email+" for Book ID: "+bookid+".\n We hope your visit again. Please feel free to contact for further information."};
      this.libraryService.mail(mail).subscribe(data=>{alert("Cancel Mail Sent")});
     })
      window.location.reload();
    })
 
    
  }
  approve(id:number,userid:number,bookid:number){
    this.libraryService.approverequest(id).subscribe(d=>{
      console.log(d);
      this.libraryService.getUser(userid).subscribe((user:any)=>{
        const mail={"to":user.user_email,"subject":"Book Request Approved","message":"Hi "+user.user_name+",\n\nWe have approved your request made from your account "+user.user_email+" for Book ID: "+bookid+".\n We hope your visit again. Please feel free to contact for further information."};
        this.libraryService.mail(mail).subscribe(data=>{alert("Approve Mail Sent")});
    })
    window.location.reload();
  })
}  
}

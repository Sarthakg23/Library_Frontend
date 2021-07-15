import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-calc-fine',
  templateUrl: './calc-fine.component.html',
  styleUrls: ['./calc-fine.component.css']
})
export class CalcFineComponent implements OnInit {

  list:any;
  constructor(private libraryService:LibraryService) { }

  ngOnInit(): void {
    this.libraryService.calcFine().subscribe((data:any)=>{
      this.list=data;
    data.forEach((e:any) => {
        this.libraryService.userEmailByIssueId(e.ISSUE_ID).subscribe(d=>{
          const mail={"to":d,"subject":"Fine imposed on your issued book","message":"Hi ,\n\nYour issued book has passed the return date, You need to pay "+e.FINE+ " before returning the book.for issue ID: "+e.ISSUE_ID+".\n We hope your visit again. Please feel free to contact for further information."};
      this.libraryService.mail(mail).subscribe(data=>{alert("Fine Mail Sent")});
        })
      });
    },
    error=>{
      alert("No Issues have fine!")
    }
    )
  }

}
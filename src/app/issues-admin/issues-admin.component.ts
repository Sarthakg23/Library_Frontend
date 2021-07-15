import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-issues-admin',
  templateUrl: './issues-admin.component.html',
  styleUrls: ['./issues-admin.component.css']
})
export class IssuesAdminComponent implements OnInit {

  list:any;
  totalfine=0;
  constructor(private ls:LibraryService) { }

  ngOnInit(): void {
    this.ls.allIssues().subscribe((data:any)=>{
      this.list=data;

      console.log(data);
   
       data.forEach((e:any) => {
         console.log(e.FINE);
        this.totalfine+=e.FINE;
      });
      console.log(this.totalfine);
    })
  }



}

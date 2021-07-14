import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-issues-admin',
  templateUrl: './issues-admin.component.html',
  styleUrls: ['./issues-admin.component.css']
})
export class IssuesAdminComponent implements OnInit {

  constructor(private http:LibraryService) { }
  list:any=[];

  ngOnInit(): void {
    this.http.allIssues().subscribe(d=>{
      this.list=d;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiproviderService } from '../apiprovider.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  issueList:any=[];
  constructor(private api:ApiproviderService) { }

  ngOnInit(): void {
    this.api.allissues().subscribe(d=>{
      this.issueList=d;
    })
  }

}

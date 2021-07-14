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

import { Component, OnInit } from '@angular/core';
import { ApiproviderService } from '../apiprovider.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  list:any=[];
  pending="pending";
  can="canceled";
  approved="approved";


  userlist:any;
  constructor(private api:ApiproviderService) { }

  ngOnInit(): void {
    this.api.allrequest().subscribe(d=>{
      console.log(d);
      this.list=d;
      
    })
  }
  cancel(id:number){
    this.api.cancelrequest(id).subscribe(d=>{
      console.log(d);
    })
    window.location.reload();
    let userid;
    
  }
  approve(id:number){
    this.api.approverequest(id).subscribe(d=>{
      console.log(d);
      window.location.reload();
    })


  }
  

}

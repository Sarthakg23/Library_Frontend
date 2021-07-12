import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  list:any=[];
  pending="pending";
  userlist:any;
  constructor(private api:LibraryService) { }

  ngOnInit(): void {
  }
  cancel(id:number){
    this.api.cancelrequest(id).subscribe((d:any)=>{
      console.log(d);
    })
    window.location.reload();
    let userid;
    
  }
  approve(id:number){
    this.api.approverequest(id).subscribe((d:any)=>{
      console.log(d);
      window.location.reload();
    })


  }
  

}

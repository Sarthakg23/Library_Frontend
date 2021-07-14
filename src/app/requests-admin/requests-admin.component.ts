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
  cancel(id:number){
    this.libraryService.cancelrequest(id).subscribe(d=>{
      console.log(d);
      window.location.reload();
    })
 
    
  }
  approve(id:number){
    this.libraryService.approverequest(id).subscribe(d=>{
      console.log(d);
      window.location.reload();
    })


  }
  

}

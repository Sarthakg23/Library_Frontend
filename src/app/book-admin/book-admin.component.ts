import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
@Component({
  selector: 'app-book-admin',
  templateUrl: './book-admin.component.html',
  styleUrls: ['./book-admin.component.css']
})
export class BookAdminComponent implements OnInit {

  constructor(private libService:LibraryService,private route:Router) { }

  Title='';
  Genre='';
  Language='';
  lists:any=[];
  rack_no:number|undefined;
  totalCopies:any;
  listSelected:number|undefined;
  ngOnInit(): void {
    
    this.libService.getAllBooks().subscribe((data:any)=>{
      console.log(data);     
      this.lists=data;
    })
  }

  addCopy(id:any){
    const obj={"ID":id}
    this.libService.addCopy(obj).subscribe((data:any)=>{
      alert(data);   
    })
   window.location.reload();
  }

  deleteCopy(id:any){
    const obj={"ID":id}
    this.libService.deleteCopy(obj).subscribe((data:any)=>{
      alert(data);
    })
    window.location.reload();
  }
  deleteBook(id:any){

    this.libService.deleteBook(id).subscribe((data:any)=>{
      alert(data);
    })
    window.location.reload();
  }
  
  updateBook(id:any,rack_no:any){
    const obj={"ID":id,"RACK_NO":rack_no}
    console.log(obj);
    this.libService.updateBook(obj).subscribe((data:any)=>{
      alert(data);
    })
    window.location.reload();
  }
}

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

  lists:any=[];
  totalCopies:any;
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
    this.libService.deleteCopy(id).subscribe((data:any)=>{
      alert(data);
    })
  }
  deleteBook(id:any){
    this.libService.deleteBook(id).subscribe((data:any)=>{
      alert(data);
    })
  }
  
}

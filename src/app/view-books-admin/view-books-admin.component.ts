import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-view-books-admin',
  templateUrl: './view-books-admin.component.html',
  styleUrls: ['./view-books-admin.component.css']
})
export class ViewBooksAdminComponent implements OnInit {

  Title='';
  Language='';
  Genre='';
  showTitle=false;
  showLang=false;
  showGenre=false;
  lists:any=[];
  rack_no:number|undefined;
  totalCopies:any;
  listSelected:number|undefined;

  constructor(private libService:LibraryService,private route:Router) { }

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
      window.location.reload();
    })
  
  }

  deleteCopy(id:any){
    const obj={"ID":id}
    this.libService.deleteCopy(obj).subscribe((data:any)=>{
      alert(data);
      window.location.reload();
    })
   
  }
  deleteBook(id:any){
    this.libService.deleteBook(id).subscribe((data:any)=>{
      alert(data);
      window.location.reload();
    })
   
  }
  
  updateBook(id:any,rack_no:any){
    const obj={"ID":id,"RACK_NO":rack_no}
    console.log(obj);
    this.libService.updateBook(obj).subscribe((data:any)=>{
      alert(data);
      window.location.reload();
    })
  
  }
  clickTitle(){
    if(this.showTitle==true)
    {
    this.Title='';
    this.showTitle=false;
    }
    else
    this.showTitle=true;
    }
    clickLang(){
      if(this.showLang==true)
      {
        this.Language='';
        this.showLang=false;
      }
      else
      this.showLang=true;
    }
    clickGenre(){
      if(this.showGenre==true)
      {
        this.Genre='';
      this.showGenre=false;
      }
      else
      this.showGenre=true;
    }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  showTitle=false;
  showLang=false;
  showGenre=false;
  Title='';
  Language='';
  Genre='';  
  lists:any=[];

  constructor(private libService:LibraryService,private route:Router) { }

  ngOnInit(): void {
    this.libService.getAllBooks().subscribe((data:any)=>{
      console.log(data);     
      this.lists=data;
    })
  }
  clickTitle(){
    this.showTitle=true;
    this.showLang=false;
    this.showGenre=false;
    
    }
    clickLang(){
      this.showTitle=false;
    this.showLang=true;
    this.showGenre=false;
    }
    clickGenre(){
      this.showTitle=false;
    this.showLang=false;
    this.showGenre=true;
    console.log(this.lists);
    }

}

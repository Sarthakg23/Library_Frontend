import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-user',
  templateUrl: './book-user.component.html',
  styleUrls: ['./book-user.component.css']
})
export class BookUserComponent implements OnInit {

  lists:any=[];

  constructor(private libService:LibraryService,private route:Router) { }

  ngOnInit(): void {
    this.libService.getAllBooks().subscribe((data:any)=>{
      console.log(data);     
      this.lists=data;
    })
  }

}

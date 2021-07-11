import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-view-books-user',
  templateUrl: './view-books-user.component.html',
  styleUrls: ['./view-books-user.component.css']
})
export class ViewBooksUserComponent implements OnInit {

  lists:any=[];

  constructor(private libService:LibraryService,private route:Router) { }

  ngOnInit(): void {
    this.libService.getAllBooks().subscribe((data:any)=>{
      console.log(data);     
      this.lists=data;
    })
  }

}
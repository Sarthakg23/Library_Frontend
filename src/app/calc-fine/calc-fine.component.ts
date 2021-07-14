import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-calc-fine',
  templateUrl: './calc-fine.component.html',
  styleUrls: ['./calc-fine.component.css']
})
export class CalcFineComponent implements OnInit {

  list:any;
  constructor(private libraryService:LibraryService) { }

  ngOnInit(): void {
    this.libraryService.calcFine().subscribe(data=>{
      this.list=data;
    },
    error=>{
      alert("No Issues have fine!")
    }
    )
  }

}

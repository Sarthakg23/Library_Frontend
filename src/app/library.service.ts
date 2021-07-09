import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http:HttpClient) { }

  getAllBooks(){
    return this.http.get('https://localhost:44373/api/AllBooks');
  }
}

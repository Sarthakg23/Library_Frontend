import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http:HttpClient) { }

  getAllBooks(){
    return this.http.get('https://localhost:44373/api/AllBooks');
  }
  signIn(user:any){
    return  this.http.post('https://localhost:44373/api/User/SignIn',user);
  }
  signUp(user:any){
    return this.http.post('https://localhost:44373/api/User/SignUp',user);
  }
  addCopy(book_id:any){
    return this.http.post('https://localhost:44373/api/AddCopy',book_id);
  }
  deleteCopy(book_id:any){
    return this.http.post('https://localhost:44373/api/DeleteCopy',book_id);
  }
  deleteBook(book:any){
    return this.http.delete('https://localhost:44373/api/DeleteBook',book);
  }
}

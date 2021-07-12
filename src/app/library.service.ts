import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  baseApiUrl = "https://file.io"

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
  deleteBook(book_id:any){
    return this.http.delete('https://localhost:44373/api/DeleteBook/'+book_id);
  }
  updateBook(book_id:any){
    return this.http.put('https://localhost:44373/api/UpdateBook',book_id);
  }
  upload(file:any) {
    const formData = new FormData(); 
    formData.append("file", file, file.name);
    return this.http.post(this.baseApiUrl, formData)
  }
  addBook(book:any)
  {
    return this.http.post('https://localhost:44373/api/AddBook',book);
  }

}

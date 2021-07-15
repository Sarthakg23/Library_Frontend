import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  baseApiUrl = "https://file.io"
  constructor(private http:HttpClient) {

   }

   signIn(user:any)
   {
    return this.http.post("https://localhost:44335/api/user/signIn",user);
   }

   upload(file:any) {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData)
}

  signUp(user:any)
  {
    return this.http.post("https://localhost:44335/api/user/signUp",user);
  }

  mail(mail:any)
  {
    return this.http.post("https://localhost:44335/api/mail",mail);
  }

  addCopy(book_id:any){
    return this.http.post('https://localhost:44335/api/AddCopy',book_id);
  }
  deleteCopy(book_id:any){
    return this.http.post('https://localhost:44335/api/DeleteCopy',book_id);
  }
  deleteBook(book_id:any){
    return this.http.delete('https://localhost:44335/api/DeleteBook/'+book_id);
  }
  updateBook(book_id:any){
    return this.http.put('https://localhost:44335/api/UpdateBook',book_id);
  }

  getAllBooks(){
    return this.http.get('https://localhost:44335/api/book');
  }

  addBook(book:any)
  {
    return this.http.post('https://localhost:44335/api/AddBook',book);
  }

  getUser(id:any)
  {
    return this.http.get('https://localhost:44335/api/user/'+id);
  }

  updatePass(data:any)
  {
    return this.http.put('https://localhost:44335/api/User/UpdatePassword',data);
  }

  findemail(email:any)
  {
    return this.http.post('https://localhost:44335/api/GetUserByEmail',email);
  }

  forgotpass(data:any)
  {
    return this.http.put('https://localhost:44335/api/User/ForgotPassword',data);
  }

  calcFine()
  {
    return this.http.get('https://localhost:44335/api/issue/calculateFine');
  }

  isrequested(data:any)
  {
    return this.http.post('https://localhost:44335/api/isRequested',data);
  }

  requestbook(data:any)
  {
    return this.http.post('https://localhost:44335/api/request',data);
  }
  
  allrequest()
  {
    return this.http.get('https://localhost:44335/api/request');
  }

  approverequest(id:any)
  {
    return this.http.get('https://localhost:44335/api/request/approve/'+id);
  }

  cancelrequest(id:any)
  {
    return this.http.get('https://localhost:44335/api/request/cancel/'+id);
  }

  requestsbyUser(id:any)
  {
    return this.http.get('https://localhost:44335/api/request/user'+id);
  }

  deletereq(id:any)
  {
    return this.http.delete('https://localhost:44335/api/deletebyuser/'+id);
  }

  issuesByUser(id:any)
  {
    return this.http.get('https://localhost:44335/api/issue/user/'+id);
  }

  returnBook(id:any)
  {
    return this.http.get('https://localhost:44335/api/issue/return/'+id);
  }

  reIssue(id:any)
  {
    return this.http.get('https://localhost:44335/api/issue/reIssue/'+id);
  }

  allIssues(){
    return this.http.get('https://localhost:44335/api/allissues');
  }
}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

environment


@Injectable({
  providedIn: 'root'
})
export class ApiproviderService {

  baseApiUrl = "https://file.io";

  constructor(private http:HttpClient) { }

  forsignin(data:any){
    return this.http.post('https://localhost:44300/api/User/SignIn',data);
  }
  
  getallbooks(){
    return this.http.get('https://localhost:44300/api/AllBooks');
  }

  requestBook(data:any){
    return this.http.post('https://localhost:44300/api/requestBook',data);
  }

  allrequest(){
    return this.http.get('https://localhost:44300/api/allRequests');
  }

  cancelrequest(id:number){
    return this.http.put('https://localhost:44300/api/cancelRequest/'+id,id);
  }

  approverequest(id:number){
    return this.http.put('https://localhost:44300/api/approveRequest/'+id,id);
  }

  userbyid(id:number) {
    return this.http.post('https://localhost:44300/api/userbyid/'+id,id);
  }

  allissues(){
    return this.http.get('https://localhost:44300/api/issuelist');
  }

  isrequested(data:any){
    return this.http.post('https://localhost:44300/api/isRequested',data);
  }
  isapproved(data:any){
    return this.http.post('https://localhost:44300/api/isapproved',data);
  }

  upload(file:any) {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData);}

    addBook(book:any)
  {
     return this.http.post('https://localhost:44300/api/AddBook',book);
  }



}

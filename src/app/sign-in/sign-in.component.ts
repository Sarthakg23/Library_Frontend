import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ApiproviderService } from '../apiprovider.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private api:ApiproviderService) { }

  ngOnInit(): void {
    
  }
  onSubmit(data:any){
    this.api.forsignin(data).subscribe(d =>{
      console.log(d);
      let token=JSON.stringify(d);
      const decode=jwtDecode(token);
      console.log(decode);
      localStorage.setItem('userToken',JSON.stringify(d));
    })
  }

}

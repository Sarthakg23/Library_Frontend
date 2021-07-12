import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: any = null; // Variable to store file
    pdf:any=null;
    b_image:any=null;
  constructor(private libraryService:LibraryService) { }

  ngOnInit(): void {
  }

  onChange(event:any) {
    this.file = event.target.files[0];
  }

  onChange2(event:any) {
    this.pdf = event.target.files[0];
  }


// OnClick of button Upload
onUpload() {
  if(this.file==null)
  alert("Choose a File")
  else
  {
  const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
  if(!acceptedImageTypes.includes(this.file['type']))
    {
      alert("Select Only Image!")
      this.file=null;
    }
    else
    {
      this.loading=true;
      let reader = new FileReader();
   reader.readAsDataURL(this.file);
   reader.onload = data=> {
     //me.modelvalue = reader.result;
     console.log(reader.result);
      this.b_image=reader.result;
      this.loading=false;
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
  }
}
}

onUpload2() {
if(this.pdf==null)
  alert("Choose a File")
  else
  {
  const acceptedTypes = ['application/pdf'];
  if(!acceptedTypes.includes(this.pdf['type']))
    {
      alert("Select Only PDF!")
      this.pdf=null;
    }
    else
    {
      this.loading=true;
    console.log(this.file);
    this.libraryService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
  }
}
}

onSubmit(form:any)
{
  if(this.loading)
  alert("Uploading in Progress Please Wait!");
  else
  {
  if(this.b_image==null)
  alert("Uploading Book Image is Compulsary");
  else
  {
    if(this.pdf!=null&&this.shortLink=="")
    alert("Book Selected But not uploaded!")
    else
    {
    const obj={"TITLE":form.title,"AUTHOR":form.author,"PUBLISHER":form.publisher,"ISBN":form.isbn,"GENERE":form.genere,"B_IMAGE":this.b_image,"RACKNO":form.rackno,"E_BOOK":this.shortLink,"LANG":form.lang,"TOTAL_COPIES":form.copies,"AVAILABLE_COPIES":form.copies,"YOP":form.yop};
 console.log(obj);
 this.libraryService.addBook(obj).subscribe(data=>{alert("Book Added")})
    }
  }
}
}
}
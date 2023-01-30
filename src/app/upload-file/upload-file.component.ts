import { Component } from '@angular/core';
import { UploadFileserviceService } from '../Services/upload-fileservice.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html'
})
export class UploadFileComponent {

  file: any;
 flag:any;

  constructor(private fileService:UploadFileserviceService){
   
  }
  ngOnInit(){

  }
  onChange(event:any){
   this.file=event.target.files[0];
   console.log("event: "+event);
   if(this.file.type=="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
   {
    this.flag=true;
   }
   else{
    this.flag=false;
   }

  }

  submit(){
 
    console.log("File: ",this.file);
    console.log("correct..!")
      this.fileService.uploadFile(this.file).subscribe(data=>{
      console.log("response: ",data);

      });
    }
   
}
  



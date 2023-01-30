import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileserviceService {
  baseUrl: string = "http://localhost:8080";

  constructor(private client: HttpClient) { }


  uploadFile(file: any): Observable<any> {

    const formData = new FormData(); 
        
    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    console.log("Service data: ", file)
    return this.client.post(this.baseUrl + "/upload-Excel", formData, { responseType: 'text' });
  }

  
}

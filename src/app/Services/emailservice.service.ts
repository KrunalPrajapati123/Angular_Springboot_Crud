import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  baseUrl: string = "http://localhost:8080";

  constructor(private client: HttpClient) { }


  sendMail(emailDetails: any): Observable<any> {
    console.log("Service data: ", emailDetails)
    return this.client.post(this.baseUrl + "/sendemail", emailDetails, { responseType: 'text' });
  }

  sendOtp(email: any): Observable<any> {

    // const map: Map<string, string> = new Map<string, string>();    // if you want to send string as a map then convert to map and send
    // map.set('email', email);
    // const convMap: any = {};
    // map.forEach((val: string, key: string) => {
    //   console.log(key, " ", val)
    //   convMap[key] = val;
    // });

    console.log("Service data: ", email);
    return this.client.post(this.baseUrl + "/send-otp", email, { responseType: 'text' });
  }


}

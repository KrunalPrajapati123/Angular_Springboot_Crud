import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

   baseUrl:string= "http://localhost:8080";
  constructor(private client:HttpClient) { }

  getUsers():Observable<any>{
   return this.client.get<any[]>(this.baseUrl+"/getusers");
 }
 
 getUserById(id:number):Observable<any>{
  return this.client.get<any>(this.baseUrl+`/getuser/`+id);

 }

 updateUser(id:number,user:any):Observable<any>{
  return this.client.put(this.baseUrl+`/updateuser/${id}`,user,{responseType: 'text'});

 }

 deleteUser(id:number):Observable<any>{
  return this.client.delete(this.baseUrl+`/deleteuser/${id}`,{responseType: 'text'});
 }

 createUser(user:any):Observable<any>{
  return this.client.post(this.baseUrl+"/saveuser",user,{responseType: 'text'});
 }
 
}

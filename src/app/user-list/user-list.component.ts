import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent {

  users:any;

  constructor(private userService:UserserviceService,private router:Router){

  }

  ngOnInit(){
    this.userService.getUsers().subscribe(data=>{
      console.log("data: "+data)
      this.users=data;
    })
  }

  updateUser(id:number){
    this.router.navigate(['updateuser',id]);
  
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(data=>{
     window.location.reload();
     alert("Deleted successfully...!!!")
    })

  }
  
    
}

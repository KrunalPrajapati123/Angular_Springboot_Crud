import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styles: [
  ]
})
export class UpdateUserComponent {
// id:number;
// user:any;

// constructor(private userService:UserserviceService,private router:Router,private route:ActivatedRoute){
//   this.id=this.route.snapshot.params['id'];
// }

// ngOnInit(){

//   this.userService.getUserById(this.id).subscribe(data=>{
//     this.user=JSON.stringify(data);
//     console.log("user data: "+JSON.stringify(data) )
//     console.log("user: "+this.user);
//   })
// }


}

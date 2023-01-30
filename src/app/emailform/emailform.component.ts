import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailserviceService } from '../Services/emailservice.service';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-emailform',
  templateUrl: './emailform.component.html'
})
export class EmailformComponent {
  emailDetails: FormGroup;
  id: number;
  

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,private emailService:EmailserviceService,private userService:UserserviceService) {
    this.id = this.route.snapshot.params['id'];

    this.emailDetails = this.fb.group({
      to: ["", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      subject: ["", [Validators.required,Validators.minLength(6)]],
      msg: ["", Validators.required]
    })
  }

  ngOnInit() {
    if (this.id) {
      this.userService.getUserById(this.id).subscribe(data => {
         console.log("user: ",data.email)
        this.emailDetails.patchValue({
          to:data.email
        })
      
      })
    }
  }

  submit(){
    console.log("details: ",this.emailDetails.value);
    this.emailService.sendMail(this.emailDetails.value).subscribe(data=>{
      console.log("response: ",data);
    });
  }
}

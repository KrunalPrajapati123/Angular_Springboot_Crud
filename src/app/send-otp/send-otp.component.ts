import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmailserviceService } from '../Services/emailservice.service';

@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html'
})
export class SendOtpComponent {

  emailId: string;

  constructor(private emailService: EmailserviceService, private fb: FormBuilder) {
    this.emailId = " ";

    // this.email = this.fb.group({
    //   email: ["", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    // })
  }
  ngOnInit() {

  }

  submit(sendOtp:NgForm) {
     console.log("details: ",sendOtp.value);

     //var map = new Map().set('email',this.email);

// console.log(map);
//since the underlying type is array requires to be expanded [...map]
//console.log(JSON.stringify([...map]));

      
this.emailService.sendOtp(sendOtp.value).subscribe(data=>{
        console.log("response: ",data);
      });
  }
}

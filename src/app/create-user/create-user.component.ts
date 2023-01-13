import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styles: [
  ]
})
export class CreateUserComponent {
  createUser: FormGroup;
  id: number;
  user: any;

  constructor(private fb: FormBuilder, private userService: UserserviceService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];

    this.createUser = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      city: ["", Validators.required],
      department: ["", Validators.required]
    })
  }

  ngOnInit() {

    if (this.id) {
      this.userService.getUserById(this.id).subscribe(data => {
        this.user = JSON.stringify(data);

        this.createUser.patchValue({
          name: data.name,
          city: data.city,
          department: data.department,
        })
        console.log("createuser data: " + this.createUser);
        console.log("user data: " + JSON.stringify(data))
        console.log("user: " + this.user);
      })
    }
  }

  submit() {
    if (this.createUser.valid) {
      console.log("user data: ", this.createUser.value)

      if (this.id) {
        this.userService.updateUser(this.id, this.createUser.value).subscribe(data => {
          console.log(data);
          this.router.navigate(['/userlist']);
        })
        alert('Updated Successfully!! :-');
      }
      else {
        this.userService.createUser(this.createUser.value).subscribe(data => {
          this.router.navigate(['/userlist']);

        })
        alert('SUCCESS!! :-');
      }
    }


  }



}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { EmailformComponent } from './emailform/emailform.component';
import { HomeComponent } from './home/home.component';
import { SendOtpComponent } from './send-otp/send-otp.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path:' ', component:HomeComponent},
  {path:'createuser', component:CreateUserComponent},
  {path:'updateuser/:id', component:CreateUserComponent},
  {path:'userlist', component:UserListComponent},
  {path:'sendemail/:id', component:EmailformComponent},
  {path:'sendotp', component:SendOtpComponent},
  {path:'uploadfile', component:UploadFileComponent},
  
  
  

  {path:'**', redirectTo:' '}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

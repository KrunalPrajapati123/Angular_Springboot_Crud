import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path:' ', component:HomeComponent},
  {path:'createuser', component:CreateUserComponent},
  {path:'updateuser/:id', component:CreateUserComponent},
  {path:'userlist', component:UserListComponent},
  
  
  

  {path:'**', redirectTo:' ',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

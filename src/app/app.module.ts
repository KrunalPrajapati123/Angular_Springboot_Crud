import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustominterceptorInterceptor } from './custominterceptor.interceptor';
import { EmailformComponent } from './emailform/emailform.component';
import { MatIconModule } from '@angular/material/icon';
import { SendOtpComponent } from './send-otp/send-otp.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserListComponent,
    UpdateUserComponent,
    HomeComponent,
    EmailformComponent,
    SendOtpComponent,
    UploadFileComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass: CustominterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

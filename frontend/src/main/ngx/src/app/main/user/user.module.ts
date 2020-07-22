import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    OntimizeWebModule
  ],
  declarations: [UserHomeComponent, UserNewComponent, UserDetailComponent]
})
export class UserModule { }

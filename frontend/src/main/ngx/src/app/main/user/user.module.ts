import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    OntimizeWebModule
  ],
  declarations: [UserHomeComponent]
})
export class UserModule { }

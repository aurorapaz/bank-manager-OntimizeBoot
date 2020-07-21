import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";

import { MasterRoutingModule } from './master-routing.module';
import { MasterHomeComponent } from './master-home/master-home.component';

@NgModule({
  imports: [
    CommonModule,
    MasterRoutingModule,
    OntimizeWebModule
  ],
  declarations: [MasterHomeComponent]
})
export class MasterModule { }

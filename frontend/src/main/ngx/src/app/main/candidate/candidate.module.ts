import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateHomeComponent } from './candidate-home/candidate-home.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateNewComponent } from './candidate-new/candidate-new.component';

@NgModule({
  imports: [
    CommonModule,
    CandidateRoutingModule,
    OntimizeWebModule
  ],
  declarations: [CandidateHomeComponent, CandidateDetailComponent, CandidateNewComponent]
})
export class CandidateModule { }

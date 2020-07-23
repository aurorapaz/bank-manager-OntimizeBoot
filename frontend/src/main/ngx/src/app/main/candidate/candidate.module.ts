import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";

import { Routes, RouterModule, Router } from '@angular/router';
//import { OFileManagerModule  } from 'ontimize-web-ngx-filemanager';
import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateHomeComponent } from './candidate-home/candidate-home.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateNewComponent } from './candidate-new/candidate-new.component';
import { CandidateDetailCVComponent } from './candidate-detail-cv/candidate-detail-cv.component';

@NgModule({
  imports: [
    CommonModule,
    CandidateRoutingModule,
    
 // OFileManagerModule ,
    OntimizeWebModule
    
  ],
  declarations: [CandidateHomeComponent, CandidateDetailComponent, CandidateNewComponent, CandidateDetailCVComponent]
})
export class CandidateModule { }

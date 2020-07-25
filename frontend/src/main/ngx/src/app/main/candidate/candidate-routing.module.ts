import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateHomeComponent } from "./candidate-home/candidate-home.component";
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateNewComponent } from './candidate-new/candidate-new.component';
import { CandidateDetailCVComponent } from './candidate-detail-cv/candidate-detail-cv.component';

const routes: Routes = [{
  path : '',
  component: CandidateHomeComponent
},
{
  path: "new",
  component: CandidateNewComponent
},
{
  path: "cv/:ID",
  component: CandidateDetailCVComponent
},
{
  path: ":ID",
  component: CandidateDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }

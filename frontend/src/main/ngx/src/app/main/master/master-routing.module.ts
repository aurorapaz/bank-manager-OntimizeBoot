import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterHomeComponent } from "./master-home/master-home.component";

const routes: Routes = [{
  path : '',
  component: MasterHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }

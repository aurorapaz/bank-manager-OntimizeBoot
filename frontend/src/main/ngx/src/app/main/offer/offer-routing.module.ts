import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferHomeComponent } from "./offer-home/offer-home.component";
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { OfferNewComponent } from './offer-new/offer-new.component';

const routes: Routes = [{
  path : '',
  component: OfferHomeComponent
},
{
  path : 'new',
  component: OfferNewComponent
},
{
  path : ':ID',
  component: OfferDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }

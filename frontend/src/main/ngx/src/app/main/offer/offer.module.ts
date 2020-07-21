import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OntimizeWebModule } from "ontimize-web-ngx";
import { OfferRoutingModule } from './offer-routing.module';
import { OfferHomeComponent } from './offer-home/offer-home.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { OfferNewComponent } from './offer-new/offer-new.component';

@NgModule({
  imports: [
    CommonModule,
    OfferRoutingModule,
    OntimizeWebModule
  ],
  declarations: [OfferHomeComponent, OfferDetailComponent, OfferNewComponent]
})
export class OfferModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { CandidateModule } from './candidate/candidate.module';
import { MasterModule } from './master/master.module';
import { OfferModule } from './offer/offer.module';
import { UserModule } from './user/user.module';

export function loadHomeModule() {
  return HomeModule;
}

export function loadCandidateModule() {
  return CandidateModule;
}

export function loadMasterModule() {
  return MasterModule;
}

export function loadOfferModule() {
  return OfferModule;
}

export function loadUserModule() {
  return UserModule;
}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: loadHomeModule
      },
      {
        path: 'candidate',
        loadChildren: loadCandidateModule
      },
      {
        path: 'master',
        loadChildren: loadMasterModule
      },
      {
        path: 'offer',
        loadChildren: loadOfferModule
      },
      {
        path: 'user',
        loadChildren: loadUserModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

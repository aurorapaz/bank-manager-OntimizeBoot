import { Component, OnInit } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
//import { OFileManagerModule } from 'ontimize-web-ngx-filemanager';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-candidate-detail-cv',
  templateUrl: './candidate-detail-cv.component.html',
  styleUrls: ['./candidate-detail-cv.component.scss']
})

export class CandidateDetailCVComponent implements OnInit  {
 
  constructor( private _route:ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('ID'));
  }

  ngOnInit() {
  }

}

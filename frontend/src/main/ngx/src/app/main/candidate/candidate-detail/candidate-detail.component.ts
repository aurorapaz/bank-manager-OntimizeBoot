import { Component, OnInit,ViewChild, AfterContentChecked } from '@angular/core';
import { OIntegerInputComponent } from 'ontimize-web-ngx';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.scss']
})

export class CandidateDetailComponent implements OnInit,AfterContentChecked {
  constructor(private _route:ActivatedRoute) {console.log(this._route.snapshot.paramMap.get('ids')); }

  @ViewChild('ids') idC: OIntegerInputComponent
 // id: BigInteger
  ngAfterContentChecked(): void{
   // this.id=this.idC.getValue();
  }

   ngOnInit() {
  }
}

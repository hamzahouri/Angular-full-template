import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector		: 'app-progress',
  templateUrl   : './Progress.component.html',
  styleUrls     : ['./Progress.component.scss']
})

export class ProgressComponent implements OnInit {

   value          : number = 40;

   constructor(public translate : TranslateService) { }

   ngOnInit() {
   }
  	
   // step is used to increment the value.
  	step(val: number) {
	 	this.value += val;
  	}

}

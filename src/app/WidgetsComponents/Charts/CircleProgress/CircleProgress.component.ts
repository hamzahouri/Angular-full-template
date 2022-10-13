import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anglo-circle-progress',
  templateUrl: './CircleProgress.component.html',
  styleUrls: ['./CircleProgress.component.scss']
})
export class CircleProgressComponent implements OnInit {

	@Input() percent 			  : any;
	@Input() outerStrokeColor : string;
	@Input() circleClassName  : string;

	constructor() { }

	ngOnInit() {
	}

}

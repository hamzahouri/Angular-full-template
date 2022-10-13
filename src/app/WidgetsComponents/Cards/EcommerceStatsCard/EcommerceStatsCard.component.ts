import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anglo-ecommerce-stats-card',
  templateUrl: './EcommerceStatsCard.component.html',
  styleUrls: ['./EcommerceStatsCard.component.scss']
})
export class EcommerceStatsCardComponent implements OnInit {

	@Input() statCardData	:any;
	@Input() color 			:any;
  	@Input() label 			:any;
  	@Input() data  			:any;

	constructor() { }

	ngOnInit() {
	}

}

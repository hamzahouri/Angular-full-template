import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'anglo-doughnut-chart',
	templateUrl: './DoughnutChart.component.html',
	styleUrls: ['./DoughnutChart.component.scss']
})

export class DoughnutChartComponent implements OnInit {

	@Input() doughnutChart :any;
	
	constructor() { }

	ngOnInit() {
	}
}

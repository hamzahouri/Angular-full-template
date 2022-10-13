import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anglo-daily-sale-chart',
  templateUrl: './DailySaleChart.component.html',
  styleUrls: ['./DailySaleChart.component.scss']
})
export class DailySaleChartComponent implements OnInit {

	@Input() color :any;
   @Input() label :any;
   @Input() data  :any;

   // Daily sale line chart option
	public lineChartOptions :any = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxes: [{
				display: true,
				ticks: {
					min: 0
				},
				gridLines: {
					display: true,
					drawBorder: false
				}
			}],
			yAxes: [{
				display: false,
				ticks: {
					suggestedMin: 0,
					beginAtZero: true
				}
			}]
		}, 
		legend: {
			display: false
		}
	}

	constructor() { }

	ngOnInit() {	
	}
	
}

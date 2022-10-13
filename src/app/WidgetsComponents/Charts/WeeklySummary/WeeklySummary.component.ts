import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anglo-weekly-summary',
  templateUrl: './WeeklySummary.component.html',
  styleUrls: ['./WeeklySummary.component.scss']
})
export class WeeklySummaryComponent implements OnInit {

  @Input() color :any;
  @Input() label :any;
  @Input() data  :any;

	public barChartOptions :any = {
		responsive: true,
		maintainAspectRatio: false,
		maxBarThickness: 0,
		scales: {
			xAxes: [{
				datasets: [{
					barThickness: 15,
				}],
				display: true,
				gridLines: {
					display: false,
					drawBorder: true,
				}
			}],
			yAxes: [{
				datasets: [{
					barThickness: 15,
				}],
				display: true,
				ticks: {
					display: true,
					min:5,
					max:20  
				},
				gridLines: {
					display: false,
					drawBorder: true,
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

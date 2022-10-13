import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'anglo-line-chart',
  templateUrl: './LineChart.component.html',
  styleUrls: ['./LineChart.component.scss']
})
export class LineChartComponent implements OnInit {
	
	@Input() color :any;
   @Input() label :any;
   @Input() data  :any;

	public lineChartOptions :any = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true,
					display: false
				},
				gridLines: {
					display: false,
					drawBorder: false,
					drawTicks: false
				},
				display: false
			}],
			xAxes: [{
				ticks: {
					display: false,
					beginAtZero: true
				},
				gridLines: {
					display: true,
					drawBorder: false
				},
				display: false
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


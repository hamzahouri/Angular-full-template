import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'anglo-horizontal-bar',
	templateUrl: './HorizontalBar.component.html',
	styleUrls: ['./HorizontalBar.component.scss']
})
export class HorizontalBarComponent implements OnInit {

  @Input() color :any;
  @Input() label :any;
  @Input() data  :any;

  	//traffic channel horizontal bar chart options
	public barChartOptions :any = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxes: [{
				datasets: [{
					barThickness: 12,
				}],
				display: true,
				gridLines: {
					display: true,
					drawBorder: false,
				}
			}],
			yAxes: [{
				datasets: [{
					barThickness: 12,
				}],
				display: true,
				ticks: {
					min:0,
					max:9  
				},
				gridLines: {
					display: false,
					drawBorder: false,
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
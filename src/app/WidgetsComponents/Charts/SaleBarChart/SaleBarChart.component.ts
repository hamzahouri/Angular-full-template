import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anglo-sale-bar-chart',
  templateUrl: './SaleBarChart.component.html',
  styleUrls: ['./SaleBarChart.component.scss']
})
export class SaleBarChartComponent implements OnInit {

	@Input() color 		:any;
	@Input() label 		:any;
	@Input() data			:any;
	@Input() xAxisLabel  :boolean;
	barChartOptions 		:any ; 

	constructor() { 
	}

	ngOnInit() {
		this.barChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxes: [{
				stacked: true,
				datasets: [{
					barThickness: 20,
				}],
				display: this.xAxisLabel,
				ticks: {
               padding: 10
            },
				gridLines: {
					display: false,
					drawBorder: false
				}
			}],
			yAxes: [{
				stacked: true,
				datasets: [{
					barThickness: 20,
				}],
				display: false,
				ticks: {
               display: false
            },
				gridLines: {
					display: false,
					drawBorder: false
				}  
			}]
		},
		legend: {
         display: false
      }
	}
	}
	
}
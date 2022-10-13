import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'anglo-visitor-linechart',
	templateUrl: './VisitorLineChart.component.html',
	styleUrls: ['./VisitorLineChart.component.scss']
	})

export class VisitorLineChartComponent implements OnInit {
 
	@Input() color :any;
   @Input() label :any;
   @Input() data  :any;

   //line chart options
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
		   }],
		   xAxes: [{
		      ticks: {
		         display: true,
		         beginAtZero: true
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

	constructor() { }

	ngOnInit() {	
	}
	
}



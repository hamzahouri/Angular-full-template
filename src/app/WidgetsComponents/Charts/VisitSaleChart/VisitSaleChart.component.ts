import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anglo-visit-sale-chart',
  templateUrl: './VisitSaleChart.component.html',
  styleUrls: ['./VisitSaleChart.component.scss']
})
export class VisitSaleChartComponent implements OnInit {

	@Input() color :any;
   @Input() label :any;
   @Input() data  :any;

   //line chart options
	public lineChartOptions :any = {
		responsive: true,
		scales: {
         yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false
            },
            ticks: {
              stepSize: 500
            }
          }],
         xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            }
         }]
      },
		tooltip: {
			enabled: true
		},
		legend: {
			display: false
		},
	}

	constructor() { }

	ngOnInit() {	
	}
	
}


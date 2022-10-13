import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anglo-product-sale-chart',
  templateUrl: './ProductSaleChart.component.html',
  styleUrls: ['./ProductSaleChart.component.scss']
})
export class ProductSaleChartComponent implements OnInit {

	@Input() color :any;
   @Input() label :any;
   @Input() data  :any;

	public lineChartOptions :any = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					gridLines: {
						display: true,
						drawBorder: false
					},
					ticks: {
						stepSize: 50
					}
				}
			],
			xAxes: [
				{
					gridLines: {
						display: false,
						drawBorder: false
					}
				}
			]
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


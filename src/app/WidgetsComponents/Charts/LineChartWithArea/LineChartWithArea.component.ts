import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anglo-line-chart-with-area',
  templateUrl: './LineChartWithArea.component.html',
  styleUrls: ['./LineChartWithArea.component.scss']
})
export class LineChartWithAreaComponent implements OnInit {

	@Input() color :any;
   @Input() label :any;
   @Input() data  :any;

   // line chart options
	public lineChartOptions :any = {
		responsive: true,
      maintainAspectRatio: false,
		 scales: {
         yAxes: [
            {
               gridLines: {
                  display: false,
                  drawBorder: false
               },
               ticks: {
                  display: false
               },
               display: false
            }
         ],
         xAxes: [
            {
               gridLines: {
                  display: false,
                  drawBorder: false
               },
               ticks: {
                  display: false
               },
               display: false
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


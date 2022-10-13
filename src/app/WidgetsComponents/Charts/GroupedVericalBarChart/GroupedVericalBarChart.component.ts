import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'anglo-grouped-verical-bar-chart',
  templateUrl: './GroupedVericalBarChart.component.html',
  styleUrls: ['./GroupedVericalBarChart.component.scss']
})
export class GroupedVericalBarChartComponent implements OnInit {

  @Input() color :any;
  @Input() label :any;
  @Input() data  :any;

  //Campaign Performance vertical bar chart options
   public barChartOptions :any = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
         titleSpacing: 6,
         cornerRadius: 5
      },
      scales: {
         xAxes: [{
            stacked: false,
            datasets: [{
              barThickness: 15,
            }],
            display: true,
            ticks: {
               fontColor: '#657786'
            },
            gridLines: {
               display: false,
               drawBorder: false,
               color: '#EAEAEA',
            }
         }],
         yAxes: [{
            stacked: false,
            datasets: [{
              barThickness: 15,
            }],
            display: true,
            ticks: {
               display: true,
               min:100,
               max:1000,  
               fontColor: '#657786'  
            },
            gridLines: {
               display: true,
               drawBorder: false,
               color: '#EAEAEA'
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

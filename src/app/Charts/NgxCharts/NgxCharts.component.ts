import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'NgxCharts',
  templateUrl: './NgxCharts.component.html',
  styleUrls: ['./NgxCharts.component.scss']
})

export class NgxChartsComponent implements OnInit {

   view: any;
   // options
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend = true;
   showXAxisLabel = true;
   xAxisLabel = 'Country';
   showYAxisLabel = true;
   yAxisLabel = 'Population';

   // pie
   showLabels = true;
   explodeSlices = false;
   doughnut = false;

   // line, area
   autoScale = true;

   colorScheme = {
      domain: ['#448aff', '#43a047', '#e65100']
   };
   
   single: any[] =[
      {
         "name": "Germany",
         "value": 8940000
      },
      {
         "name": "USA",
         "value": 5000000
      },
      {
         "name": "France",
         "value": 7200000
      }
   ];

   multi: any[] =[
      {
         "name": "Germany",
         "series": [
            {
               "name": "2010",
               "value": 7300000
            },
            {
               "name": "2011",
               "value": 8940000
            }
         ]
      },
      {
         "name": "USA",
         "series": [
            {
               "name": "2010",
               "value": 7870000
            },
            {
               "name": "2011",
               "value": 8270000
            }
         ]
      },
      {
         "name": "France",
         "series": [
            {
               "name": "2010",
               "value": 5000002
            },
            {
               "name": "2011",
               "value": 5800000
            }
         ]
      }
   ];
 
   constructor() {
      this.view = [window.innerWidth/2.79, 300];
   }

   ngOnInit() {
   }
  
   onSelect(event) {
   }

   onResize(event) { 
      this.view = [event.target.innerWidth, 300];
   }
}

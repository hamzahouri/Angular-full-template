import { Component, OnInit, ViewChild} from '@angular/core';
import { ChartReadyEvent } from 'ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { ChartMouseOverEvent } from 'ng2-google-charts';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-google-charts',
  templateUrl: './GoogleCharts.component.html',
  styleUrls: ['./GoogleCharts.component.scss']
})
export class GoogleChartsComponent implements OnInit {

   @ViewChild('cchart') cchart;

   public selectEvent: ChartSelectEvent;

   public columnChartData:any =  {
      chartType: 'ColumnChart',
      dataTable: [
         ['Country', 'Performance', 'Profits'],
         ['Germany', 700, 1200],
         ['USA', 300, 600],
         ['Brazil', 400, 500],
         ['Canada', 500, 1000],
         ['France', 600, 1100],
         ['RU', 800, 1000]
      ],
      options: {title: 'Countries',
      colors: ['#448aff','#43a047','#ff5723']}
   };

   public columnChartData2:any =  {
      chartType: 'ColumnChart',
      dataTable: [
        ['Country', 'Performance', 'Profits'],
        ['Germany', 0, 0],
        ['USA', 0, 0],
        ['Brazil', 0, 0],
        ['Canada', 0, 0],
        ['France', 0, 0],
        ['RU', 0, 0]
      ],
      options: {
        title: 'Countries',
        colors: ['#0066eb','#00caac','#ff5723'],
        animation:{
          duration: 1000,
          easing: 'out',
          startup: true
        }
      }
   };

   public pieChartData:any =  {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ],
      options: {
        title: 'Tasks',
        colors: ['#43a047','#448aff','#ff5723'],
        slices: {
          0: {
          offset: 0.3
        },
        1: {
        offset: 0.2
        }
        }
      }
   };

   public gaugeChartData:any =  {
      chartType: 'Gauge',
      dataTable: [
        ['Label', 'Value'],
        ['Value', 1.78]
      ],
      options: {
        animation: {easing: 'out'},
        colors: ['#0066eb','#00caac','#ff5723'],
        width: 150, height: 150,
        greenFrom: 1, greenTo: 4,
        minorTicks: 5,
        min: 0, max: 5,
        majorTicks: ['0', '1', '2', '3', '4', '5'],
        greenColor: '#00caac'
      }
   };

   public scatterChartData :any = {
      chartType: 'ScatterChart',
      dataTable: [
        ['Age', 'Weight'],
        [ 8,      12],
        [ 4,      5.5],
        [ 11,     14],
        [ 4,      5],
        [ 3,      3.5],
        [ 6.5,    7]
      ],
      options: {
        title: 'Age vs. Weight comparison',
        colors: ['#448aff'],
        hAxis: {title: 'Age', minValue: 0, maxValue: 15},
        vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
        legend: 'none'
      }
   };

   public timelineChartData:any =  {
      chartType: 'Timeline',
      dataTable: [
        ['Name', 'From', 'To'],
        [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
        [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
        [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
      ],
      options: {
        colors: ['#448aff','#c62828', '#43a047']
      }
   }

   public lineChartData:any =  {
      chartType: 'LineChart',
      dataTable: [
        ['Year', 'Sales', 'Expenses'],
        ['2004',  1000,      400],
        ['2005',  1170,      460],
        ['2006',  660,       1120],
        ['2007',  1030,      540]
      ],
      options: {title: 'Company Performance',
      colors: ['#448aff','#43a047','#ff5723'],}
   };

   public comboChartData:any =  {
      chartType: 'ComboChart',
      dataTable: [
        ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
        ['2004/05',  165,      938,         522,             998,           450,      614.6],
        ['2005/06',  135,      1120,        599,             1268,          288,      682],
        ['2006/07',  157,      1167,        587,             807,           397,      623],
        ['2007/08',  139,      1110,        615,             968,           215,      609.4],
        ['2008/09',  136,      691,         629,             1026,          366,      569.6]
      ],
      options: {
        title : 'Monthly Coffee Production by Country',
        colors: ['#448aff','#43a047','#FFB300'],
        vAxis: {title: 'Cups'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
      }
   };

   public tableChartData:any =  {
      chartType: 'Table',
      dataTable: [
        ['Department', 'Revenues', 'Another column'],
        ['Shoes', 10700, -100],
        ['Sports', -15400, 25],
        ['Toys', 12500, 40],
        ['Electronics', -2100, 889],
        ['Food', 22600, 78],
        ['Art', 1100, 42]
      ],
      formatters: [
         {
            columns: [1, 2],
            type: 'NumberFormat',
            options: {
               prefix: '&euro;', negativeColor: 'red', negativeParens: true
            }
         }
      ],
      options: {title: 'Countries',
      colors: ['#0066eb','#00caac','#ff5723'],
      allowHtml: true}
   };

   public geoChartData:any =  {
      chartType: 'GeoChart',
      dataTable: [
        ['City',   'Population', 'Area'],
        ['Rome',      2761477,    1285.31],
        ['Milan',     1324110,    181.76],
        ['Naples',    959574,     117.27],
        ['Turin',     907563,     130.17],
        ['Palermo',   655875,     158.9],
        ['Genoa',     607906,     243.60],
        ['Bologna',   380181,     140.7],
        ['Florence',  371282,     102.41],
        ['Fiumicino', 67370,      213.44],
        ['Anzio',     52192,      43.43],
        ['Ciampino',  38262,      11]
      ],
      options: {
        region: 'IT',
        colors: ['#FFB300','#00caac','#ff5723'],
        displayMode: 'markers',
        colorAxis: {colors: ['#FFB300', '#0066eb']}
      }
   };

   constructor() { }

   ngOnInit() {
   }

   public changeData2():void {
      let dataTable = this.cchart.wrapper.getDataTable();
      for (let i = 0; i < 6; i++) {
        dataTable.setValue(i, 1, Math.round(Math.random() * 1000));
        dataTable.setValue(i, 2, Math.round(Math.random() * 1000));
      }
      this.cchart.redraw();
   }

   public changeData():void {
      // forces a reference update (otherwise angular won't detect the change
      this.columnChartData = Object.create(this.columnChartData);
      for (let i = 1; i < 7; i++) {
        this.columnChartData.dataTable[i][1] = Math.round(
          Math.random() * 1000);
        this.columnChartData.dataTable[i][2] = Math.round(
          Math.random() * 1000);
      }
   }

   public changeChartType():void {
      // forces a reference update (otherwise angular doesn't detect the change)
      this.columnChartData = Object.create(this.columnChartData);
      if(this.columnChartData.chartType == 'ColumnChart')
        this.columnChartData.chartType = 'PieChart';
      else
        this.columnChartData.chartType = 'ColumnChart';
   }

   public ready(event: ChartReadyEvent) {
   }

   public error(event: ChartErrorEvent) {
   }

   public select(event: ChartSelectEvent) {
      this.selectEvent = event;
   }

   public mouseOver(event: ChartMouseOverEvent) {
      console.log('bb: ' + JSON.stringify(event.boundingBox));
      console.log('pos: ' + JSON.stringify(event.position));
      console.log('type: ' + JSON.stringify(event.columnType));
      console.log('label: ' + JSON.stringify(event.columnLabel));
      console.log('value: ' + JSON.stringify(event.value));
   }

}

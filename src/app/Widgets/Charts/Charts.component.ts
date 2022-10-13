import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EChartsOption } from 'echarts';

import { CoreService } from '../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-charts',
  templateUrl: './Charts.component.html',
  styleUrls: ['./Charts.component.scss']
})

export class ChartsComponent implements OnInit {

   isReloadChildComponent : any ={
      trafficShowSpinner     : false,
      dailySaleShowSpinner   : false,
      campignShowSpinner     : false,
      visitSaleShowSpinner   : false,
      totalEarnShowSpinner   : false,
      weeklyShowSpinner      : false,
      productSaleShowSpinner : false,
      currentVisitorSpinner  : false
   }

   isVisibleChildComponent : any = {
      singleSalesChartVisible    : true,
      trafficChannelVisible      : true,
      campaignVisible            : true,
      weeklySummaryVisible       : true,
      productSalesSummaryVisible : true,
      visitStatisticsVisible     : true,
      totalEarningsVisible       : true,
      currentVisitorVisible      : true
   };

   /*
      ----------Daily Sales Chart  ----------
   */

   // line chart label
   public dailyChartLabel :string[] = ['9', '10', '11', '12', '13', '14', '15'];

   //line chart data
   public dailyChartData : any[] = [
      {data: [100, 200, 125, 250, 200, 150, 200],label:"Daily Sales"}
   ];

   //line chart color
   public dailyChartColors: Array <any> = [
      {
         fill: false,
         lineTension: 0,
         fillOpacity: 0.3,
         pointHoverBorderWidth: 4,
         borderWidth:4,
         pointHoverRadius: 7,
         pointBorderWidth: 3,
         pointRadius: 6,
         backgroundColor: '#43a047',
         borderColor: '#43a047',
         pointBackgroundColor: '#43a047',
         pointBorderColor:'#FFFFFF',
         pointHoverBackgroundColor: '#43a047',
         pointHoverBorderColor: '#43a047'
      }
   ];

   /*
      ---------- Traffic Channel Chart  ----------
   */

   // bar chart label
   public trafficChartLabel :string[] = ['Direct User', 'Referral', 'Facebook', 'Google', 'Instagram'];

   //bar chart data
   public trafficChartData : any[] = [
      {data: [8.5, 6.75, 5.5, 7, 4.75],label:"Direct User"}
   ];

   //bar chart color
   public trafficChartColors: Array <any> = [
      {
         backgroundColor: '#43a047',
         hoverBackgroundColor: '#43a047',
         borderWidth: 1,
         borderColor: '#43a047',
         hoverBorderColor: '#43a047'
      }
   ];

   /*
      ---------- Campaign Performance Chart ----------
   */

   // bar chart label
   public campaignChartLabel :string[] = ["12:00 AM", "4:00 AM", "8:00 AM", "12:00 PM", "16:00 PM"]

   //bar chart data
   public campaignChartData : any[] = [
      {data: [600, 900, 660, 750, 800], label: 'Website view'},
      {data: [400, 550, 400, 400, 450], label: 'Email Subscription'}
   ];

   //bar chart color
   public campaignChartColors: Array <any> = [
      {
         backgroundColor: '#448aff',
         borderWidth: 1,
         borderColor:'#448aff',
         hoverBackgroundColor: '#448aff',
         hoverBorderColor: '#448aff',

      },
      {
         backgroundColor: '#FFB300',
         borderWidth: 1,
         borderColor:'#FFB300',
         hoverBackgroundColor: '#FFB300',
         hoverBorderColor: '#FFB300',
      }
   ];

   days: any[] = [
      {value: '0', viewValue: 'Yesterday'},
      {value: '1', viewValue: 'Last Week'},
      {value: '2', viewValue: 'Last Month'},
      {value: '3', viewValue: 'Last 6 Months'}
   ];

   /*
      ---------- Visit & Sales Statistics Chart ----------
   */

   //line chart label
   public visitChartLabel :string[] = ['January 2014', 'January 2015', 'January 2016', 'January 2017'];

   //line chart data
   public visitChartData : any[] = [
      {data: [0, 1000, 1250, 1000],label:"Sales"},
      {data: [750, 900, 450, 500],label:"Visits"}
   ];

   //line chart color
   public visitChartColors: Array <any> = [
      {
         lineTension: 0.5,
         borderColor: "#1E3C72",
         borderWidth: 5,
         pointRadius: 0,
         fill: false
      },
      {
         label: 'Visits',
         lineTension: 0.5,
         borderColor: "#FFB300",
         borderWidth: 5,
         pointBackgroundColor: "#FFB300",
         pointBorderColor: "#FFB300",
         pointHoverBackgroundColor: "#FFB300",
         pointHoverBorderColor: "#FFB300",
         pointBorderWidth: 5,
         pointHoverRadius: 5,
         pointHoverBorderWidth: 1,
         pointRadius: 0,
         fill: false
      }
   ];

   /*
      ---------- Total Earnings Chart ----------
   */

   //line chart label
   public earningChartLabel :string[] = ['1', '2', '3', '4', '5','6', '7', '8', '9', '10', '11', '12'];

   //line chart data
   public earningChartData : any[] = [
      {data: [2200, 2100, 1950, 1600, 800, 350, 250, 650, 1200, 1900, 2900, 3100],label:"Open Rate"},
      {data: [500, 1100, 1600, 2000, 2500, 2600, 2300, 1900, 1500, 1100, 750, 850],label:"Recurring Payments"}
   ];

   //line chart color
   public earningChartColors: Array <any> = [
      {
         lineTension: 0.4,
         borderColor: '#e65100',
         pointBorderColor: '#e65100',
         pointBorderWidth: 2,
         pointRadius: 7,
         fill: false,
         pointBackgroundColor: '#FFFFFF',
         borderWidth: 3,
      },
      {
         lineTension: 0.4,
         borderColor: '#448aff',
         pointBorderColor: '#448aff',
         pointBorderWidth: 2,
         pointRadius: 7,
         fill: false,
         pointBackgroundColor: '#FFFFFF',
         borderWidth: 3,
      }
   ];

   /*
      ---------- Weekly Summary Chart ----------
   */

   // bar chart label
   public weeklyChartLabel :string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

   //bar chart data
   public weeklyChartData : any[] = [
      {data: [12, 7, 14, 9, 14, 9, 17],label:"Series A"}
   ];

   //bar chart color
   public weeklyChartColors: Array <any> = [
      {
         backgroundColor: '#1E3C72',
         hoverBackgroundColor: '#1E3C72',
      }
   ];

   /*
      ---------- Product Sales  ----------
   */

   // line chart label
   public productChartLabel :string[] =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

   //line chart data
   public productChartData : any[] = [
      {data: [80, 80, 160, 130, 50, 140, 100],label:"Data"},
      {data: [90, 140, 50, 120, 160, 90, 90],label:"Data"}
   ];

   //line chart color
   public productChartColors: Array <any> = [
      {
         fill: true,
         lineTension: 0,
         pointRadius: 0,
         backgroundColor: '#448aff',
      },
      {
         fill: true,
         lineTension: 0,
         pointRadius: 0,
         backgroundColor: '#FFB70F',
      }
   ];

   constructor(public translate : TranslateService,
               private coreService : CoreService) { }

   ngOnInit() { }

   /*
    * getCloseValue method close the particular component.
    */
   getCloseValue(event, type){
      switch (type) {
         case "sales":
            this.isVisibleChildComponent.singleSalesChartVisible = false
            break;

         case "trafficChannel":
            this.isVisibleChildComponent.trafficChannelVisible = false
            break;

         case "campaign":
            this.isVisibleChildComponent.campaignVisible = false
            break;

         case "weeklySummary":
            this.isVisibleChildComponent.weeklySummaryVisible = false
            break;

         case "productSalesSummary":
            this.isVisibleChildComponent.productSalesSummaryVisible = false
            break;

         case "visitStatistics":
            this.isVisibleChildComponent.visitStatisticsVisible = false
            break;

         case "totalEarnings":
            this.isVisibleChildComponent.totalEarningsVisible = false
            break;

         case "currentVisitor":
            this.isVisibleChildComponent.currentVisitorVisible = false
            break;

         default:
            break;
      }
   }

   /*
    * showFullScreen is show the element in fullscreen .
    */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }

   /*
    * spinnerShow method reload the particular component.
    */
   spinnerShow(id){
      switch (id) {
         case "dailySales":
            this.isReloadChildComponent.dailySaleShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.dailySaleShowSpinner = false;
            }, 3000);

            break;

         case "trafficChannel":
            this.isReloadChildComponent.trafficShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.trafficShowSpinner = false;
            }, 3000);
            break;

         case "campignPerformace":
            this.isReloadChildComponent.campignShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.campignShowSpinner = false;
            }, 3000);
            break;

         case "visitSale":
            this.isReloadChildComponent.visitSaleShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.visitSaleShowSpinner = false;
            }, 3000);
            break;

         case "totalEarning":
            this.isReloadChildComponent.totalEarnShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.totalEarnShowSpinner = false;
            }, 3000);
            break;


         case "pieGridChart":
            this.isReloadChildComponent.pieGridShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.pieGridShowSpinner = false;
            }, 3000);
            break;

         case "weeklySummary":
            this.isReloadChildComponent.weeklyShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.weeklyShowSpinner = false;
            }, 3000);
            break;

         case "productSale":
            this.isReloadChildComponent.productSaleShowSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.productSaleShowSpinner = false;
            }, 3000);
            break;

         case "currentVisitor":
            this.isReloadChildComponent.currentVisitorSpinner = true;
            setTimeout(() => {
               this.isReloadChildComponent.currentVisitorSpinner = false;
            }, 3000);
            break;


         default:
            break;
      }
   }
}


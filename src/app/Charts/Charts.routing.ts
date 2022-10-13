import { Routes } from '@angular/router';

import { NgxChartsComponent } from './NgxCharts/NgxCharts.component';
import { NgxEchartsComponent } from './NgxEcharts/NgxEcharts.component';
import { GoogleChartsComponent } from './GoogleCharts/GoogleCharts.component';

export const ChartsRoutes: Routes = [{
      path: '',
      redirectTo: 'ngx-charts',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'ngx-charts',
            component: NgxChartsComponent
         },
         {
            path: 'ngx-echarts',
            component: NgxEchartsComponent
         },
         {
            path: 'google-charts',
            component: GoogleChartsComponent
         }
      ]
   }
];

import { Routes } from '@angular/router';

import { ECommerceComponent } from './E-Commerce/E-Commerce.component';
import { WebAnalyticsComponent } from './WebAnalytics/WebAnalytics.component';

export const DashboardRoutes: Routes = [{
      path: '',
      redirectTo: 'ecommerce',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'ecommerce',
            component: ECommerceComponent
         }, 
         {
            path: 'web-analytics',
            component: WebAnalyticsComponent
         }
      ]
   }
];

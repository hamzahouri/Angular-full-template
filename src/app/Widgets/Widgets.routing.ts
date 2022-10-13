import { Routes } from '@angular/router';

import { UserComponent } from './User/User.component';
import { ChartsComponent } from './Charts/Charts.component';


export const WidgetsRoutes: Routes = [
   {
      path: '',
      redirectTo: 'user',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'user',
            component: UserComponent
         },
         {
            path: 'charts',
            component: ChartsComponent
         }
      ]
   }
];

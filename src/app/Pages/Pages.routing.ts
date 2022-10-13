import { Routes } from '@angular/router';

import { BlogComponent } from './Blog/Blog.component';
import { GalleryComponent } from './Gallery/Gallery.component';
import { Pricing1Component } from './Pricing1/Pricing1.component';
import { Pricing2Component } from './Pricing2/Pricing2.component';
import { BlankComponent } from './Blank/Blank.component';

export const PagesRoutes: Routes = [
   {
      path: '',
      redirectTo: 'blog',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'blog',
            component: BlogComponent
         },
          {
            path: 'gallery',
            component: GalleryComponent
         },
         {
            path: 'pricing-1',
            component: Pricing1Component 
         },
         {
            path: 'pricing-2',
            component: Pricing2Component 
         },
          {
            path: 'blank',
            component: BlankComponent
         }
      ]
   }
];

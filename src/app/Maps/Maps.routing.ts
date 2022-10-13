import { Routes } from '@angular/router';
import { GoogleMapsComponent } from './GoogleMaps/GoogleMaps.component';
import { LeafletMapComponent } from './LeafletMap/LeafletMap.component';
import { JvectorMapComponent } from './JvectorMap/JvectorMap.component';

export const MapsRoutes: Routes = [{
      path: '',
      redirectTo: 'google-maps',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'google-maps',
            component: GoogleMapsComponent
         },
         {
            path: 'leaflet-maps',
            component: LeafletMapComponent
         },
         {
            path: 'jvector-map',
            component: JvectorMapComponent
         }
      ]
   }
];

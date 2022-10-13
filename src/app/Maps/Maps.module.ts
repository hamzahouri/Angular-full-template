import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { GoogleMapsComponent } from './GoogleMaps/GoogleMaps.component';
import { LeafletMapComponent } from './LeafletMap/LeafletMap.component';
import { MapsRoutes } from './Maps.routing';
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';
import { JvectorMapComponent } from './JvectorMap/JvectorMap.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(MapsRoutes),
		WidgetsComponentsModule,
		AgmCoreModule,
		MatCardModule,
		TranslateModule,
		AgmCoreModule.forRoot({
         apiKey: 'AIzaSyC9PnuRk42kbCPMOvsfHpn40r5SoyN38zI',
         libraries: ['places']
      }),
		MatCardModule,
		LeafletModule
	],
	declarations: [GoogleMapsComponent, LeafletMapComponent, JvectorMapComponent]
})

export class MapsModule { }

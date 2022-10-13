import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';

import { CalendarRoutes } from './Calendar.routing';
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';
import { CalendarComponent } from './Calendar/Calendar.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(CalendarRoutes),
		WidgetsComponentsModule,
		CalendarModule.forRoot({
			provide: DateAdapter,
			useFactory: adapterFactory
		}),
		MatIconModule,
		MatCardModule,
		FlexLayoutModule,
		MatButtonModule,
		TranslateModule
	],
		declarations: [CalendarComponent]
})

export class Calendar_Module { 
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatLineModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TranslateModule } from '@ngx-translate/core';
// import { DeviceDetectorModule } from 'ngx-device-detector';

import { InboxRoutes } from './Inbox.routing';
import { EmailsService } from '../Services/Emails.service';
import { InboxComponent } from './Inbox/Inbox.component';
import { EmailListingComponent } from './EmailListing/EmailListing.component';
import { EmailDetailComponent } from './EmailDetail/EmailDetail.component';
import { SidebarComponent } from './Sidebar/Sidebar.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(InboxRoutes),
		FlexLayoutModule,
		MatCheckboxModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatDividerModule,
		MatSidenavModule,
		MatListModule,
		MatLineModule,
		MatTooltipModule,
		MatFormFieldModule,
		MatInputModule,
		PerfectScrollbarModule,
		MatMenuModule,
		TranslateModule,
		// DeviceDetectorModule.forRoot()
	],
	declarations: [InboxComponent, SidebarComponent,EmailListingComponent, EmailDetailComponent],
	providers:[
		EmailsService
	]
})

export class InboxModule { }

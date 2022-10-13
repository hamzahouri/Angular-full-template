import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BidiModule } from '@angular/cdk/bidi';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ToastrModule } from 'ngx-toastr';
// import { DeviceDetectorModule } from 'ngx-device-detector';
import { MenuToggleModule } from './Core/menu-toggle.module';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { AppRoutes } from "./app-routing";

import { VerticalLayoutComponent }   from './Layouts/VerticalLayout/VerticalLayout.component';

import { MenuItems } from './Core/MenuItems/MenuItems';
import { CoreService } from './Services/GlobalService/Core.service';
import { MenuListItemComponent } from './Shared/MenuListItem/MenuListItem.component';
import { HeaderComponent } from './Shared/Header/Header.component';
import { SidebarComponent } from './Shared/Sidebar/Sidebar.component';
import { AppLogoComponent } from './Shared/AppLogo/AppLogo.component';
import { WidgetsComponentsModule } from './WidgetsComponents/WidgetsComponents.module';

import { AuthService } from './Services/Auth.service';
import { AuthGuard } from './Core/Guards/auth.guard';

export const firebaseConfig = {
	apiKey				: "AIzaSyAUFEc78X3b4wwIae46ctFSSee7eE-0VIs",
	authDomain			: "anglo-85c6c.firebaseapp.com",
	databaseURL			: "https://anglo-85c6c.firebaseio.com",
	projectId			: "anglo-85c6c",
	storageBucket		: "anglo-85c6c.appspot.com",
	messagingSenderId : "37552039309"
}

/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
	imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				ReactiveFormsModule,
				RouterModule.forRoot(AppRoutes, { relativeLinkResolution: 'legacy' }),
				HttpClientModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: createTranslateLoader,
						deps: [HttpClient]
					}
				}),
				PerfectScrollbarModule,
				FlexLayoutModule,
				// AngularFontAwesomeModule,
				MatNativeDateModule,
				MatProgressSpinnerModule,
				MatExpansionModule,
				MatSnackBarModule,
				MatTooltipModule,
				MatChipsModule,
				MatTabsModule,
				MatBadgeModule,
				MatProgressBarModule,
				MatCheckboxModule,
				MatRadioModule,
				MatDialogModule,
				MatGridListModule,
				MatCardModule,
				MatSliderModule,
				MatInputModule,
				MatTableModule,
				MatSelectModule,
				MatButtonModule,
				MatMenuModule,
				MatToolbarModule,
				MatSidenavModule,
				MatIconModule,
				MatListModule,
            MenuToggleModule,
				WidgetsComponentsModule,
	    		AngularFireModule.initializeApp(firebaseConfig),
    			AngularFireAuthModule,
    			BidiModule,
    			LoadingBarRouterModule,
    			ToastrModule.forRoot({
				    timeOut: 2000,
				    preventDuplicates: true
				  }
    			),
    			// DeviceDetectorModule.forRoot()
	],
	declarations: [
						AppComponent,
						VerticalLayoutComponent,
						MenuListItemComponent,
						HeaderComponent,
						SidebarComponent,
						AppLogoComponent
	],
	bootstrap: [AppComponent],
	providers:[
				MenuItems,
				CoreService,
				AuthService,
		      {
		         provide: PERFECT_SCROLLBAR_CONFIG,
		         useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		      },
		      AuthGuard
	]
})

export class EKAAppModule { }

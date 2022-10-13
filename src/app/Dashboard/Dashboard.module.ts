import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DashboardRoutes } from './Dashboard.routing';
import { ECommerceComponent } from './E-Commerce/E-Commerce.component';
import { WebAnalyticsComponent } from './WebAnalytics/WebAnalytics.component';

import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
};

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(DashboardRoutes),
      FlexLayoutModule,
      TranslateModule,
      MatFormFieldModule,
      MatTooltipModule,
      MatInputModule,  
      DropzoneModule,
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      WidgetsComponentsModule,
      MatCardModule,
      MatTabsModule,
      MatProgressSpinnerModule
   ],
   declarations: [ 
      ECommerceComponent, 
      WebAnalyticsComponent
   ],
   providers: [
      {
         provide: DROPZONE_CONFIG,
         useValue: DEFAULT_DROPZONE_CONFIG
      }
   ],
})

export class DashboardModule {}

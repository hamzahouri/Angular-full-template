import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropzoneModule, DROPZONE_CONFIG, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MatCardModule } from '@angular/material/card';

import { DropzoneRoutes }  from './Dropzone.routing';
import { DropzoneComponent } from './Dropzone/Dropzone.component';
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   // Change this to your upload POST address:
   url: 'https://httpbin.org/post'
};

@NgModule({
   imports: [
	   CommonModule,
      MatCardModule,
	   RouterModule.forChild(DropzoneRoutes),
	   DropzoneModule,
      WidgetsComponentsModule
   ],

   providers: [
      {
         provide: DROPZONE_CONFIG,
         useValue: DEFAULT_DROPZONE_CONFIG
      }
   ],

   declarations: [DropzoneComponent]
})

export class DropzoneModules { }

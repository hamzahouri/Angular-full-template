import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageCropperModule } from 'ngx-image-cropper';
import { TranslateModule } from '@ngx-translate/core';

import { ImageCropperRoutes }  from './ImageCropper.routing';
import { ImageCropperComponent } from './ImageCropper/ImageCropper.component';
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';
@NgModule({
   imports: [
      CommonModule,
      RouterModule,
      FlexLayoutModule,
      MatButtonModule,
      MatCardModule,
      RouterModule.forChild(ImageCropperRoutes),
      WidgetsComponentsModule,
      TranslateModule,
      ImageCropperModule
   ],

   declarations: [ImageCropperComponent]
})

export class ImageCropperModules { }

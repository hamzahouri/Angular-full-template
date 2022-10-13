import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { VgCoreModule} from '@videogular/ngx-videogular/core';
import { VgControlsModule} from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { VgStreamingModule } from '@videogular/ngx-videogular/streaming';
import { MatCardModule} from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

import { VideoPlayerRoutes } from './VideoPlayer.routing';
import { VideoPlayerComponent } from './VideoPlayer/VideoPlayer.component';
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';
@NgModule({
   imports: [
      CommonModule,
      RouterModule,
      RouterModule.forChild(VideoPlayerRoutes),
      MatCardModule,
      VgCoreModule,
      VgControlsModule,
      VgOverlayPlayModule,
      VgBufferingModule,
      VgStreamingModule,
      WidgetsComponentsModule,
      TranslateModule
   ],

   declarations: [VideoPlayerComponent]
   })

export class VideoPlayerModule { }

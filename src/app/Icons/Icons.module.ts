import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { IconsRoutes } from './Icons.routing';
import { IconService } from '../Services/IconService/Icon.service';
import { MaterialComponent } from './Material/Material.component';
import { FontawesomeComponent } from './Fontawesome/Fontawesome.component';
import { GlyphiconsComponent } from './Glyphicons/Glyphicons.component';
import { LineaComponent } from './Linea/Linea.component';
import { SimpleLineIconsComponent } from './SimpleLineIcons/SimpleLineIcons.component';
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(IconsRoutes),
      MatIconModule,
      TranslateModule,
      HttpClientModule,
      WidgetsComponentsModule,
      MatCardModule,
      MatListModule,
      FlexLayoutModule,
      HttpClientModule
   ],

   providers:[
   	IconService
   ],

   declarations: [MaterialComponent, FontawesomeComponent, GlyphiconsComponent, LineaComponent, SimpleLineIconsComponent]
})


export class IconsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { ChartsRoutes } from './Charts.routing';
import { NgxChartsComponent } from './NgxCharts/NgxCharts.component';
import { NgxEchartsComponent } from './NgxEcharts/NgxEcharts.component';
import { GoogleChartsComponent } from './GoogleCharts/GoogleCharts.component';
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';

/**
 * This will import all modules from echarts.
 * If you only need custom modules,
 * please refer to [Custom Build] section.
 */
import * as echarts from 'echarts';

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(ChartsRoutes),
      NgxChartsModule,
      NgxEchartsModule.forRoot({
         echarts,
      }),
      MatCardModule,
      FlexLayoutModule,
      MatButtonModule,
      Ng2GoogleChartsModule,
      WidgetsComponentsModule,
      TranslateModule
   ],
   declarations: [
      NgxChartsComponent,
      NgxEchartsComponent,
      GoogleChartsComponent
   ]
})
export class ChartsModule { }

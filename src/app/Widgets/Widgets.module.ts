import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module'
import { NgxEchartsModule } from 'ngx-echarts';
import { TranslateModule} from '@ngx-translate/core';

import { WidgetsRoutes } from './Widgets.routing';
import { UserComponent } from './User/User.component';
import { ChartsComponent } from './Charts/Charts.component';

/**
 * This will import all modules from echarts.
 * If you only need custom modules,
 * please refer to [Custom Build] section.
 */
import * as echarts from 'echarts';

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(WidgetsRoutes),
      WidgetsComponentsModule,
      FlexLayoutModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatCardModule,
      MatDialogModule,
      MatDatepickerModule,
      MatSnackBarModule,
      MatNativeDateModule,
      MatTableModule,
      MatCheckboxModule,
      MatProgressBarModule,
      MatInputModule,
      MatSelectModule,
      MatFormFieldModule,
      NgxEchartsModule.forRoot({
         echarts,
      }),
      MatListModule,
      TranslateModule,
      MatProgressSpinnerModule
   ],
   declarations: [
      UserComponent,
      ChartsComponent
   ]
})
export class WidgetsModule { }

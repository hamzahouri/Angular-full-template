import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';

import { TablesRoutes } from './Tables.routing';
import { StandardComponent } from './Standard/Standard.component';
import { SlotsComponent } from './Slots/Slots.component';
import { SelectableComponent } from './Selectable/Selectable.component';
import { SearchRowComponent } from './SearchRow/SearchRow.component';
import { FullscreenComponent } from './Fullscreen/Fullscreen.component';
import { SelectionComponent } from './Selection/Selection.component';
import { PinningComponent } from './Pinning/Pinning.component';
import { PagingComponent } from './Paging/Paging.component';
import { EditingComponent } from './Editing/Editing.component';
import { BasicComponent } from './Basic/Basic.component';
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';

@NgModule({
   imports: [
	   CommonModule,
	   RouterModule.forChild(TablesRoutes),
	   MatTableModule,
	   MatSortModule,
	   MatInputModule,
	   MatPaginatorModule,
	   MatFormFieldModule,
	   MatIconModule,
	   MatCardModule,
	   MatCheckboxModule,
	   FlexLayoutModule,
	   MatDividerModule,
	   MatTooltipModule,
	   NgxDatatableModule,
	   WidgetsComponentsModule,
	   TranslateModule
   ],

   declarations: [StandardComponent, SlotsComponent, SelectableComponent, SearchRowComponent, FullscreenComponent, SelectionComponent, PinningComponent, PagingComponent, EditingComponent, BasicComponent]
})

export class TablesModule { }

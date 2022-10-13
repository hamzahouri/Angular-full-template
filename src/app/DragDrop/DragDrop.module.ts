import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragulaModule ,DragulaService } from 'ng2-dragula';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularDraggableModule } from 'angular2-draggable';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';
import { DragDropRoutes } from './DragDrop.routing';
import { DragulaComponent } from './Dragula/Dragula.component';
import { DraggableComponent } from './Draggable/Draggable.component';
import { DraggableResizeableComponent } from './DraggableResizeable/DraggableResizeable.component';

@NgModule({
   imports: [
	   CommonModule,
	   RouterModule.forChild(DragDropRoutes),
	   DragulaModule,
	   MatCardModule,
	   FlexLayoutModule,
	   MatDividerModule,
	   WidgetsComponentsModule,
	   AngularDraggableModule,
	   TranslateModule
   ],

   providers : [DragulaService],
   declarations: [DragulaComponent, DraggableComponent, DraggableResizeableComponent]
})

export class DragDropModule { }

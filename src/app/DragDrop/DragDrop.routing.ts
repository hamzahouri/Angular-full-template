import { Routes } from '@angular/router';
import { DraggableComponent } from './Draggable/Draggable.component';
import { DragulaComponent } from './Dragula/Dragula.component';
import { DraggableResizeableComponent } from './DraggableResizeable/DraggableResizeable.component';

export const DragDropRoutes: Routes = [
   {
      path: '',
      redirectTo: 'dragula',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'dragula',
            component:  DragulaComponent 
         },
         {
            path: 'draggable',
            component: DraggableComponent 
         },
         {
            path: 'draggable_resizable',
            component: DraggableResizeableComponent 
         }
      ]
   }
];

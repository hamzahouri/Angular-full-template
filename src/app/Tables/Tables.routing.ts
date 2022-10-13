import { Routes } from '@angular/router';

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

export const TablesRoutes: Routes = [
   {
      path: '',
      redirectTo: 'standard',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'standard',
            component: StandardComponent 
         },
         {
            path: 'slots',
            component: SlotsComponent 
         },
         {
            path: 'selectablerows',
            component: SelectableComponent 
         },
         {
            path: 'searchwithtext',
            component: SearchRowComponent
         },
         {
            path: 'fullscreen',
            component: FullscreenComponent
         },
         {
            path: 'selection',
            component: SelectionComponent
         },
         {
            path: 'pinning',
            component: PinningComponent
         },
         {
            path: 'paging',
            component: PagingComponent
         },
         {
            path: 'editing',
            component: EditingComponent
         },
         {
            path: 'basic',
            component: BasicComponent
         }
      ]
   }
];

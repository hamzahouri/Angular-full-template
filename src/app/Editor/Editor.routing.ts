import { Routes } from '@angular/router';
import { QuilleditorComponent } from './QuillEditor/QuillEditor.component';
import { AceEditorComponent } from './AceEditor/AceEditor.component';
import { CkeditorComponent } from './Ckeditor/Ckeditor.component';
import { SummerEditorComponent } from './SummerEditor/SummerEditor.component';

export const EditorRoutes: Routes = [
   {
      path: '',
      redirectTo: 'quilleditor',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'quilleditor',
            component:  QuilleditorComponent
         },
         {
            path: 'ace-editor',
            component:  AceEditorComponent
         },
         {
            path: 'ckeditor',
            component: CkeditorComponent 
         },
         {
            path: 'summer-editor',
            component: SummerEditorComponent
         }
      ]
   }
];

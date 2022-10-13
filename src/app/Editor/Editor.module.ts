import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { AceEditorModule } from 'ng2-ace-editor';
import { CKEditorModule } from 'ngx-ckeditor';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

import { EditorRoutes } from './Editor.routing';
import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';
import { AceEditorComponent } from './AceEditor/AceEditor.component';
import { CkeditorComponent } from './Ckeditor/Ckeditor.component';
import { SummerEditorComponent } from './SummerEditor/SummerEditor.component';
import { QuilleditorComponent } from './QuillEditor/QuillEditor.component';

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(EditorRoutes),
      QuillModule.forRoot({
         modules: {
            toolbar: [
               ['bold', 'italic', 'underline', 'strike'],
               ['blockquote', 'code-block'],
               [{ 'header': 1 }, { 'header': 2 }],
               [{ 'list': 'ordered'}, { 'list': 'bullet' }],
               [{ 'script': 'sub'}, { 'script': 'super' }],
               [{ 'indent': '-1'}, { 'indent': '+1' }],
               [{ 'direction': 'rtl' }],
               [{ 'size': ['small', false, 'large', 'huge'] }],
               [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
               [{ 'color': [] }, { 'background': [] }],
               [{ 'font': [] }],
               [{ 'align': [] }],
               ['clean'],
               ['link', 'image', 'video']
            ]
         },
      }),
      AceEditorModule,
      MatCardModule,
      MatDividerModule,
      CKEditorModule,
      WidgetsComponentsModule,
      TranslateModule
   ],
   declarations: [QuilleditorComponent, AceEditorComponent, CkeditorComponent, SummerEditorComponent]
})

export class EditorModule { }

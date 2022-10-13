import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-ace-editor',
  templateUrl: './AceEditor.component.html',
  styleUrls: ['./AceEditor.component.scss']
})

export class AceEditorComponent implements OnInit {

	@ViewChild('editor') editor;
   text: string = "<style>.button{font-size: 12px; color: #ff0;}</style>";

   constructor(public translate : TranslateService) { }

   ngOnInit() { }
}

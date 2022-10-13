import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anglo-ckeditor',
  templateUrl: './Ckeditor.component.html',
  styleUrls: ['./Ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit {

	public editorValue  : string = 'Hello CKEditor';

   constructor() { }

   ngOnInit() {
   }  
}

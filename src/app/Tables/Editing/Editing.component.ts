import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-editing',
  templateUrl: './Editing.component.html',
  styleUrls: ['./Editing.component.scss'] 
})

export class EditingComponent implements OnInit {

	editing = {};
   rows = [];
 
   constructor(public translate : TranslateService) { 
  	   this.fetch((data) => {
      this.rows = data;
   	});
   }

   ngOnInit() {	  
   }
   
   /**
     * To fetch the data from JSON file.
     */
   fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', `assets/data/company.json`);
      req.onload = () => {
      cb(JSON.parse(req.response));
      };
      req.send();
   }

   /**
     * updateValue is used to update the data when edit.
     */
   updateValue(event, cell, rowIndex) {
      this.editing[rowIndex + '-' + cell] = false;
      this.rows[rowIndex][cell] = event.target.value;
      this.rows = [...this.rows];
   }
}

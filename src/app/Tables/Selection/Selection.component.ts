import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector		: 'app-selection',
  templateUrl	: './Selection.component.html',
  styleUrls		: ['./Selection.component.scss']
})

export class SelectionComponent implements OnInit {

  	rows				: any[] = [];
  	selected			: any[] = [];

 	columns : any [] = [
	   { prop: 'name'} , 
	   { name: 'Company' }, 
	   { name: 'Gender' }
 	];

  	constructor(public translate : TranslateService) {
  		this.fetch((data) => {
      	this.rows = data;
     	}); 
  	}

 	ngOnInit() {
   }
 	
 	/**
 	  * fetch is used to fetch the data from JSON file.
 	  */
	fetch(cb) {
	   const req = new XMLHttpRequest();
	   req.open('GET', `/assets/data/company.json`);
	   req.onload = () => {
	   	cb(JSON.parse(req.response));
	   };
	   req.send();
	}
}

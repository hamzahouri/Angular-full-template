import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-paging',
  templateUrl: './Paging.component.html',
  styleUrls: ['./Paging.component.scss']
})

export class PagingComponent implements OnInit {

	rows = [];

	constructor(public translate : TranslateService) { 
		this.fetch((data) => {
			this.rows = data;
		});
	}

   ngOnInit() {
  	}

  	/**
  	  * fetch is used to fetch the data from JSON file .
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



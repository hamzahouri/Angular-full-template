import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector		 : 'app-select',
  templateUrl	 : './Select.component.html',
  styleUrls		 : ['./Select.component.scss']
})

export class SelectComponent implements OnInit {

	selected 	: any = "nullOption";
	
	states : any [] = [
		{
			value     :'0', 
			viewValue : 'State 1'
		},
		{
			value     :'1',
			viewValue : 'State 2'
		},
		{
			value		 :'2',
			viewValue : 'State 3'
		},
		{
			value		 :'3',
			viewValue :'State 4'
		},
		{
			value 	 :'4',
			viewValue :'State 5'
		},
		{
			value     :'5',
			viewValue :'State 6'
		}
 	]	

	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}
}
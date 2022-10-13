import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector		 : 'app-radio',
  templateUrl	 : './Radio.component.html',
  styleUrls		 : ['./Radio.component.scss']
})

export class RadioComponent implements OnInit {
	
	selectOption   : string;
	optionsArray   : string [] = ['option 1', 'option 2', 'option 3', 'option 4'];

	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}
}

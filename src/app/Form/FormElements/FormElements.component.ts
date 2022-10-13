import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './FormElements.component.html',
  styleUrls: ['./FormElements.component.scss']
})
export class FormElementsComponent implements OnInit {
	
	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}

}

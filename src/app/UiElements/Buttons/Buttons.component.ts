import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'anglo-buttons',
	templateUrl: './Buttons.component.html',
	styleUrls: ['./Buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}
}

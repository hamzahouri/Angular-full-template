import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-toolbar',
	templateUrl: './Toolbar.component.html',
	styleUrls: ['./Toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {

	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}

}

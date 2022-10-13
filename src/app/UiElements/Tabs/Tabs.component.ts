import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-tabs',
  templateUrl: './Tabs.component.html',
  styleUrls: ['./Tabs.component.scss']
})

export class TabsComponent implements OnInit {

	constructor( public translate : TranslateService) { }

	ngOnInit() {
	}

}

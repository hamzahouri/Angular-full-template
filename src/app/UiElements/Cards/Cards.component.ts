import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-cards',
  templateUrl: './Cards.component.html',
  styleUrls: ['./Cards.component.scss']
})

export class CardsComponent implements OnInit {

	constructor(public translate : TranslateService) { }

	ngOnInit() {
		
	}

}

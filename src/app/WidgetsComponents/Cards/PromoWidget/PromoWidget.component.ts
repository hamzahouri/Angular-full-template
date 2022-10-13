import { Component, OnInit ,Input} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-promo-widget',
  templateUrl: './PromoWidget.component.html',
  styleUrls: ['./PromoWidget.component.scss']
})

export class PromoWidgetComponent implements OnInit {

	@Input() promoWidgetData:any;

	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}

}

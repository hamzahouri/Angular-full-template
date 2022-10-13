import { Component, OnInit ,Input} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-icon-card',
  templateUrl: './IconCard.component.html',
  styleUrls: ['./IconCard.component.scss']
})

export class IconCardComponent implements OnInit {

	@Input() data:any;

	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}

}

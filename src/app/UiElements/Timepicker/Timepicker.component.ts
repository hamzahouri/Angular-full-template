import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './Timepicker.component.html',
  styleUrls: ['./Timepicker.component.scss']
})

export class TimepickerComponent implements OnInit {
	
	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}

}

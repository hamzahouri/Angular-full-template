import {Component, OnInit, forwardRef} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DatepickerComponent),
	multi: true
};

@Component({
  selector: 'anglo-datepicker',
  templateUrl: './Datepicker.component.html',
  styleUrls: ['./Datepicker.component.scss']
})

export class DatepickerComponent implements OnInit {

	pickerOneValue   : Date;
	pickerTwoValue   : Date;
	pickerThreeValue : Date;

	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}
}

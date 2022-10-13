import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';

export interface ChipColor {
  name  : string;
  color : ThemePalette;
  icon  : string;
}

@Component({
  selector: 'app-chips',
  templateUrl: './Chips.component.html',
  styleUrls: ['./Chips.component.scss']
})

export class ChipsComponent implements OnInit {

	availabelColors : ChipColor[] = [
		{
			name:'none',
			color:undefined,
			icon:'star'
		},
		{
			name:'Primary',
			color:'primary',
			icon: 'cake'
		},
		{
			name:'Accent',
			color:'accent',
			icon:'account_circle'
		},
		{
			name:'Warn',
			color:'warn',
			icon:'check_circles'
		}
	]
	
	constructor(public translate : TranslateService) { }

	ngOnInit() {

	}
}

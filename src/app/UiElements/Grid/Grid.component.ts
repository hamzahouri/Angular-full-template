import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector      : 'app-grid',
  templateUrl   : './Grid.component.html',
  styleUrls     : ['./Grid.component.scss']
})
export class GridComponent implements OnInit {

	tiles          : any [] = [
		{text: '12', cols: 12,  rows: 1, color: '#448aff'},
		{text: '6',  cols: 4,   rows: 1, color: '#e53935'},
		{text: '6',  cols: 4,   rows: 1, color: '#00bcd4'},
		{text: '6',  cols: 4,   rows: 1, color: '#43a047'},
		{text: '4',  cols: 3,   rows: 1, color: '#E65100'},
		{text: '4',  cols: 3,   rows: 1, color: '#FF6F00'},
		{text: '4',  cols: 3,   rows: 1, color: '#F57F17'},
		{text: '4',  cols: 3,   rows: 1, color: '#757575'},
		{text: '1',  cols: 1,   rows: 1, color: '#6D4C41'},
		{text: '1',  cols: 1,   rows: 1, color: '#F4511E'},
		{text: '1',  cols: 1,   rows: 1, color: '#607D8B'},
		{text: '1',  cols: 1,   rows: 1, color: '#D84315'},
		{text: '1',  cols: 1,   rows: 1, color: '#FFA000'},
		{text: '1',  cols: 1,   rows: 1, color: '#FFB300'},
		{text: '1',  cols: 1,   rows: 1, color: '#33691E'},
		{text: '1',  cols: 1,   rows: 1, color: '#1B5E20'},
		{text: '1',  cols: 1,   rows: 1, color: '#80D8FF'},
		{text: '1',  cols: 1,   rows: 1, color: '#0277BD'},
		{text: '1',  cols: 1,   rows: 1, color: '#4DD0E1'},
		{text: '1',  cols: 1,   rows: 1, color: '#6200EA'},
	]

	constructor(public translate : TranslateService) {
	}

	ngOnInit() {
	}
}

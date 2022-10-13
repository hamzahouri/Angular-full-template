import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'anglo-dummy-card',
  templateUrl: './DummyCard.component.html',
  styleUrls: ['./DummyCard.component.scss']
})

export class DummyCardComponent implements OnInit {

	@Input() card:any;
	
	constructor() { }

   ngOnInit() {
   }


}

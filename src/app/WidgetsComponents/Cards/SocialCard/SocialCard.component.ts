import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anglo-social-card',
  templateUrl: './SocialCard.component.html',
  styleUrls: ['./SocialCard.component.scss']
})
export class SocialCardComponent implements OnInit {
	
	@Input() socialData: any;

   constructor() { }

   ngOnInit() {
   }

}

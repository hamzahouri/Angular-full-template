import { Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'anglo-session-slider',
	templateUrl: './SessionSlider.component.html',
	styleUrls: ['./SessionSlider.component.scss']
})
export class SessionSliderComponent implements OnInit {
   
   @Input() Reviews_slides : any;

	slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,"autoplay": true, "autoplaySpeed": 1000,"dots":true}

	constructor() { }

	ngOnInit() {
	}

}

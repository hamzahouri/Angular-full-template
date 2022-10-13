import { Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'anglo-reviews',
	templateUrl: './Reviews.component.html',
	styleUrls: ['./Reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

	@Input() reviewsSlideData : any;
	constructor() { }

	ngOnInit() {
	}

   slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,"autoplay": true, "autoplaySpeed": 1000}
}
import { Component, OnInit, Input} from '@angular/core';

@Component({
   selector    : 'anglo-top-selling',
   templateUrl : './TopSelling.component.html',
   styleUrls   : ['./TopSelling.component.scss']
})
export class TopSellingComponent implements OnInit {

   @Input() slides : any;
   constructor() { }

   ngOnInit() { }

   slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,"autoplay": true, "autoplaySpeed": 1000}
}


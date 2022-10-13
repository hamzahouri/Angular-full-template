import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { TranslateService } from '@ngx-translate/core';
const searchClient = algoliasearch(
	'latency',
	'6be0576ff61c053d5f9a3225e2a90f76'
 );

import { CoreService } from '../../Services/GlobalService/Core.service';

@Component({
	selector: 'anglo-shop',
	templateUrl: './Shop.component.html',
	styleUrls: ['./Shop.component.scss']
})
export class ShopComponent implements OnInit {

	config = {
		indexName: 'ikea',
		searchClient
	};

	constructor( private coreService	: CoreService,
					 public translate   : TranslateService) { }

	ngOnInit() {
	}

	/**
	  * transformHits return the product rating star.
	  */
	public transformHits(hits) {
      	hits.forEach(hit => {
	        hit.stars = [];
	        for (let i = 1; i <= 5; i) {
	           hit.stars.push(i <= hit.rating);
	           i += 1;
	         }
     	});
    	return hits;
   }

   /**
     * addToCart is used to add the product into cart.
     */
   addToCart(event){
   	event.quantity = 1;
   	this.coreService.addToCart(event);
   }
}

import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Router} from '@angular/router';
import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
	selector: 'anglo-shop-grid',
	templateUrl: './ShopGrid.component.html',
	styleUrls: ['./ShopGrid.component.scss']
})
export class ShopGridComponent implements OnInit {

	cartData					 : any[]; 
	@Input() shopGridData : any;
	@Output() addToCart   : EventEmitter<any> = new EventEmitter<any>();

	constructor(private router : Router,
		private coreService : CoreService){ }

	ngOnInit() {
	}

	/**
	  * addTOCart function is used to add the items into cart
	  */
	addTOCart(shop){
		this.addToCart.emit(shop);
	}

	/**
	  * ifItemExistInCart function is used to check if item is exist into cart or not
	  */
	ifItemExistInCart(shop){
		let exits= false;
		this.cartData = this.coreService.localStorageCart;
		for(let i = 0; i <this.cartData.length; i++){
			if (this.cartData[i].name === shop.name){
				exits = true;
			}
			else{
				exits =false;
			}
		}
		return exits;
	}
	
	/**
	  * viewCart is used to view the cart
	  */
	viewCart(){
		this.router.navigate(['/ecommerce/cart']);
	}
}

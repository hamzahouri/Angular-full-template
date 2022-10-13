import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel} from '@angular/cdk/collections';
import { Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../Services/GlobalService/Core.service';

@Component({
	selector: 'anglo-cart',
	templateUrl: './Cart.component.html',
	styleUrls: ['./Cart.component.scss']
})

export class CartComponent implements OnInit {

   popupDeleteResponse  : any;
	dataSource	         : any;
	key					   : string = "cartProduct";
	displayedColumnsData : string [] = ['image','name','quantity','price','total','icon'];
	cartShowSpinner      : boolean  = false;

	constructor(public coreService:CoreService,
					public router:Router,
					public translate : TranslateService) {
	}

	ngOnInit() {
	}

	/**
	  * onQuantityClick is used to calculate the total. 
	  */
	onQuantityClick(cartProduct){
		let total = null;
		if(cartProduct){
			total =cartProduct.quantity*cartProduct.price;
      	}
      this.coreService.setCartQuantity(cartProduct);
      return total;
   }

   /**
     * removeCartProduct is used to remove the product from cart.
     */    
	removeCartProduct(cartProduct){
      this.coreService.deleteDialog('Are you sure you want to delete this product permanently?')
         .subscribe( res => { this.popupDeleteResponse = res },
            			err=>console.log(err),
           				()=>this.getPopupDeleteResponse(this.popupDeleteResponse,cartProduct)
         );
   }

   /**
     * getPopupDeleteResponse is used to delete the product from cart if response yes.
     */
   getPopupDeleteResponse(response:any,cartProduct){
      if(response == "yes")
         { 
            this.coreService.localStorageDelete(cartProduct,this.key);
            this.cartShowSpinner = true; 
				setTimeout(() => {
					this.cartShowSpinner = false;
				}, 2000);
         }
   }

   /**
     * calculate is used to calculate the price of all product into cart. 
     */
	calculate(){
		let total : number = 0;
		for(let data of this.coreService.localStorageCart)
		{	
			total+=(data.price * data.quantity);	
		}
		return total;		
	}

	/**
	  * checkout mathod is used to open the checkout page. 
	  */
	checkout(){
		this.router.navigate(['/ecommerce/checkout']);
	}
}


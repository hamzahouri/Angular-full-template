import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { CoreService } from '../../Services/GlobalService/Core.service';

@Component({
	selector: 'anglo-checkout',
	templateUrl: './Checkout.component.html',
	styleUrls: ['./Checkout.component.scss']
})

export class CheckoutComponent implements OnInit {

	billingForm 	      : FormGroup;
	countries		  	   : any;
	displayedColumnsData : string [] = ['image','name','quantity','total'];

	constructor( public coreService  : CoreService,
				    private formBuilder : FormBuilder,
					 public translate    : TranslateService) { }

	ngOnInit() {
		this.billingForm = this.formBuilder.group({  
  			name  		: [''],
  			lastName		: [''],
  			email			: [''],
  			mobile		: [''],
  			address1		: [''],
  			address2		: [''],
  			country		: [''],
  			state			: [''],
  			city			: [''],
  			validate		: ['']
  		});

		this.getCountry();
	}

	/**
	  * getCountry is used to get the Country Data from JSON file.
	  */
	getCountry(){
		this.coreService.getCountries().
			subscribe( res => { this.countries=res['countries']},
						  err => console.log(err),
						  ()  => this.countries
						);
	}
	
	/**
	  * calculate method is used to calculate the total price of product item. 
	  */
	calculate(){
		let total:number=0;
		for(let data of this.coreService.localStorageCart)
			{	
				total+=(data.price * data.quantity);	
			}
		return total;		
	}

	/**
	  * onQuantityClick method is used when quantity of product will change then total price of product is also change. 
	  */
	onQuantityClick(cartProduct){
		let total = null;
		if(cartProduct)
			{
				total = cartProduct.quantity * cartProduct.price;
        	}
      return total;
   }
}

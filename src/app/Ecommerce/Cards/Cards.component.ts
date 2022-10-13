import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { CoreService } from '../../Services/GlobalService/Core.service';

@Component({
	selector: 'anglo-cards',
	templateUrl: './Cards.component.html',
	styleUrls: ['./Cards.component.scss']
})

export class CardsComponent implements OnInit {

	popupDeleteRespone  : any;
	popupAddNumberCard  : any;

	constructor(public coreService:CoreService,
					public translate : TranslateService) { }

	ngOnInit() {
	}

	/**
	  * onRemoveCard is used to remove the product Number Card.
	  */
	onRemoveCard(productNumberCard){
		this.coreService.deleteDialog('Are you sure you want to delete this card permanently?').
			subscribe( res=>{ this.popupDeleteRespone = res },
						  err=>console.log(err),
				        ()=>this.getPopupDeleteResponse(this.popupDeleteRespone,productNumberCard)
				      );
	}

	/**
	  * In which when delete response yes then number card delete from local storage.
	  */
	getPopupDeleteResponse(response:any,numberCard){
		if(response == "yes")
		{
			this.coreService.localStorageDeleteCard(numberCard);
			this.coreService.getLocalCard();
		}
	}

	/**
	  * addNewCard is used to add the new number card.
	  */
	addNewCard(){
		this.coreService.addNumberCard().
			subscribe( res => {this.popupAddNumberCard = res},
						  err => console.log(err),
						  ()  => this.getPopupResponse(this.popupAddNumberCard))
	}

	/**
	  * getPopupResponse is used to get the Response. if response will be get then number card add into local storage. 
	  */
	getPopupResponse(response:any){
		if(response)
		{
			this.coreService.localStorageAdd(response);
		}
	}

	/**
	  * replaceCardNumber is used to replace the card number with 'x'.
	  */
	replaceCardNumber(number) {
		let cardNumber = null;
		cardNumber = number.replace(/.(?=.{4})/g, 'x');
		return cardNumber;
	}
}

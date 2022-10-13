import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/Rx';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import screenfull from 'screenfull';
import { ToastrService } from 'ngx-toastr';

import { AddListDialogComponent} from '../../WidgetsComponents/PopUp/AddListDialog/AddListDialog.component';
import { DeleteListDialogComponent} from '../../WidgetsComponents/PopUp/DeleteListDialog/DeleteListDialog.component';
import { SeeDialogComponent } from '../../WidgetsComponents/PopUp/SeeDialog/SeeDialog.component';
import { EditDialogComponent } from '../../WidgetsComponents/PopUp/EditDialog/EditDialog.component';
import { AddNewCardComponent } from '../../WidgetsComponents/PopUp/AddNewCard/AddNewCard.component';
import { NewEmailPopupComponent } from '../../WidgetsComponents/PopUp/NewEmailPopup/NewEmailPopup.component';
import { AddNewUserComponent } from '../../WidgetsComponents/PopUp/AddNewUser/AddNewUser.component';

@Injectable()
export class CoreService {

	sidebarOpen        : boolean = true;
	chatSideBarOpen	 : boolean = true;
	cartLength         : number = 0;
	localStorageCart   : any;
	localStorageInbox  : any;
	fullscreen         : HTMLElement;
   element            : HTMLElement;
   chatSideNavOpen    : boolean = false;
   settingSideNavOpen : boolean = false;
   leftSideNav		    : boolean = false;
   localStorageCard   : any;
   isCheckboxOpen     : boolean = false;
   collapseSidebarStatus : boolean;
   layout: any         = 'ltr';
   rtlStatus : boolean = false;
   /*
	 *  Default Inbox Email Data
	 */
	inboxEmail : any [] = [
		{
			status:1,
			images:"/assets/img/user-28.jpg",
			name:"Mitchell Miles",
			title:"Pellentesque vel est a orci tempus viverra.",
			content:"Lorem Ipsum is simply dummy subject of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy subject ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			time:"1 hour ago",
			email:"mitchell@example.com"
		},
		{
			status:0,
			images:"/assets/img/user-5.jpg",
			name:"Jhon Smith",
			title:"Aliquam at dui eu dui placerat porta.",
			content:"Lorem Ipsum is simply dummy subject of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy subject ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			time:" 2 hour ago",
			email:"mitchell@example.com"
		},
		{
			status:1,
			images:"/assets/img/user-6.jpg",
			name:"Mitchell Miles",
			title:"Sed at purus lacinia, rhoncus lorem at, facilisis mauris.",
			content:"Lorem Ipsum is simply dummy subject of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy subject ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			time:"4 hour ago",
			email:"mitchell@example.com"
		},
		{
			status:0,
			images:"/assets/img/user-7.jpg",
			name:"Merry Brown",
			title:"Welcome to our services",
			content:"Lorem Ipsum is simply dummy subject of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy subject ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			time:"5 hour ago",
			email:"merry@example.com"
		},
		{
			status:1,
			images:"/assets/img/user-12.jpg",
			name:"Cristal Uno",
			title:"Proin vitae lorem iaculis, fringilla tortor ut, varius dolor.",
			content:"Lorem Ipsum is simply dummy subject of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy subject ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			time:"6 hour ago",
			email:"cristal@example.com"
		},
		{
			status:0,
			images:"/assets/img/user-11.jpg",
			name:"John Miles",
			title:"ullam et enim id nulla porttitor consequat.",
			content:"Lorem Ipsum is simply dummy subject of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy subject ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			time:"7 hour ago",
			email:"john@example.com"
		},
		{
			status:1,
			images:"/assets/img/user-13.jpg",
			name:"Rose Doe",
			title:"Donec feugiat lectus sit amet bibendum suscipit.",
			content:"Lorem Ipsum is simply dummy subject of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy subject ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			time:"8 hour ago",
			email:"rose@example.com"
		},
		{
			status:0,
			images:"/assets/img/user-9.jpg",
			name:"Krishna Miles",
			title:"Mauris venenatis massa ac mi consequat aliquam.",
			content:"Lorem Ipsum is simply dummy subject of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy subject ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			time:"9 hour ago",
			email:"krishna@example.com"
		},
		{
			status:0,
			images:"/assets/img/user-30.jpg",
			name:"Mittali Miles",
			title:"Suspendisse id mauris sed orci iaculis vestibulum..",
			content:"Lorem Ipsum is simply dummy subject of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy subject ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			time:"10 hour ago",
			email:"mittali@example.com"
		},
		{
			status:0,
			images:"/assets/img/user-29.jpg",
			name:"William Miles",
			title:"Sed ullamcorper dolor ac vulputate laoreet.",
			content:"Lorem Ipsum is simply dummy subject of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy subject ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			time:"12 hour ago",
			email:"william@example.com"
		}
	]

	/*
	 *  Default Product Cart Data
	 */
	productCartData:any[]=[
		{
			productId:1,
			image:"/assets/img/product2.png",
			name:"3DR - Solo Smart Rechargeable Battery - Black",
			quantity:1,
			price:9
		},
		{
			productId:2,
			image:"/assets/img/product3.png",
			name:"JÄRA Lamp shade, white",
			quantity:1,
			price:15
		},
		{
			productId:3,
			image:"/assets/img/product3.png",
			name:"LEGITIM-Chopping board, white",
			quantity:1,
			price:23
		},
		{
			productId:4,
			image:"/assets/img/product3.jpeg",
			name:"Sour cream and onion potato chips",
			quantity:1,
			price:21
		}
	]

	/*
	 *  Default Number Card Data.
	 */
	numberCardsData:any[]=[
		{
			productId:1,
			number:"5105105105105100",
			fullName:"John Brown"
		},
		{
			productId:2,
			number:"4111111111111111",
			fullName:"Jennifier Meranda"
		},
		{
			productId:3,
			number:"4012888888881881",
			fullName:"Johnson"
		}
	]

	constructor(private http:HttpClient,
					private dialog: MatDialog,
					private toastr: ToastrService ) {
		this.defaultStoreLocalProduct();
		this.defaultStorageLocalCards();
	}

	/*
		----------  Cart Product Function  ----------
	*/

	//Default Product Cart Data.
	defaultStoreLocalProduct() {
		localStorage.setItem("cartProduct", JSON.stringify(this.productCartData));
		this.getLocalCart();
	}

	//Get Cart Data and Cart length from Local Storage.
	getLocalCart(){
		this.localStorageCart = JSON.parse(localStorage.getItem("cartProduct"));
		this.cartLength = this.localStorageCart.length;
	}

	//Adding new Product to cart in localStorage.
	addToCart(cartProducts){
		let products: any = JSON.parse(localStorage.getItem("cartProduct"));
		let found = products.some(function (products) {
			if(products.name == cartProducts.name){
				return  true;
			}
		});
		if (!found) { products.push(cartProducts);
			this.toastr.success("Added To Cart");
		}
		localStorage.setItem("cartProduct", JSON.stringify(products));
		this.getLocalCart();
	}

	//Delete the product from Local Storage.
	localStorageDelete(cartProduct:any,key:string){
		let products: any = JSON.parse(localStorage.getItem(key));
			for (let i = 0; i < products.length; i++) {
				if (products[i].name === cartProduct.name) {
					products.splice(i, 1);
					this.toastr.success("Item Deleted");
					break;
				}
			}
		localStorage.setItem(key, JSON.stringify(products));
		this.getLocalCart();
	}

	//Set Cart Quantity.
	setCartQuantity(cartProduct){
		let products: any = JSON.parse(localStorage.getItem("cartProduct"));
		for (let i = 0; i < products.length; i++) {
			if (products[i].productId === cartProduct.productId) {
				 products[i].quantity = cartProduct.quantity;
			}
		}
		localStorage.setItem("cartProduct", JSON.stringify(products));
	}

	/*
		----------  Number Card Function  ----------
	*/

	//Get NumberCard Items from local storage.
	getLocalCard(){
		this.localStorageCard = JSON.parse(localStorage.getItem("numberCard"));
	}

	//Default Number Card Data.
	defaultStorageLocalCards(){
		localStorage.setItem("numberCard",JSON.stringify(this.numberCardsData));
		this.getLocalCard();
	}

	//Adding new Number Card in localStorage.
	localStorageAdd(cardAdd){
		let cardNumeber: any = JSON.parse(localStorage.getItem("numberCard"));
		let found = cardNumeber.some(function (cardNumeber) {
			if(cardNumeber.number == cardAdd.number){
				return  true;
			}
		});
		if (!found) {
			cardNumeber.push(cardAdd);
			this.toastr.success("New Card Added");
		}
		localStorage.setItem("numberCard", JSON.stringify(cardNumeber));
		this.getLocalCard();
	}

	//delet the number card in localStorage.
	localStorageDeleteCard(cardNumber){
		let cards: any = JSON.parse(localStorage.getItem("numberCard"));
			for (let i = 0; i < cards.length; i++) {
				if (cards[i].number === cardNumber.number) {
					cards.splice(i, 1);
					this.toastr.success("Number Card Deleted");
					break;
				}
			}
		localStorage.setItem("numberCard", JSON.stringify(cards));
		this.getLocalCard();
	}

	/**
	  * getCountries used to get the country data .
	  */
	getCountries(){
		return this.http.get('/assets/data/countries.json').pipe(map(response=>response));
	}

	/*
		---------- Pop Up Function ----------
	*/

	// addItem function is used to open the add list Dialog component.
   addItem(addData:object){
		let dialogRef : MatDialogRef<AddListDialogComponent>;
		dialogRef = this.dialog.open(AddListDialogComponent);
		dialogRef.componentInstance.data = addData;

		return dialogRef.afterClosed();
	}

	// addNewUser function is used to open the add new user Dialog component.
   addNewUser(addData:object){
		let dialogRef : MatDialogRef<AddNewUserComponent>;
		dialogRef = this.dialog.open(AddNewUserComponent);
		dialogRef.componentInstance.data = addData;

		return dialogRef.afterClosed();
	}

	// addNumberCard is used to open the add number card Dialog Component.
	addNumberCard(){
		let dialogRef : MatDialogRef<AddNewCardComponent>;
		dialogRef = this.dialog.open(AddNewCardComponent);

		return dialogRef.afterClosed();
	}

	//deleteDiaglog function is used to open the Delete Dialog Component.
	deleteDialog(data:string){
		let dialogRef : MatDialogRef<DeleteListDialogComponent>;
		dialogRef = this.dialog.open(DeleteListDialogComponent);
		dialogRef.componentInstance.data = data;

		return dialogRef.afterClosed();
	}

	//seeList function is used to open See Dialog Component.
	seeList(data:any){
		let dialogRef : MatDialogRef<SeeDialogComponent>;
		dialogRef =this.dialog.open(SeeDialogComponent);
		dialogRef.componentInstance.data = data;

		return dialogRef.afterClosed();
	}

	//editList function is used to open Edit Dialog Component.
	editList(data){
		let dialogRef : MatDialogRef<EditDialogComponent>;
		dialogRef =this.dialog.open(EditDialogComponent);
		dialogRef.componentInstance.data = data;

		return dialogRef.afterClosed();
	}

	/**
	  *fullScreen Fuction is used to component is show on fullscreen.
	  */
	fullScreen(id) {
      let e1 :any = document.getElementById(id);
      if (screenfull.isEnabled) {
     		screenfull.request(e1);
   	}
   }

   /**
	  *getChatData used to get the chat data.
	  */
	getChatData() {
		return this.http.get('/assets/data/chatdata.json').pipe(map(response=>response));
	}

	/**
	  *hexToRgbA Function to convert hex to rgba.
	  */
	hexToRgbA(hex, alpha) {
		var c;
		if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
			c = hex.substring(1).split('');
			if (c.length === 3) {
				c = [c[0], c[0], c[1], c[1], c[2], c[2]];
			}
			c = '0x' + c.join('');
			return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
		}
		throw new Error('Bad Hex');
	}

}

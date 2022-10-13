import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { NewEmailPopupComponent } from '../WidgetsComponents/PopUp/NewEmailPopup/NewEmailPopup.component';

@Injectable()
export class EmailsService {

	inbox : boolean = false;
	state : any  = {
		allEmails   	: null,
		emails			: null,
		loadingEmails  : false,
		selectedEmail  : null
	}

	constructor(private http : HttpClient,
		private dialog : MatDialog,
		private toastr : ToastrService) {
		this.getAllEmail();
	}

	/**
	  * getAllEmail is get the Email from JSON file.
	  */
	getAllEmail(){
		this.http.get('/assets/data/emails.json').pipe(map(response => response)).
			subscribe(res => {this.storeAllEmail(res)});
	}

	/**
	  * storeAllEmail is Used to store the emails into allEmails.
	  */
	storeAllEmail(response) {
		this.state.allEmails = response;
	}

	/**
	  * getEmails is used to filter the Email according to their selected type.
	  */
	getEmails(state,type) {
  		setTimeout(() => {
  			if(type === 'inbox'){
  				this.inbox = true;
  			}
  			else{
  				this.inbox = false;
  			}
  			if(state.allEmails && state.allEmails.length > 0) {
				let emails = state.allEmails;
				state.selectedEmail = null;
				state.emails = emails.filter(email => email[type]);
			}
  		}, 500 )
  		return state.emails;
	}

	/**
	  * onViewEmailHandler to view the email in detail.
	  */
	onViewEmailHandler(state, email) {
		state.selectedEmail = email;
	}

	/**
	  * onSelectEmailHandler is used to select the email.
	  */
	onSelectEmailHandler(state,email){
		let indexOfEmail = state.emails.indexOf(email);
		state.emails[indexOfEmail].value = !email.value;
	}

	/**
	  * backToEmailsHandler is used to back to the Email list.
	  */
	backToEmailsHandler(state) {
		state.selectedEmail = null;
	}

	/**
	  * markAsStarEmail is used to mark the star to Email
	  */
	markAsStarEmailHandler(state, email) {
		let indexOfEmail = state.emails.indexOf(email);
		state.emails[indexOfEmail].starred = !email.starred;
	}

	/**
	  * onDeleteEmail is used to delete the Email.
	  */
	onDeleteEmailHandler(state) {
		let id = state.selectedEmail.id;
		for(let element of state.emails) {
			if(element.id === id){
				element.trash = true;
				element.inbox = false;
				state.selectedEmail = null;
				if(this.inbox){
					this.toastr.success("Email Deleted Successfully");
				}
				break;
			}
		}
	}

	/**
	  * newEmail function is used to open New Email Dialog.
	  */
	newEmail(){
	  let dialogRef : MatDialogRef<NewEmailPopupComponent>;
	  dialogRef = this.dialog.open(NewEmailPopupComponent);
	}
}

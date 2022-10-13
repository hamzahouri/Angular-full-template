import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

import { EmailsService} from '../../Services/Emails.service';

@Component({
  selector: 'anglo-email-listing',
  templateUrl: './EmailListing.component.html',
  styleUrls: ['./EmailListing.component.scss']
})

export class EmailListingComponent implements OnInit, OnChanges {

	public config : PerfectScrollbarConfigInterface = {};
	@Input() type : string;

	constructor( public emailsService : EmailsService) { }

	ngOnInit() {
		this.getInboxEmail();
	}

	/**
	  *ngOnChanges. method to handle the changes.
	  */
	ngOnChanges() {
		this.getInboxEmail();
	}

	/**
	  * getInboxEmail is used to get the Email according to their selected type.
	  */
	getInboxEmail(){
		this.emailsService.getEmails(this.emailsService.state, this.type);
	}

	/**
	  *	onViewEmail is used to view the Email.
	  */
	onViewEmail(email){
		this.emailsService.onViewEmailHandler(this.emailsService.state, email);
	}

	/**
	  *	onSelectEmail is used to Select the Email.
	  */
	onSelectEmail(email){
		this.emailsService.onSelectEmailHandler(this.emailsService.state, email);
	}

	/**
	  * markAsStarEmail is used to mark the star to Email
	  */
	markAsStarEmail(email){
		this.emailsService.markAsStarEmailHandler(this.emailsService.state, email);
	}
}

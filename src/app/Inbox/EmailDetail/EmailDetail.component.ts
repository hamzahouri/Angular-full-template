import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

import { EmailsService } from '../../Services/Emails.service';

@Component({
  selector: 'anglo-email-detail',
  templateUrl: './EmailDetail.component.html',
  styleUrls: ['./EmailDetail.component.scss']
})
export class EmailDetailComponent implements OnInit {
	
	public config : PerfectScrollbarConfigInterface = {};
	selectedEmail : any = this.emailsService.state.selectedEmail;

	constructor(private emailsService : EmailsService) { }

	ngOnInit() {
	}	

	/**
	  * backToEmails is used to back to the Email list.
	  */
	backToEmails(){
		this.emailsService.backToEmailsHandler(this.emailsService.state);
	}	

	/**
	  * onDeleteEmail is used to delete the Email.
	  */
	onDeleteEmail(){
		this.emailsService.onDeleteEmailHandler(this.emailsService.state);
	}

}

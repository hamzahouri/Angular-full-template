import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { EmailsService } from '../../Services/Emails.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-sidebar',
  templateUrl: './Sidebar.component.html',
  styleUrls: ['./Sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	
	@Output() isInboxType : EventEmitter<string> = new EventEmitter<string>();

	public config : PerfectScrollbarConfigInterface = {};

	constructor(private emailsService : EmailsService,
					public translate : TranslateService) { 
	}

	ngOnInit() {
		this.openInbox('inbox');
	}

	/**
	  * openComposeEmail function is used to open the email box
	  */
	openComposeEmail(){
		this.emailsService.newEmail();
	}

	/**
	  * openInbox function is used to open the inbox type email
	  */
	openInbox(type){
		this.isInboxType.emit(type);
	}

	/**
	  * openDraft function is used to open the draft type email
	  */
	openDraft(type){
		this.isInboxType.emit(type);
	}

	/**
	  * openStarred function is used to open the starred type email
	  */
	openStarred(type){
		this.isInboxType.emit(type);
	}

	/**
	  * openSent function is used to open the sent type email
	  */
	openSent(type){
		this.isInboxType.emit(type);
	}

	/**
	  * openSpam function is used to open the spam  type email
	  */
	openSpam(type){
		this.isInboxType.emit(type);
	}

	/**
	  * onTrash function is used to open the trash type email
	  */
	openTrash(type){
		this.isInboxType.emit(type);
	}
}

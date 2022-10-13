import { Component, OnInit, Input } from '@angular/core';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

import { CoreService } from '../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-chat-area',
  templateUrl: './ChatArea.component.html',
  styleUrls: ['./ChatArea.component.scss']
})
export class ChatAreaComponent implements OnInit {
	public config: PerfectScrollbarConfigInterface = {};

	@Input() chatAreaData : any;
	randomMessage			 : string;
	typing 	  				 : boolean = false;
	newMessage 				 : string  = "";
	
	randomMessages : any[] = [
		"How are you?",
		"We are glad to know",
		"How can I help you?",
		"We are happy to help you"
   ]

	constructor(private coreService : CoreService) { }

	ngOnInit() {
	}

	/**
	  * sendMessage function is used to send the message 
	  */
	sendMessage() {
		if(this.newMessage !== ""){
			let newMessages = {
				id: new Date().getTime(),
				body: this.newMessage,
				isAdmin: true,
				time: "Just Now"
			}
			this.chatAreaData.chats.push(newMessages);
			this.newMessage = "";
			setTimeout(() => {
				this.typing = true;
				this.getReply();
			}, 3000);
		}
	}

	/**
	  * getReply function is used to Reply a message to admin
	  */
	getReply(){
		this.randomMessage = this.randomMessages[Math.floor(Math.random() * this.randomMessages.length)];
		let reply = {
			id: new Date().getTime(),
			body: this.randomMessage,
			isAdmin: false,
			time: "Just Now"
		};
		setTimeout(() => {
			this.typing = false;
			setTimeout(() => {
				this.chatAreaData.chats.push(reply);
			}, 200);
		}, 3000);
	}

	/**
	  * _toggleSidebarOpened method is used to toggle the chat sidebar menu.
	  */
	_toggleSidebarOpened(){
		this.coreService.chatSideBarOpen = !this.coreService.chatSideBarOpen;
	}
}


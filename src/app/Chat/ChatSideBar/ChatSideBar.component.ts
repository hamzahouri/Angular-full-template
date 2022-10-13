import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import * as $ from 'jquery';

@Component({
  selector: 'anglo-chat-side-bar',
  templateUrl: './ChatSideBar.component.html',
  styleUrls: ['./ChatSideBar.component.scss']
})
export class ChatSideBarComponent implements OnInit {

	public config: PerfectScrollbarConfigInterface = {};

	@Input() chatData    : any;
   @Output() isOpenChat : EventEmitter<any> = new EventEmitter<any>();
   
	constructor() { }

	ngOnInit() {
	}
	
	/**
	 * openChat is used to emit the particular chat to another component.
	 */
	openChat(chat : any,id){
		this.isOpenChat.emit(chat);
		$('.p-3').removeClass('grayish-blue');
      	$('#'+id).addClass('grayish-blue');
	}
}

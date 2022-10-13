import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anglo-user-list',
  templateUrl: './UserList.component.html',
  styleUrls: ['./UserList.component.scss']
})
export class UserListComponent implements OnInit {

	@Input() UserList    : any;
	@Input() socialIcons : any;
	
	constructor() { }

	ngOnInit() {
	}

	/**
	  * changeUserStatus method is used to change the user status.
	  */
	changeUserStatus(event){
		event.status =!event.status;
	}


}

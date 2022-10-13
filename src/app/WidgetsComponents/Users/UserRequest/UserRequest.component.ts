import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-user-request',
  templateUrl: './UserRequest.component.html',
  styleUrls: ['./UserRequest.component.scss']
})

export class UserRequestComponent implements OnInit {

	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}

}


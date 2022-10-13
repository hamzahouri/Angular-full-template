import { Component, OnInit ,Input} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-users-bar',
  templateUrl: './UsersBar.component.html',
  styleUrls: ['./UsersBar.component.scss']
})
export class UsersBarComponent implements OnInit {

	@Input() UserData:any;

	constructor(public translate : TranslateService) { }

	ngOnInit() {
	}

}

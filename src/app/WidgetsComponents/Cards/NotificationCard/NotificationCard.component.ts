import { Component, OnInit ,Input } from '@angular/core';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-notification-card',
  templateUrl: './NotificationCard.component.html',
  styleUrls: ['./NotificationCard.component.scss']
})
export class NotificationCardComponent implements OnInit {

  	public config				  : PerfectScrollbarConfigInterface = {};
  	notificationShowSpinner   : boolean = false;
	notificationVisible 		  : boolean = true;
	@Input() title				  : string;
	@Input() notificationData : any;
	
	constructor(public translate : TranslateService,
		private coreService : CoreService) { }

	ngOnInit() {
	}

	getCloseValue(event){
		this.notificationVisible = false;
	}

	/*
    * showFullScreen is show the element in fullscreen .
    */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }

	spinnerShow(id){
	this.notificationShowSpinner= true;
	   setTimeout(() => {
	      this.notificationShowSpinner = false;
	   }, 3000);
	}
}

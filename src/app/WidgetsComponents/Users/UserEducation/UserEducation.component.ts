import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-user-education',
  templateUrl: './UserEducation.component.html',
  styleUrls: ['./UserEducation.component.scss']
})

export class UserEducationComponent implements OnInit {

	@Input() UserEducation : any;
	education              : boolean = true;
	userEducationSpinner   : boolean = false;

	constructor(public translate : TranslateService,
		public coreService : CoreService) { }

	ngOnInit() {
	}

   /**
     * getCloseValue is used to close the particular element.
     */
	getCloseValue(event){
   	this.education = false;
   }

   /**
     * showFullScreen is show the element in fullscreen .
     */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }

   /**
     * spinnerShow is used to Reload the particular element.
     */
	spinnerShow(id){
		this.userEducationSpinner= true;
		   setTimeout(() => {
		      this.userEducationSpinner = false;
		   }, 3000);
	}

}


import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-user-skills',
  templateUrl: './UserSkills.component.html',
  styleUrls: ['./UserSkills.component.scss']
})

export class UserSkillsComponent implements OnInit {
	
	@Input() UserSkills : any;
	skill	  				  : boolean = true;
	userSkillSpinner    : boolean = false;

	constructor(public translate : TranslateService,
		public coreService : CoreService) { }

	ngOnInit() {
	}
	
	/**
     * getCloseValue is used to close the particular element.
     */
	getCloseValue(event){
   	this.skill = false;
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
		this.userSkillSpinner= true;
		   setTimeout(() => {
		      this.userSkillSpinner = false;
		   }, 3000);
	}

}

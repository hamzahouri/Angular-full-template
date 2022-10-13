import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../../Services/GlobalService/Core.service';


@Component({
  selector: 'anglo-progress',
  templateUrl: './ProgressMapList.component.html',
  styleUrls: ['./ProgressMapList.component.scss']
})
export class ProgressMapComponent implements OnInit {

	@Input() countryData	   : any;
	@Input() titleName		: string;
	progrssMapVisible     	: boolean = true;
	progressMapShowSpinner	: boolean = false;
  
	constructor(public translate : TranslateService,
		private coreService : CoreService) { }

   ngOnInit() {
   }
   
   /**
     *getCloseValue is close the Activity Around World component.
     */
	getCloseValue(event){
		this.progrssMapVisible = false;	
	}

	/**
     *showFullScreen is show the element in fullscreen .
     */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }
   
   /**
     *spinnerShow is reload the Activity Around World component.
     */
   spinnerShow(id){
      this.progressMapShowSpinner= true;
         setTimeout(() => {
            this.progressMapShowSpinner = false;
         }, 3000);
   }
}

import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
	selector: 'anglo-browser-static',
	templateUrl: './BrowserStaticList.component.html',
	styleUrls: ['./BrowserStaticList.component.scss']
})

export class BrowserStaticComponent implements OnInit {

	@Input() displayedColumnsData	: string;
	@Input() invoicesData			: any;
	@Input() title					   : string;
	@Input() headerData				: any;
	browserVisible 					: boolean = true ;
	browserStaticShowSpinner		: boolean = false;

	constructor(public translate : TranslateService,
		private coreService : CoreService) {
	}

	ngOnInit() {
	}

	getCloseValue(event){
		this.browserVisible = false;
	}
	
	/*
    * showFullScreen is show the element in fullscreen .
    */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }
   
   spinnerShow(id){
      this.browserStaticShowSpinner= true;
         setTimeout(() => {
            this.browserStaticShowSpinner = false;
         }, 3000);
   }
}

import { Component, OnInit } from '@angular/core';
import { IconService } from '../../Services/IconService/Icon.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector      : 'anglo-simple-line-icons',
	templateUrl   : './SimpleLineIcons.component.html',
	styleUrls     : ['./SimpleLineIcons.component.scss']
})

export class SimpleLineIconsComponent implements OnInit {
	
	simpleLineIcon : any;
	
	constructor(private coreService:IconService,
		public translate : TranslateService) { }

	ngOnInit() {
		this.getSimpleLineIcon();
	}

	/** 
	  * getSimpleLineIcon method is used to get the Simple Line Icon response from the Icon service class. 
	  */
	getSimpleLineIcon(){
		this.coreService.getSimpleLineIcons().
			subscribe( res => { this.simpleLineIcon = res['icons']},
						  err => console.log(err),
                    () => this.simpleLineIcon
						);
	}
}
  
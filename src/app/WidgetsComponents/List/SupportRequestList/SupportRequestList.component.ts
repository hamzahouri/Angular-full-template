import { Component, OnInit, Input } from '@angular/core';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';

import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-support-request',
  templateUrl: './SupportRequestList.component.html',
  styleUrls: ['./SupportRequestList.component.scss']
})

export class SupportRequestComponent implements OnInit {

  public config : PerfectScrollbarConfigInterface = {};

   @Input() supportRequestData : string;
   supportRequestVisible       : boolean = true;
   supportRequestShowSpinner   : boolean = false;

	constructor(public translate : TranslateService,
      private coreService : CoreService) { }

	ngOnInit() {
   }
 
   /* 
    * getCloseValue is used to close the Support Request Component. 
    */
   getCloseValue(event){
   	this.supportRequestVisible = false;
   }

   /*
    * showFullScreen is show the Support Request Component in fullscreen.
    */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }

   /**
     * spinnerShow method reload the Support Request Component.
     */
   spinnerShow(id){
      this.supportRequestShowSpinner= true;
         setTimeout(() => {
            this.supportRequestShowSpinner = false;
         }, 3000);
   }
}

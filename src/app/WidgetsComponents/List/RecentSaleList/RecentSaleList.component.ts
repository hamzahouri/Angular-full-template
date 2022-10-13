import { Component, OnInit ,Input} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-recent-sale',
  templateUrl: './RecentSaleList.component.html',
  styleUrls: ['./RecentSaleList.component.scss']
})
export class RecentSalesComponent implements OnInit {

   public config : PerfectScrollbarConfigInterface = {};

	@Input() recentSaleData : string;
	recentSaleVisible       : boolean = true;
   recentSalesShowSpinner  : boolean = false;

   constructor(public translate : TranslateService,
      private coreService : CoreService) { }

   ngOnInit() {
   }
   
   /** 
     * getCloseValue is used to close the Recent Sale component. 
     */
   getCloseValue(event){
   	this.recentSaleVisible = false;
   }

   /**
     * showFullScreen is show the Recent Sale component in fullscreen.
     */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }

   /**
     * spinnerShow method reload the Recent Sale component.
     */
   spinnerShow(id){
      this.recentSalesShowSpinner = true;
         setTimeout(() => {
            this.recentSalesShowSpinner = false;
         }, 3000);
   }
}

import { Component, OnInit,Input } from '@angular/core';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-support-ticket',
  templateUrl: './SupportTicketList.component.html',
  styleUrls: ['./SupportTicketList.component.scss']
})

export class SupportTicketListComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
	
	supportTicketVisible 	 : boolean = true ;
	@Input() supportData 	 : any;
	@Input() title      		 : string;
	supportTicketShowSpinner : boolean = false;

	constructor(public translate : TranslateService,
	   private coreService : CoreService) { }

	ngOnInit() {
	}

   /**
     * getCloseValue is used to close the particular component.
     */ 
	getCloseValue($event){
		this.supportTicketVisible = false;
	}

	/**
     * showFullScreen is show the element in fullscreen .
     */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }
     
   /**
     * spinnerShow is used to reload the component.
     */
   spinnerShow(id){
      this.supportTicketShowSpinner= true;
         setTimeout(() => {
            this.supportTicketShowSpinner = false;
         }, 3000);
   }
}
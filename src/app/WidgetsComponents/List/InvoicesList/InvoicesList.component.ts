import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-invoices',
  templateUrl: './InvoicesList.component.html',
  styleUrls: ['./InvoicesList.component.scss']
})

export class InvoicesComponent implements OnInit {

   @Input() displayedColumnsData   : string;
 	@Input() invoicesData           : any;
	@Input() tableHeadingData       : any;
	@Input() title                  : string;
	invoicesVisible                 : boolean = true;
   invoicesShowSpinner             : boolean = false; 

	constructor(public translate : TranslateService,
      private coreService : CoreService) { }
	
	ngOnInit() {
   }

   /**
     *  getCloseValue close the Component.
     */
   getCloseValue(event){
   	this.invoicesVisible = false;
   }

   /**
     * showFullScreen is show Component in fullscreen .
     */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }

   /**
     * spinnerShow method reload the Component.
     */
   spinnerShow(id){
      this.invoicesShowSpinner = true;
         setTimeout(() => {
            this.invoicesShowSpinner = false;
         }, 3000);
   }
}

import { Component, OnInit ,Input} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-category-sales',
  templateUrl: './CategorySalesList.component.html',
  styleUrls: ['./CategorySalesList.component.scss']
})

export class CategorySalesComponent implements OnInit {
	
   @Input() titleName           : string;
   @Input() CategorySaleData    : any;
   @Input() id                  : string ;
   @Input() className           : string;
   categorySaleVisible          : boolean = true;
   categorySaleShowSpinner      : boolean = false;
   trafficChannelShowSpinner    : boolean = false;
 
   constructor(public translate : TranslateService,
      private coreService : CoreService) { }

   ngOnInit() {
   } 
   
   /**
     * getCloseValue close the selected Component.
     */
   getCloseValue($event){
   	this.categorySaleVisible = false;
   }
   
   /*
    * showFullScreen is show the selected component in fullscreen .
    */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }

   /**
     * spinnerShow method reload the  Selected Component.
     */
   spinnerShow(id){
      switch(id){
         case "categorySales":
            this.categorySaleShowSpinner = true;
            setTimeout(() => {
               this.categorySaleShowSpinner = false;
            }, 3000);

            break;

         case "trafficChannel":
            this.trafficChannelShowSpinner = true;
            setTimeout(() => {
               this.trafficChannelShowSpinner = false;
            }, 3000);
            
            break;   
      }
   }
}

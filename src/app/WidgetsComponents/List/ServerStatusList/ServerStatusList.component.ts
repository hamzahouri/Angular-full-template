import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from '../../../Services/GlobalService/Core.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-server-status',
  templateUrl: './ServerStatusList.component.html',
  styleUrls: ['./ServerStatusList.component.scss']
})

export class ServerStatusListComponent implements OnInit {
	
	@Input() ServeStatusData    : any [];
	@Input() titleName			 : string;
	serverStatusVisible         : boolean = true;
	serverStatusShowSpinner     : boolean = false;

	constructor(public translate : TranslateService,
      public coreService : CoreService) { }

	ngOnInit() {
	}

   getCloseValue($event){
   	this.serverStatusVisible = false;
   }

   /*
    * showFullScreen is show the element in fullscreen .
    */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }

   
   spinnerShow(id){ 
      switch(id){
         case "serverStatus":
            this.serverStatusShowSpinner = true;
            setTimeout(() => {
               this.serverStatusShowSpinner = false;
            }, 3000);
            
            break; 
      }
   }
}

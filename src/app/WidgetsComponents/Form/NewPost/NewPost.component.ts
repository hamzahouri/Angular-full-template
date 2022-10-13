import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../../../Services/GlobalService/Core.service';

@Component({
  selector: 'anglo-new-post',
  templateUrl: './NewPost.component.html',
  styleUrls: ['./NewPost.component.scss']
})
export class NewPostComponent implements OnInit {

   newPosttVisible    : boolean = true;
   newPostShowSpinner : boolean = false;

   public config: DropzoneConfigInterface = {
      clickable: true,
      maxFiles: 100
   };

   constructor(public translate : TranslateService,
      private coreService : CoreService) { }

   ngOnInit() {
   }
   
   /**
     * getCloseValue close the New Post Component.
     */
   getCloseValue($event){
      this.newPosttVisible = false;
   }

   /**
     * showFullScreen is show the New Post Component in fullscreen .
     */
   showFullScreen(id) {
      this.coreService.fullScreen(id);
   }

   /**
     * spinnerShow method reload the New Post Component.
     */
   spinnerShow(){
      this.newPostShowSpinner = true;
      setTimeout(() => {
         this.newPostShowSpinner = false;
      }, 3000);
   }
}



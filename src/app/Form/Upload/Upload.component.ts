import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective, FileDropDirective,  } from 'ng2-file-upload';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-upload',
  templateUrl: './Upload.component.html',
  styleUrls: ['./Upload.component.scss']
})
export class UploadComponent implements OnInit {

   private URL                    : string = 'https://evening-anchorage-3159.herokuapp.com/api/';
   public uploader                : FileUploader = new FileUploader({url:this.URL});
   public hasBaseDropZoneOver     : boolean = false;
   public hasAnotherDropZoneOver  : boolean = false;

   constructor(public translate : TranslateService) { }

   ngOnInit() {
   }

   /**
     *fileOverBase fires during 'over' and 'out' events for Drop Area.
     */
   public fileOverBase(e:any):void {
      this.hasBaseDropZoneOver = e;
   }

   /**
     *fileOverAnother fires after a file has been dropped on a Drop Area
     */
   public fileOverAnother(e:any):void {
      this.hasAnotherDropZoneOver = e;
   }
}

import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'anglo-dropzone',
  templateUrl: './Dropzone.component.html',
  styleUrls: ['./Dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {
  
   public config: DropzoneConfigInterface = {
      clickable   : true,
      maxFiles    : 100,
      autoReset   : null,
      errorReset  : null,
      cancelReset : null
   };

   constructor()
   { }

   ngOnInit() { }

}
import { Component, OnInit,Input} from '@angular/core';
import { AngularResizableDirective } from 'angular2-draggable';

@Component({
  selector: 'anglo-draggable-resizeable',
  templateUrl: './DraggableResizeable.component.html',
  styleUrls: ['./DraggableResizeable.component.scss']
})

export class DraggableResizeableComponent implements OnInit {


   size : any = { width : 300, height : 280};

   constructor() { }

   ngOnInit() {
   }

   /**
     * onResizeStart is used to Start the resizing.
     */
   onResizeStart(event) {  
      this.size = event.size;
   }

   /**
     * onResize is used to resizing the event.
     */
   onResizing(event) {    
      this.size = event.size; 
   }

   /**
     * onResizeStop is used to stop the resizing.
     */
   onResizeStop(event) {    
      this.size = event.size;   
   }

}

      
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anglo-dragula',
  templateUrl: './Dragula.component.html',
  styleUrls: ['./Dragula.component.scss']
})

export class DragulaComponent implements OnInit {
   
   list1 : any [] = 
      [ 
         'Its is too amezing component try it ! [click me]',
         'You can move these elements between these two containers [click me]',
         'Moving them anywhere else isn"t quite possible [click me]',
         'There"s also the possibility of moving elements around in the same container, changing their position [click me]'
      ]

   list2 : any [] = 
      ['This is the use case. You only need to specify the containers you want to use [click me]',
         'More interactive use cases lie ahead [click me]',
         'Another message [click me]',
         'Move on upper [click me]'
      ]

	constructor() { }

	ngOnInit() {
  	
   }
}



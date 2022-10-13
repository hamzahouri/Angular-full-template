import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anglo-draggable',
  templateUrl: './Draggable.component.html',
  styleUrls: ['./Draggable.component.scss']
})

export class DraggableComponent implements OnInit {

 	list1:Object[]=[
	 	{
	 		img:'/assets/img/user-3.jpg',
	 		heading:'John',
	 		paragraph:'"Project -- Setup the project..!'
	 	},
	 	{
	 		img:'/assets/img/user-4.jpg',
	 		heading:'Joao',
	 		paragraph:'"Project -- Setup the project..!'
	 	},
	 	{
	 		img:'/assets/img/user-10.jpg',
	 		heading:'Jean',
	 		paragraph:'"Project -- Setup the project..!'
 		}
 	]

 	list2:Object[]=[
	 	{
	 		img:'/assets/img/user-1.jpg',
	 		heading:'Juan',
	 		paragraph:'"Project -- Setup the project..!'
	 	},
	 	{
	 		img:'/assets/img/user-8.jpg',
	 		heading:'Edgard',
	 		paragraph:'"Project -- Setup the project..!'
	 	},
	 	{
	 		img:'/assets/img/user-3.jpg',
	 		heading:'Johnson',
	 		paragraph:'"Project -- Setup the project..!'
 		}
 	]

	constructor() {
   }

	ngOnInit() {
 	}
}

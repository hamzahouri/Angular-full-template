import { Component, OnInit } from '@angular/core';
import { IconService } from '../../Services/IconService/Icon.service';

@Component({
  selector      : 'anglo-linea',
  templateUrl   : './Linea.component.html',
  styleUrls     : ['./Linea.component.scss']
})

export class LineaComponent implements OnInit {

	lineaIcon      : any;

   constructor(private coreService:IconService) { }

   ngOnInit() {
     	this.getLineaIcon();
   }

   /** 
    * getLineaIcon method is used to get the Linea Icon response from the Icon service class. 
    */
   getLineaIcon(){
     	this.coreService.getLineaIcons().
     		subscribe( res => { this.lineaIcon = res['icons']},
                    err => console.log(err),
                    () => this.lineaIcon
     		         );
   }
}

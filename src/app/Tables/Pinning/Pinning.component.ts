import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pinning',
  templateUrl: './Pinning.component.html',
  styleUrls: ['./Pinning.component.scss']
})

export class PinningComponent implements OnInit {
   
   rows  = [];

   constructor(public translate : TranslateService) { 
      this.fetch((data) => {
         this.rows = data;
      });
   }

   ngOnInit() {
   }

   /**
     * fetch is used to fetch the data from JSON file.
     */
   fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', `/assets/data/100k.json`);

      req.onload = () => {
         cb(JSON.parse(req.response));
      };
      req.send();
   }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './Fullscreen.component.html',
  styleUrls: ['./Fullscreen.component.scss']
})

export class FullscreenComponent implements OnInit {
   
   rows = [];

   constructor() {
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

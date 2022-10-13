import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-basic',
  templateUrl: './Basic.component.html',
  styleUrls: ['./Basic.component.scss']
})

export class BasicComponent implements OnInit {

  	constructor(public translate : TranslateService) { }

  	ngOnInit() {
  	}

}

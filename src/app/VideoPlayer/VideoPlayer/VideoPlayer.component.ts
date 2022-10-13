import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-video-player',
  templateUrl: './VideoPlayer.component.html',
  styleUrls: ['./VideoPlayer.component.scss']
})

export class VideoPlayerComponent implements OnInit {

	constructor(public translate : TranslateService) { }

	ngOnInit() {}

}

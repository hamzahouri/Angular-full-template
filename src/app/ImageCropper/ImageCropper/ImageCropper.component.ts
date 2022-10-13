import { Component, OnInit} from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
	selector: 'anglo-image-cropper',
	templateUrl: './ImageCropper.component.html',
	styleUrls: ['./ImageCropper.component.scss']
})

export class ImageCropperComponent implements OnInit {

	image             : any = '';
	imageChangedEvent : any = '';
	croppedImage      : any = '';

	constructor() { }

	ngOnInit() {
	}
	 
	 /**
		 * fileChangeEvent is used to changes the image.
		 */
	 fileChangeEvent(event: any): void {
			this.imageChangedEvent = event;
	 }

	 /**
		 * imageCropped is used to crop the image.
		 */
	 imageCropped(event: ImageCroppedEvent) {
		this.croppedImage = event.base64;
	 }

	 /**
		 * onGenerate is used to generate the crop image.
		 */
	 onGenerate(){
			this.image = this.croppedImage;
	 }
	 
}

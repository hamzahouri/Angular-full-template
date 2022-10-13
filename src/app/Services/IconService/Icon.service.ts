import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class IconService {

   constructor(private http:HttpClient) { }

   // getIcons function to get the material icon from Json file.
   getIcons(){
     	return this.http.get('/assets/data/materialIcon.json').pipe(map(response=>response));
   }

   // getFontawesomeIcons function to get the fontawesome icon from Json file.
   getFontawesomeIcons(){
      return this.http.get('/assets/data/fontawesomeIcon.json').pipe(map(response=>response));
  	}

   // getGlyphIcons function to get the glyphIcon icon from Json file.
   getGlyphIcons(){
      return this.http.get('/assets/data/glyphIcon.json').pipe(map(response=>response));
   }

   // getLineaIcons function to get the linea icon from Json file.
   getLineaIcons(){
      return this.http.get('/assets/data/lineaIcon.json').pipe(map(response=>response));
   }

   // getSimpleLineIcons function to get the simpleLine icon from Json file.
   getSimpleLineIcons(){
      return this.http.get('/assets/data/simpleLineIcon.json').pipe(map(response=>response));
   }

}
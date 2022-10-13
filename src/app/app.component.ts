import {Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  	selector: 'app-root',
  	template:`
   <router-outlet></router-outlet>
  	         <ngx-loading-bar></ngx-loading-bar>`
})
export class AppComponent {
   constructor(translate: TranslateService) {
      translate.addLangs(['en', 'fr', 'he', 'ru' , 'ar' , 'zh' ,'de' , 'es', 'ja', 'ko' , 'it' ,'hu']);
      
      translate.setDefaultLang('en');

      const browserLang: string = translate.getBrowserLang();
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   }
}

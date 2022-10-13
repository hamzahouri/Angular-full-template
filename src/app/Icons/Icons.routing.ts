import { Routes } from '@angular/router';
import { MaterialComponent } from './Material/Material.component';
import { FontawesomeComponent } from './Fontawesome/Fontawesome.component';
import { GlyphiconsComponent } from './Glyphicons/Glyphicons.component';
import { LineaComponent } from './Linea/Linea.component';
import { SimpleLineIconsComponent } from './SimpleLineIcons/SimpleLineIcons.component';

export const IconsRoutes: Routes = [{
      path: '',
      redirectTo: 'material',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'material',
            component: MaterialComponent
         },
         {
            path: 'fontawesome',
            component: FontawesomeComponent
         },
         {
            path: 'glyphicons',
            component: GlyphiconsComponent
         },
         {
            path: 'linea',
            component: LineaComponent
         },
         {
            path: 'simple-line-icons',
            component: SimpleLineIconsComponent 
         }
      ]
   }
];

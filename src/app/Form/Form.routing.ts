import { Routes }   from '@angular/router';

import { FormValidationComponent } from './FormValidation/FormValidation.component';
import { FormWizardComponent }     from './FormWizard/FormWizard.component';
import { FormElementsComponent } from './FormElements/FormElements.component';
import { UploadComponent } from './Upload/Upload.component';

export const FormsRoutes: Routes = [{
      path       : '',
      redirectTo : 'form-validation',
      pathMatch  : 'full',
   },
   {
      path     : '',
      children : [
         {
            path      : 'form-validation',
            component : FormValidationComponent
         },
         {
            path      : 'form-wizard',
            component : FormWizardComponent
         },
         {
            path      : 'form-elements',
            component : FormElementsComponent
         },
         {
            path      : 'form-upload',
            component : UploadComponent
         }
      ]
   }
];

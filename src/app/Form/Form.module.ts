import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArchwizardModule } from 'angular-archwizard';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

import { FormsRoutes } from './Form.routing';

import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';
import { FormValidationComponent } from './FormValidation/FormValidation.component';
import { FormWizardComponent } from './FormWizard/FormWizard.component';
import { FormElementsComponent } from './FormElements/FormElements.component';
import { UploadComponent } from './Upload/Upload.component';

@NgModule({
  	imports: [
	   CommonModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatCheckboxModule,
      MatDividerModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatFormFieldModule,
      MatProgressBarModule,
      FlexLayoutModule,
	   RouterModule.forChild(FormsRoutes),
	   ReactiveFormsModule,
	   FormsModule,
	   ArchwizardModule,
	   HttpClientModule,
      FileUploadModule,
      WidgetsComponentsModule,
      TranslateModule
  	],
  	declarations: [
  		FormValidationComponent,					
  		FormWizardComponent,
      FormElementsComponent,
      UploadComponent
  	]
})

export class FormModule { }

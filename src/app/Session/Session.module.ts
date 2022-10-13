import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule,
			FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { SessionRoutes } from './Session.routing';
import { SignupComponent } from './Signup/Signup.component';
import { LoginComponent } from './Login/Login.component';
import { LockScreenComponent } from './LockScreen/LockScreen.component';
import { WidgetsComponentsModule } from "../WidgetsComponents/WidgetsComponents.module";
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { ResetPasswordComponent } from './ResetPassword/ResetPassword.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(SessionRoutes),
		FlexLayoutModule,
		MatFormFieldModule,
		MatCardModule,
		MatCheckboxModule,
		MatInputModule,
		ReactiveFormsModule,
		FormsModule,
		MatButtonModule,
		WidgetsComponentsModule,
		TranslateModule,
		ToastrModule.forRoot()
	],
	declarations: [SignupComponent, LoginComponent, LockScreenComponent, ForgotPasswordComponent, ResetPasswordComponent, NavBarComponent, FooterComponent]
})

export class SessionModule { }

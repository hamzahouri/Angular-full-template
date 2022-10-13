import { Routes } from '@angular/router';

import { SignupComponent } from './Signup/Signup.component';
import { LoginComponent } from './Login/Login.component';
import { LockScreenComponent } from './LockScreen/LockScreen.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component'
import { ResetPasswordComponent } from './ResetPassword/ResetPassword.component';

export const SessionRoutes: Routes = [
   {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'sign-up',
            component: SignupComponent
         },
         {
            path: 'login',
            component: LoginComponent
         },
         {
            path: 'lock-screen',
            component: LockScreenComponent
         },
         {
            path: 'forgot-password',
            component:ForgotPasswordComponent 
         },
         {
            path: 'reset-password',
            component:ResetPasswordComponent
         }
      ]
   }
];

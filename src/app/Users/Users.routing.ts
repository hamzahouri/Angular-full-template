import { Routes } from '@angular/router';
import { UserProfileComponent } from './UserProfile/UserProfile.component';
import { UsersListComponent } from './UsersList/UsersList.component';

export const UsersRoutes: Routes = [{
      path: '',
      redirectTo: 'user-profile',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'user-profile',
            component:  UserProfileComponent 
         },
         {
            path: 'users-list',
            component:  UsersListComponent
         }
      ]
   }
];

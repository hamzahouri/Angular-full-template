import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { UsersRoutes } from './Users.routing';
import { UsersListComponent } from './UsersList/UsersList.component';
import { UserProfileComponent } from './UserProfile/UserProfile.component';
import { WidgetsComponentsModule} from '../WidgetsComponents/WidgetsComponents.module';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(UsersRoutes),
		WidgetsComponentsModule,
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		FlexLayoutModule,
		MatDividerModule,
		TranslateModule
	],

	declarations: [UserProfileComponent, UsersListComponent]
})

export class UsersModule { }

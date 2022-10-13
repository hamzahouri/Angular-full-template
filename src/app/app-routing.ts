import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthGuard } from './Core/Guards/auth.guard';

import { VerticalLayoutComponent }   from './Layouts/VerticalLayout/VerticalLayout.component';

export const AppRoutes: Routes = [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
   },
   {
      path: 'session',
      loadChildren: () => import('./Session/Session.module').then(m => m.SessionModule)
   },
   {
      path: '',
      component: VerticalLayoutComponent,
      canActivate: [AuthGuard],
      runGuardsAndResolvers: 'always',
      children: [
         {
            path: 'dashboard',loadChildren:()=>import('./Dashboard/Dashboard.module').then(m => m.DashboardModule)
         },
         {
            path: 'widgets',
            loadChildren:()=> import('./Widgets/Widgets.module').then(m => m.WidgetsModule)
         },
         {
            path: 'ecommerce',
            loadChildren:()=> import('./Ecommerce/Ecommerce.module').then(m => m.EcommerceModule)
         },
         {
            path: 'charts',
            loadChildren:()=> import('./Charts/Charts.module').then(m => m.ChartsModule)
         },
         {
            path: 'pages',
            loadChildren:()=> import('./Pages/Pages.module').then(m => m.PagesModule)
         },
         {
            path: 'ui-elements',
            loadChildren:()=> import('./UiElements/UiElements.module').then(m => m.UiElementsModule)
         },
         {
            path: 'inbox',
            loadChildren:()=> import('./Inbox/Inbox.module').then(m => m.InboxModule)
         },
         {
            path: 'chat',
            loadChildren:()=> import('./Chat/Chat.module').then(m => m.ChatModule)
         },
         {
            path: 'forms',
            loadChildren:()=> import('./Form/Form.module').then(m => m.FormModule)
         },
         {
            path: 'maps',
            loadChildren:()=> import('./Maps/Maps.module').then(m => m.MapsModule)
         },
         {
            path: 'users',
            loadChildren:()=> import('./Users/Users.module').then(m => m.UsersModule)
         },
         {
            path: 'calendar',
            loadChildren:()=> import('./Calendar/Calendar.module').then(m => m.Calendar_Module)
         },
         {
            path: 'editor',
            loadChildren:()=> import('./Editor/Editor.module').then(m => m.EditorModule)
         },
         {
            path: 'drag-drop',
            loadChildren:()=> import('./DragDrop/DragDrop.module').then(m => m.DragDropModule)
         },
         {
            path: 'tables',
            loadChildren:()=> import('./Tables/Tables.module').then(m => m.TablesModule)
         },
         {
            path: 'icons',
            loadChildren:()=> import('./Icons/Icons.module').then(m => m.IconsModule)
         },
         {
            path: 'image-cropper',
            loadChildren:()=> import('./ImageCropper/ImageCropper.module').then(m => m.ImageCropperModules)
         },
         {
            path: 'dropzone',
            loadChildren:()=> import('./Dropzone/Dropzone.module').then(m => m.DropzoneModules)
         },
         {
            path: 'video-player',
            loadChildren:()=> import('./VideoPlayer/VideoPlayer.module').then(m => m.VideoPlayerModule)
         }
      ]
   },
   {
      path: '**',
      redirectTo: 'session'
   }
];


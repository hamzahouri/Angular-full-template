import { Injectable } from '@angular/core';

export interface MenuItems {
  state?: string;
  name: string;
  type: string;
  icon: string;
  class:string;
  children?: MenuItems[];
  isOpen ?: boolean;
  isFirst ?: boolean;
}


const MENUITEMS = [
   {
      name : 'General',
      type : 'sub',
      class: 'group-title',
      icon : '',
      isOpen:true,
      isFirst : true,
      children : [
         {
            state: 'dashboard',
            name: 'Dashboard',
            type: 'subChild',
            class: 'nav-item',
            icon: 'dashboard',
            isOpen:true,
            children: [
               {state: 'ecommerce', name: 'E-Commerce', type:'link', class:'list-item child-item'},
               {state: 'web-analytics', name: 'Web Analytics', type:'link', class:'list-item child-item'}
            ]
         },
         {
            state: 'widgets',
            name: 'Widgets',
            type: 'subChild',
            class: 'nav-item',
            icon: 'widgets',
            children: [
               {state: 'user', name: 'User', type:'link',class:'list-item child-item'},
               {state: 'charts', name: 'Charts', type:'link',class:'list-item child-item'}
            ]
         },
         {
            state: 'ecommerce',
            name: 'E-Commerce',
            type: 'subChild',
            class: 'nav-item',
            icon: 'shopping_cart',
            children: [
               {state: 'shop', name: 'Shop', type:'link',class:'list-item child-item'},
               {state: 'cart', name: 'Cart', type:'link',class:'list-item child-item'},
               {state: 'checkout', name: 'Checkout', type:'link',class:'list-item child-item'},
               {state: 'cards', name: 'Cards', type:'link',class:'list-item child-item'}
            ]
         },
         {
            state: 'pages',
            name: 'Pages',
            type: 'subChild',
            class: 'nav-item',
            icon: 'description',
            children: [
               {state: 'blog', name: 'Blog', type:'link', class:'list-item child-item'},
               {state: 'gallery', name: 'Gallery', type:'link', class:'list-item child-item'},
               {state: 'pricing-1', name: 'Pricing 1', type:'link', class:'list-item child-item'},
               {state: 'pricing-2', name: 'Pricing 2', type:'link', class:'list-item child-item'},
               {state: 'blank', name: 'Blank', type:'link', class:'list-item child-item'}
            ]
         },
         {
            state: 'session',
            name: 'Session',
            type: 'subChild',
            class: 'nav-item',
            icon: 'query_builder',
            children: [
               {state: 'sign-up', name: 'Sign Up', type:'link', class:'list-item child-item'},
               {state: 'login', name: 'Login', type:'link', class:'list-item child-item'},
               {state: 'lock-screen', name: 'Lock Screen', type:'link', class:'list-item child-item'},
               {state: 'forgot-password', name: 'Forgot Password', type:'link', class:'list-item child-item'},
               {state: 'reset-password', name: 'Reset Password', type:'link', class:'list-item child-item'}
            ]
         }
      ]
   },
   {
      name : 'Modules',
      type : 'sub',
      class: 'group-title',
      icon : '',
      isOpen:true,
      children : [
         {
            state: 'inbox',
            name: 'Inbox',
            type: 'link',
            class: 'nav-item',
            icon: 'mail'
         },
         {
            state: 'chat',
            name: 'Chat',
            type: 'link',
            class: 'nav-item',
            icon: 'forum'
         },
      ]
   },
   {
      name : 'Components',
      type : 'sub',
      class: 'group-title',
      icon : '',
      isOpen:true,
      children : [
         {
            state: 'ui-elements',
            name: 'UI Elements',
            type: 'subChild',
            class: 'nav-item',
            icon: 'build',
            children: [
               {state: 'buttons', name: 'Buttons', type:'link', class:'list-item child-item'},
               {state: 'cards', name: 'Cards', type:'link', class:'list-item child-item'},
               {state: 'checkbox', name: 'Checkbox', type:'link', class:'list-item child-item'},
               {state: 'carousel', name: 'Carousel', type:'link', class:'list-item child-item'},
               {state: 'chips', name: 'Chips', type:'link', class:'list-item child-item'},
               {state: 'datepicker', name: 'Datepicker', type:'link', class:'list-item child-item'},
               {state: 'dialog', name: 'Dialog', type:'link', class:'list-item child-item'},
               {state: 'grid', name: 'Grid', type:'link', class:'list-item child-item'},
               {state: 'input', name: 'Input', type:'link', class:'list-item child-item'},
               {state: 'list', name: 'List', type:'link', class:'list-item child-item'},
               {state: 'menu', name: 'Menu', type:'link', class:'list-item child-item'},
               {state: 'progress', name: 'Progress', type:'link', class:'list-item child-item'},
               {state: 'radio', name: 'Radio', type:'link', class:'list-item child-item'},
               {state: 'select', name: 'Select', type:'link', class:'list-item child-item'},
               {state: 'slider', name: 'Slider', type:'link', class:'list-item child-item'},
               {state: 'snackbar', name: 'Snackbar', type:'link', class:'list-item child-item'},
               {state: 'tabs', name: 'Tabs', type:'link', class:'list-item child-item'},
               {state: 'toolbar', name: 'Toolbar', type:'link', class:'list-item child-item'},
               {state: 'tooltip', name: 'Tooltip', type:'link', class:'list-item child-item'},
               {state: 'timepicker', name: 'Timepicker', type:'link', class:'list-item child-item'}
            ]
         },
         {
            state: 'forms',
            name: 'Forms',
            type: 'subChild',
            class: 'nav-item',
            icon: 'description',
            children: [
               {state: 'form-validation', name: 'Form Validation', type:'link', class:'list-item child-item'},
               {state: 'form-wizard', name: 'Form Wizard', type:'link', class:'list-item child-item'},
               {state: 'form-elements', name: 'Form Elements', type:'link', class:'list-item child-item'},
               {state: 'form-upload', name: 'Form Upload', type:'link', class:'list-item child-item'}
            ]
         },
         {
            state: 'charts',
            name: 'Charts',
            type: 'subChild',
            class: 'nav-item',
            icon: 'donut_large',
            children: [
               {state: 'ngx-charts', name: 'Ngx Charts', type:'link', class:'list-item child-item'},
               {state: 'ngx-echarts', name: 'Ngx Echarts', type:'link', class:'list-item child-item'},
               {state: 'google-charts', name: 'Google Charts', type:'link', class:'list-item child-item'}
            ]
         },
         {
            state: 'icons',
            name: 'Icons',
            type: 'subChild',
            class: 'nav-item',
            icon: 'flag',
            children: [
               {state: 'material', name: 'Material', type:'link', class:'list-item child-item'},
               {state: 'glyphicons', name: 'Glyphicons', type:'link', class:'list-item child-item'},
               {state: 'fontawesome', name: 'Fontawesome', type:'link', class:'list-item child-item'},
               {state: 'linea', name: 'Linea', type:'link', class:'list-item child-item'},
               {state: 'simple-line-icons', name: 'Simple Line Icons', type:'link', class:'list-item child-item'},        
            ]
         },
         {
            state: 'tables',
            name: 'Tables',
            type: 'subChild',
            class: 'nav-item',
            icon: 'grid_on',
            children: [
               {state: 'standard', name: 'Standard', type:'link', class:'list-item child-item'},
               {state: 'slots', name: 'Slots', type:'link', class:'list-item child-item'},
               {state: 'selectablerows', name: 'Selectable', type:'link', class:'list-item child-item'},
               {state: 'searchwithtext', name: 'Search Row', type:'link', class:'list-item child-item'},
               {state: 'basic', name: 'Basic', type:'link', class:'list-item child-item'},
               {state: 'fullscreen', name: 'Fullscreen', type:'link', class:'list-item child-item'},
               {state: 'selection', name: 'Selection', type:'link', class:'list-item child-item'},
               {state: 'pinning', name: 'Pinning', type:'link', class:'list-item child-item'},
               {state: 'paging', name: 'Paging', type:'link', class:'list-item child-item'},
               {state: 'editing', name: 'Editing', type:'link', class:'list-item child-item'}
            ]
         },
         {
            state: 'maps',
            name: 'Maps',
            type: 'subChild',
            class: 'nav-item',
            icon: 'map',
            children: [
               {state: 'google-maps', name: 'Google Maps', type:'link', class:'list-item child-item'},
               {state: 'leaflet-maps', name: 'Leaflet Maps', type:'link', class:'list-item child-item'},
               {state: 'jvector-map', name: 'Jvector Map', type:'link', class:'list-item child-item'}
            ]
         },
      ]
   },
   {
      name : 'Applications',
      type : 'sub',
      icon : '',
      class: 'group-title',
      isOpen:true,
      children : [
         {
            state: 'users',
            name: 'Users',
            type: 'subChild',
            class: 'nav-item',
            icon: 'group',
            children: [
               {state: 'user-profile', name: 'User Profile', type:'link', class:'list-item child-item'},
               {state: 'users-list', name: 'Users List', type:'link', class:'list-item child-item'}
            ]
         },
         {
            state : 'calendar',
            name  : 'Calendar',
            type  : 'link',
            class: 'nav-item',
            icon: 'calendar_today'
         }
      ]
   },
   {
      name : 'Features',
      type : 'sub',
      class: 'group-title',
      icon : '',
      isOpen:true,
      children : [
         {
            state: 'editor',
            name: 'Editor',
            type: 'subChild',
            class: 'nav-item',
            icon: 'edit',
            children: [
               {state: 'quilleditor', name: 'Quill Editor', type:'link', class:'list-item child-item'},
               {state: 'ace-editor', name: 'Ace Editor', type:'link', class:'list-item child-item'},
               {state: 'summer-editor', name: 'Summer Editor', type:'link', class:'list-item child-item'},
               {state: 'ckeditor', name: 'Ckeditor', type:'link', class:'list-item child-item'}
            ]
         },
         {
            state: 'drag-drop',
            name: 'Drag And Drop',
            type: 'subChild',
            class: 'nav-item',
            icon: 'mouse',
            children: [
               {state: 'dragula', name: 'Dragula', type:'link', class:'list-item child-item'},
               {state: 'draggable', name: 'Draggable', type:'link', class:'list-item child-item'},
               {state: 'draggable_resizable', name: 'Draggable Resizable', type:'link', class:'list-item child-item'},
            ]
         },
         {
            state: 'image-cropper',
            name: 'Image Cropper',
            class: 'nav-item',
            type: 'link',
            icon: 'crop'
         },
         {
            state: 'video-player',
            name: 'Video Player',
            type: 'link',
            class: 'nav-item',
            icon: 'video_library'
         },
         {
            state: 'dropzone',
            name: 'Dropzone',
            type: 'link',
            class: 'nav-item',
            icon: 'file_copy'
         },
      ]
   }
]

@Injectable()
export class MenuItems {
  getAll(){
    return MENUITEMS;
  }
}

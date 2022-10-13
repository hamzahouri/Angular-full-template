import { Component, OnInit} from '@angular/core';
declare var $: any;
import {Router,Params,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'anglo-summer-editor',
  templateUrl: './SummerEditor.component.html',
  styleUrls: ['./SummerEditor.component.scss']
})
export class SummerEditorComponent implements OnInit {
  
   
   toolbar: [
      // [groupName, [list of button]]
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['strikethrough', 'superscript', 'subscript']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['400']]
   ]

   constructor(private router: Router,
               private route :ActivatedRoute) { }

   ngOnInit() {
   }

   /**
     * displaySummerEditor is used to display the summernote.
     */
   displaySummerEditor() {   
      $("#summernote").summernote(
      {
         height: 400, 
         minHeight: null,
         maxHeight: null, 
         focus: true 
      });  
      return true; 
   }
}
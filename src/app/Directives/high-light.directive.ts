import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @Input() appHighlight = 'blue';
  constructor(private el: ElementRef) { 
    console.log('yoyo')
  }

}

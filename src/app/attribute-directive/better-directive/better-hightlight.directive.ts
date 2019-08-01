import { Directive, OnInit , Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  constructor(public renderer : Renderer2 , private elRef : ElementRef ) { }

  ngOnInit(){
   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); //4 agruments are there but you can pass 3 also
                          // the native element    // property for style // value of the style property
   this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff');
  }
}

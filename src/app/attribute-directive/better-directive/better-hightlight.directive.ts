import { Directive, OnInit , Renderer2, ElementRef, HostListener } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

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

  @HostListener('mouseenter') mouseover(evnetData : Event){
    this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'yellow');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#000');
    this.renderer.setStyle(this.elRef.nativeElement, 'border', '1px solid')
  }

  @HostListener('mouseleave') mouseleave(evnetData : Event){
    this.renderer.setStyle(this.elRef.nativeElement , 'background-color', '#f2f2f2');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#000');
    this.renderer.setStyle(this.elRef.nativeElement, 'border', '1px solid')
  }
}

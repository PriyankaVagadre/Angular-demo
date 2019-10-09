import { OnInit ,Directive , ElementRef, HostListener, Renderer2, HostBinding} from '@angular/core';

@Directive(
  { selector: '[dropdown]'
})
export class DropDownDirective implements OnInit{
  @HostBinding('class.open') isOpen = false;
  constructor (public render : Renderer2, private elRef : ElementRef){}
  ngOnInit(){
  }

  // @HostListener('click') click(event : Event){
  //   this.render.setAttribute(this.elRef.nativeElement, 'class', 'open')
  // }

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}

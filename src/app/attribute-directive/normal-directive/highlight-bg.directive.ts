import { OnInit ,Directive , ElementRef} from '@angular/core';

@Directive(
  { selector: '[highlightBg]'
})
export class HightLightBackground implements OnInit{
  constructor (private reElement : ElementRef){}
  ngOnInit(){
    this.reElement.nativeElement.style.backgroundColor = 'green';
    this.reElement.nativeElement.style.color = '#fff';
  }

}

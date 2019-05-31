import { Directive, ElementRef, OnInit, HostListener, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appBasicDirective]'
})
export class BasicDirectiveDirective implements OnInit {

  constructor(private refElemenst: ElementRef,private renderer: Renderer) { }
  ngOnInit(){
    //
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('grey');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.renderer.setElementStyle(this.refElemenst.nativeElement,'backgroundColor', color);
    //this.renderer.setElementStyle(this.refElemenst,'disabled', 'disabled');
  }

}

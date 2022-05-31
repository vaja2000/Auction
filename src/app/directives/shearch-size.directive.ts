import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShearchSize]'
})
export class ShearchSizeDirective {

  constructor(
    private element:ElementRef,
    private renderer:Renderer2
  ) { }
  // @HostListener("mouseenter") onElementMouseOver () {
  //   this.renderer.setStyle(this.element.nativeElement, "width", "70%")
  //   this.renderer.setStyle(this.element.nativeElement, "box-shadow", "0px -2px 12px 5px #b3f5ff")
  //   this.renderer.setStyle(this.element.nativeElement, "background", "radial-gradient(circle, rgba(224,12,127,1) 0%, rgb(0, 199, 230) 40%)")
  // }
}

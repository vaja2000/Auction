import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShearchSize]'
})
export class ShearchSizeDirective {

  constructor(
    private element:ElementRef,
    private renderer:Renderer2
  ) { }
}

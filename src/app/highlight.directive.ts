import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('chocolate', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, 'white');
  }

  private highlight(color: string, textLook: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = textLook;
  }

}

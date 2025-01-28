import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() highlight:string = "";

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2
  ) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.changeBackgroundColor(true);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.changeBackgroundColor(false);
  }

  private changeBackgroundColor(add:boolean){
    if(add){
      this.renderer.addClass(this.el.nativeElement, this.highlight);
    }else{
      this.renderer.removeClass(this.el.nativeElement, "bg-primary");

    }
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", this.highlight);
  }

  

}

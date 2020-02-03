import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  private open: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    
  }

  @HostListener('click') toggleMenu(eventData: Event) {
    if(!this.open) {
      this.open = true;
      this.renderer.addClass(this.elRef.nativeElement, 'open')
    } else {
      this.open = false;
      this.renderer.removeClass(this.elRef.nativeElement, 'open')
    }
  }
  
}
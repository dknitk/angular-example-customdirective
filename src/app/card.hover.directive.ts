import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: "[ccCardHover]"
})
// Custom Directive for MouseOver and MouseOut
export class CardHoverDirective {

  @HostBinding('class.card-outline-primary') private ishovering: boolean;

  constructor(private el:ElementRef,
              private renderer: Renderer2){

      console.log("Custom Directive CardHoverDirective Called......");

      //this.renderer.setAttribute(el.nativeElement, 'backgroundColor', 'gray');
  }
  @HostListener('mouseover') onMouseOver(){
    
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setAttribute(part, 'display' , 'block');
    
    this.ishovering = true;
  }
  @HostListener('mouseOut') onMouseOut(){
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setAttribute(part, 'display' , 'none');

    this.ishovering = false;

  }
}
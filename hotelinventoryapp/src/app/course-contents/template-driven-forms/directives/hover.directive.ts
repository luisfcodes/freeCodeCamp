import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() color!: string

  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ){}

  ngOnInit() {
    this.element.nativeElement.style.color = this.color
    this.document.body.style.backgroundColor = 'orange'
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.document.body.style.backgroundColor = this.color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.document.body.style.backgroundColor = 'orange'
  }
}
